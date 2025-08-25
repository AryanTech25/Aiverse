"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export interface ModuleProgress {
  id: string
  completed: boolean
  videoWatched: boolean
  documentationRead: boolean
  quizCompleted: boolean
  quizScore?: number
  completedAt?: Date
}

export interface CourseAssessment {
  completed: boolean
  score?: number
  attempts: number
  maxAttempts: number
  completedAt?: Date
  passed: boolean // true if score >= 50%
}

export interface CourseProgress {
  courseId: string
  modules: Record<string, ModuleProgress>
  assessment: CourseAssessment
  overallProgress: number
  certificateEarned: boolean
  certificateEligible: boolean // true when assessment is passed
  startedAt: Date
  completedAt?: Date
}

export interface UserProgress {
  courses: Record<string, CourseProgress>
  totalCoursesStarted: number
  totalCoursesCompleted: number
  totalCertificatesEarned: number
  streakDays: number
  lastActivityDate?: Date
}

interface ProgressContextType {
  progress: UserProgress
  updateModuleProgress: (courseId: string, moduleId: string, updates: Partial<ModuleProgress>) => void
  markVideoWatched: (courseId: string, moduleId: string) => void
  markDocumentationRead: (courseId: string, moduleId: string) => void
  completeQuiz: (courseId: string, moduleId: string, score: number) => void
  completeAssessment: (courseId: string, score: number) => void
  startCourse: (courseId: string) => void
  completeCourse: (courseId: string) => void
  getCourseProgress: (courseId: string) => CourseProgress | null
  getModuleProgress: (courseId: string, moduleId: string) => ModuleProgress | null
  isModuleUnlocked: (courseId: string, moduleId: string) => boolean
  isQuizUnlocked: (courseId: string, moduleId: string) => boolean
  isAssessmentUnlocked: (courseId: string) => boolean
  isCertificateEligible: (courseId: string) => boolean
  getAverageQuizScore: (courseId: string) => number
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

const defaultProgress: UserProgress = {
  courses: {},
  totalCoursesStarted: 0,
  totalCoursesCompleted: 0,
  totalCertificatesEarned: 0,
  streakDays: 0,
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress)

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("aiverse-progress")
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress)
        // Convert date strings back to Date objects
        Object.values(parsed.courses).forEach((course: any) => {
          if (course.startedAt) course.startedAt = new Date(course.startedAt)
          if (course.completedAt) course.completedAt = new Date(course.completedAt)
          if (course.assessment?.completedAt) course.assessment.completedAt = new Date(course.assessment.completedAt)
          Object.values(course.modules).forEach((module: any) => {
            if (module.completedAt) module.completedAt = new Date(module.completedAt)
          })
        })
        if (parsed.lastActivityDate) parsed.lastActivityDate = new Date(parsed.lastActivityDate)
        setProgress(parsed)
      } catch (error) {
        console.error("Failed to load progress from localStorage:", error)
      }
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("aiverse-progress", JSON.stringify(progress))
  }, [progress])

  const updateModuleProgress = (courseId: string, moduleId: string, updates: Partial<ModuleProgress>) => {
    setProgress((prev) => {
      const newProgress = { ...prev }

      // Initialize course if it doesn't exist
      if (!newProgress.courses[courseId]) {
        newProgress.courses[courseId] = {
          courseId,
          modules: {},
          assessment: {
            completed: false,
            attempts: 0,
            maxAttempts: 3,
            passed: false,
          },
          overallProgress: 0,
          certificateEarned: false,
          certificateEligible: false,
          startedAt: new Date(),
        }
        newProgress.totalCoursesStarted += 1
      }

      // Initialize module if it doesn't exist
      if (!newProgress.courses[courseId].modules[moduleId]) {
        newProgress.courses[courseId].modules[moduleId] = {
          id: moduleId,
          completed: false,
          videoWatched: false,
          documentationRead: false,
          quizCompleted: false,
        }
      }

      // Update module
      const module = { ...newProgress.courses[courseId].modules[moduleId], ...updates }

      // Check if module is now completed
      if (module.videoWatched && module.documentationRead && module.quizCompleted && !module.completed) {
        module.completed = true
        module.completedAt = new Date()
      }

      newProgress.courses[courseId].modules[moduleId] = module

      // Recalculate course progress
      const modules = Object.values(newProgress.courses[courseId].modules)
      const completedModules = modules.filter((m) => m.completed).length
      const moduleProgress = modules.length > 0 ? (completedModules / modules.length) * 80 : 0 // Modules are 80% of total progress
      const assessmentProgress = newProgress.courses[courseId].assessment.passed ? 20 : 0 // Assessment is 20% of total progress

      newProgress.courses[courseId].overallProgress = moduleProgress + assessmentProgress

      // Update last activity
      newProgress.lastActivityDate = new Date()

      return newProgress
    })
  }

  const markVideoWatched = (courseId: string, moduleId: string) => {
    updateModuleProgress(courseId, moduleId, { videoWatched: true })
  }

  const markDocumentationRead = (courseId: string, moduleId: string) => {
    updateModuleProgress(courseId, moduleId, { documentationRead: true })
  }

  const completeQuiz = (courseId: string, moduleId: string, score: number) => {
    updateModuleProgress(courseId, moduleId, {
      quizCompleted: true,
      quizScore: score,
    })
  }

  const completeAssessment = (courseId: string, score: number) => {
    setProgress((prev) => {
      const newProgress = { ...prev }

      if (!newProgress.courses[courseId]) return prev

      const course = newProgress.courses[courseId]
      const passed = score >= 50

      course.assessment = {
        completed: true,
        score,
        attempts: course.assessment.attempts + 1,
        maxAttempts: course.assessment.maxAttempts,
        completedAt: new Date(),
        passed,
      }

      // Update certificate eligibility
      course.certificateEligible = passed

      // If passed, mark course as completed and eligible for certificate
      if (passed && !course.completedAt) {
        course.completedAt = new Date()
        newProgress.totalCoursesCompleted += 1

        // Only award certificate if assessment is passed
        if (!course.certificateEarned) {
          course.certificateEarned = true
          newProgress.totalCertificatesEarned += 1
        }
      }

      // Recalculate overall progress
      const modules = Object.values(course.modules)
      const completedModules = modules.filter((m) => m.completed).length
      const moduleProgress = modules.length > 0 ? (completedModules / modules.length) * 80 : 0
      const assessmentProgress = passed ? 20 : 0
      course.overallProgress = moduleProgress + assessmentProgress

      newProgress.lastActivityDate = new Date()

      return newProgress
    })
  }

  const startCourse = (courseId: string) => {
    if (!progress.courses[courseId]) {
      setProgress((prev) => ({
        ...prev,
        courses: {
          ...prev.courses,
          [courseId]: {
            courseId,
            modules: {},
            assessment: {
              completed: false,
              attempts: 0,
              maxAttempts: 3,
              passed: false,
            },
            overallProgress: 0,
            certificateEarned: false,
            certificateEligible: false,
            startedAt: new Date(),
          },
        },
        totalCoursesStarted: prev.totalCoursesStarted + 1,
        lastActivityDate: new Date(),
      }))
    }
  }

  const completeCourse = (courseId: string) => {
    setProgress((prev) => {
      const newProgress = { ...prev }
      if (newProgress.courses[courseId] && !newProgress.courses[courseId].completedAt) {
        // Only complete course if assessment is passed
        if (newProgress.courses[courseId].assessment.passed) {
          newProgress.courses[courseId].completedAt = new Date()
          newProgress.courses[courseId].certificateEarned = true
          newProgress.totalCoursesCompleted += 1
          newProgress.totalCertificatesEarned += 1
        }
      }
      return newProgress
    })
  }

  const getCourseProgress = (courseId: string): CourseProgress | null => {
    return progress.courses[courseId] || null
  }

  const getModuleProgress = (courseId: string, moduleId: string): ModuleProgress | null => {
    return progress.courses[courseId]?.modules[moduleId] || null
  }

  const isModuleUnlocked = (courseId: string, moduleId: string): boolean => {
    // First module is always unlocked
    if (moduleId === "module-1" || moduleId === "intro-ml" || moduleId === "cyber-intro") return true

    // For sequential unlocking, check if previous module is completed
    const courseProgress = getCourseProgress(courseId)
    if (!courseProgress) return false

    const moduleIds = Object.keys(courseProgress.modules).sort()
    const currentIndex = moduleIds.indexOf(moduleId)

    if (currentIndex <= 0) return true // First module or not found

    const previousModuleId = moduleIds[currentIndex - 1]
    const previousModule = getModuleProgress(courseId, previousModuleId)

    return previousModule?.completed || false
  }

  const isQuizUnlocked = (courseId: string, moduleId: string): boolean => {
    const moduleProgress = getModuleProgress(courseId, moduleId)
    return (moduleProgress?.videoWatched && moduleProgress?.documentationRead) || false
  }

  const isAssessmentUnlocked = (courseId: string): boolean => {
    const courseProgress = getCourseProgress(courseId)
    if (!courseProgress) return false

    const modules = Object.values(courseProgress.modules)
    if (modules.length === 0) return false

    return modules.every((module) => module.completed)
  }

  const isCertificateEligible = (courseId: string): boolean => {
    const courseProgress = getCourseProgress(courseId)
    return courseProgress?.assessment.passed || false
  }

  const getAverageQuizScore = (courseId: string): number => {
    const courseProgress = getCourseProgress(courseId)
    if (!courseProgress) return 0

    const modules = Object.values(courseProgress.modules)
    const completedQuizzes = modules.filter((m) => m.quizCompleted && m.quizScore !== undefined)

    if (completedQuizzes.length === 0) return 0

    const totalScore = completedQuizzes.reduce((sum, module) => sum + (module.quizScore || 0), 0)
    return Math.round(totalScore / completedQuizzes.length)
  }

  return (
    <ProgressContext.Provider
      value={{
        progress,
        updateModuleProgress,
        markVideoWatched,
        markDocumentationRead,
        completeQuiz,
        completeAssessment,
        startCourse,
        completeCourse,
        getCourseProgress,
        getModuleProgress,
        isModuleUnlocked,
        isQuizUnlocked,
        isAssessmentUnlocked,
        isCertificateEligible,
        getAverageQuizScore,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider")
  }
  return context
}
