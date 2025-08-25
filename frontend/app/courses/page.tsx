"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Star, Search, Filter, Award } from "lucide-react"
import Link from "next/link"
import { useProgress } from "@/contexts/progress-context"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function CoursesPage() {
  const { getCourseProgress } = useProgress()
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const courses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      instructor: "Dr. Sarah Chen",
      description: "Learn the fundamentals of machine learning with hands-on projects and real-world applications.",
      level: "Beginner",
      duration: "8 hours",
      students: 1250,
      rating: 4.6,
      reviews: 324,
      price: "Free",
      thumbnail: "https://media.istockphoto.com/id/844535726/photo/presentation-about-machine-learning-technology-scientist-touching-screen-artificial.jpg?s=612x612&w=0&k=20&c=zPVl1sUnQisKrcKgBaMUUl6yFr7ybOne9UPHDnIizL8=",
      tags: ["Machine Learning", "Python", "Scikit-learn"],
      category: "ml",
    },
    {
      id: 2,
      title: "Deep Learning with PyTorch",
      instructor: "Prof. Michael Rodriguez",
      description: "Master deep learning concepts and build neural networks using PyTorch framework.",
      level: "Intermediate",
      duration: "12 hours",
      students: 856,
      rating: 4.8,
      reviews: 198,
      price: "$99",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1024/1*t6hCM90evdnlPw4l9VK3AQ.png",
      tags: ["Deep Learning", "PyTorch", "Neural Networks"],
      category: "dl",
    },
    {
      id: 3,
      title: "Natural Language Processing",
      instructor: "Dr. Emily Watson",
      description: "Explore NLP techniques from text preprocessing to transformer models.",
      level: "Intermediate",
      duration: "10 hours",
      students: 642,
      rating: 4.7,
      reviews: 156,
      price: "$79",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1018/1*tjyq7DrWkcK_rgym6YJ1Pw.png",
      tags: ["NLP", "Transformers", "BERT"],
      category: "nlp",
    },
    {
      id: 4,
      title: "Computer Vision Fundamentals",
      instructor: "Dr. James Liu",
      description: "Learn image processing, feature extraction, and modern CV techniques.",
      level: "Beginner",
      duration: "9 hours",
      students: 934,
      rating: 4.5,
      reviews: 267,
      price: "$89",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6SZoVOwgjMwjnDmKMNTQ6he02CN4Jd2ZBA&s",
      tags: ["Computer Vision", "OpenCV", "CNN"],
      category: "cv",
    },
{
  "id": 5,
  "title": "Agentic AI ",
  "instructor": "Dr. Alex Thompson",
  "description": "Master the design and deployment of agentic AI systems that act autonomously, make decisions, and interact with environments intelligently.",
  "level": "Advanced",
  "duration": "15 hours",
  "students": 423,
  "rating": 4.9,
  "reviews": 89,
  "price": "$149",
  "thumbnail": "https://tse2.mm.bing.net/th/id/OIP.5QYt3qpYvaWUBlVPdSKpkwHaEB?pid=Api&P=0&h=180",
  "tags": ["Agentic AI", "Autonomous Agents", "Decision-Making", "AI Planning"],
  "category": "agentic_ai"
},

    {
      id: 6,
      title: "AI Ethics and Responsible AI",
      instructor: "Prof. Maria Santos",
      description: "Understand ethical implications of AI and learn to build responsible AI systems.",
      level: "Beginner",
      duration: "6 hours",
      students: 789,
      rating: 4.4,
      reviews: 145,
      price: "Free",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1_dJW9BkbOycK4Ee1Isgg1uOvgm4ogP7_7sLDus01HjFwKfJdznMWlHFL3uF-oC5zpI&usqp=CAU",
      tags: ["AI Ethics", "Responsible AI", "Bias Detection"],
      category: "ethics",
    },
    {
      id: 7,
      title: "Generative AI and Large Language Models",
      instructor: "Dr. Kevin Park",
      description: "Explore GPT, BERT, and other transformer models for text generation and understanding.",
      level: "Advanced",
      duration: "14 hours",
      students: 567,
      rating: 4.8,
      reviews: 112,
      price: "$129",
      thumbnail: "https://research.aimultiple.com/wp-content/uploads/2023/05/enterprise-genAI-1.png",
      tags: ["Generative AI", "LLMs", "GPT", "Transformers"],
      category: "nlp",
    },
    {
      id: 8,
      title: "MLOps and Model Deployment",
      instructor: "Sarah Johnson",
      description: "Learn to deploy, monitor, and maintain ML models in production environments.",
      level: "Intermediate",
      duration: "11 hours",
      students: 445,
      rating: 4.6,
      reviews: 98,
      price: "$109",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqpcCACToPp6lJy2vbo1yuq5qyI5ZTaebXUxi3D0nRObCZDrimCtG9QhUB09jnjPR-EM&usqp=CAU",
      tags: ["MLOps", "Docker", "Kubernetes", "Model Deployment"],
      category: "mlops",
    },
    {
      id: 9,
      title: "Introduction to Cybersecurity",
      instructor: "Sarah Johnson",
      description: "Learn to deploy, monitor, and maintain ML models in production environments.",
      level: "Intermediate",
      duration: "11 hours",
      students: 445,
      rating: 4.6,
      reviews: 98,
      price: "$109",
      thumbnail: "https://onlinedegrees.sandiego.edu/wp-content/uploads/2020/01/USD-Cyber-Cybersecurity-vs-Information-Security-vs-Network-Security-_2.jpeg",
      tags: ["MLOps", "Docker", "Kubernetes", "Model Deployment"],
      category: "mlops",
    },
  ]

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesLevel = levelFilter === "all" || course.level.toLowerCase() === levelFilter
      const matchesCategory = categoryFilter === "all" || course.category === categoryFilter

      return matchesSearch && matchesLevel && matchesCategory
    })
  }, [searchTerm, levelFilter, categoryFilter])

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI/ML Courses</h1>
        <p className="text-muted-foreground">Master artificial intelligence with our comprehensive course library</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="ml">Machine Learning</SelectItem>
            <SelectItem value="dl">Deep Learning</SelectItem>
            <SelectItem value="nlp">NLP</SelectItem>
            <SelectItem value="cv">Computer Vision</SelectItem>
            <SelectItem value="rl">Reinforcement Learning</SelectItem>
            <SelectItem value="ethics">AI Ethics</SelectItem>
            <SelectItem value="mlops">MLOps</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const progress = getCourseProgress(course.id.toString())
          const isCompleted = progress?.certificateEarned || false
          const progressPercentage = progress?.overallProgress || 0

          return (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-t-lg relative overflow-hidden">
                {course.thumbnail && course.thumbnail !== "/placeholder.svg" ? (
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      target.nextElementSibling?.classList.remove("hidden")
                    }}
                  />
                ) : null}
                <div
                  className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 ${course.thumbnail && course.thumbnail !== "/placeholder.svg" ? "hidden" : ""}`}
                >
                  <div className="text-center">
                    <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold text-primary">{course.title.charAt(0)}</span>
                    </div>
                    <p className="text-sm font-medium text-primary/80">{course.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant={course.price === "Free" ? "secondary" : "default"}>{course.price}</Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="outline">{course.level}</Badge>
                  {isCompleted && (
                    <Badge variant="default" className="bg-green-600">
                      <Award className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                <div className="text-sm text-muted-foreground">by {course.instructor}</div>
              </CardHeader>

              <CardContent className="space-y-4">
                {progressPercentage > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} />
                  </div>
                )}

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                    <span>({course.reviews})</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button asChild className="w-full">
                  <Link href={`/courses/${course.id}`}>
                    {isCompleted ? "View Certificate" : progressPercentage > 0 ? "Continue Learning" : "Start Course"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* No results message */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No courses found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => {
              setSearchTerm("")
              setLevelFilter("all")
              setCategoryFilter("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Load More */}
      {filteredCourses.length > 0 && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Courses
          </Button>
        </div>
      )}
      </div>
    </AuthGuard>
  )
}
