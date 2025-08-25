"use client"

import { useParams, useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProgress } from "@/contexts/progress-context"
import { QuizComponent } from "@/components/quiz/quiz-component"
import { quizData } from "@/data/quiz-data"
import { ArrowLeft, Play, BookOpen, Brain, CheckCircle } from "lucide-react"
import Link from "next/link"

// Mock module content data
const moduleContent = {
  "1": {
    "module-1": {
      title: "Introduction to ML",
      description: "Understanding the basics of machine learning and its applications",
      videoContent: {
        title: "What is Machine Learning?",
        duration: "15:30",
      //videoUrl: "https://example.com/video1",
       videoUrl: "https://www.youtube.com/embed/lsf060bLH_Y",

      
        transcript: "Welcome to our introduction to machine learning course...",
      },
      documentation: {
        title: "Machine Learning Fundamentals",
        content: `
# Machine Learning Fundamentals

Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.

## Key Concepts

### 1. Types of Machine Learning
- **Supervised Learning**: Learning with labeled examples
- **Unsupervised Learning**: Finding patterns in unlabeled data
- **Reinforcement Learning**: Learning through interaction and feedback

### 2. Common Applications
- Image recognition
- Natural language processing
- Recommendation systems
- Predictive analytics

### 3. The ML Workflow
1. Data collection and preparation
2. Model selection and training
3. Evaluation and validation
4. Deployment and monitoring

## Getting Started

To begin your ML journey, you'll need to understand:
- Basic statistics and probability
- Programming (Python is recommended)
- Linear algebra fundamentals
- Data manipulation techniques

## Next Steps

In the following modules, we'll dive deeper into supervised learning algorithms and hands-on implementation.
        `,
      },
    },
    "module-2": {
      title: "Supervised Learning",
      description: "Learn about classification and regression algorithms",
      videoContent: {
        title: "Supervised Learning Explained",
        duration: "22:45",
        videoUrl: "https://example.com/video2",
        transcript: "In this module, we'll explore supervised learning algorithms...",
      },
      documentation: {
        title: "Supervised Learning Guide",
        content: `
# Supervised Learning

Supervised learning is a type of machine learning where algorithms learn from labeled training data to make predictions on new, unseen data.

## Classification vs Regression

### Classification
- Predicts discrete categories or classes
- Examples: Email spam detection, image classification
- Common algorithms: Logistic Regression, Decision Trees, Random Forest

### Regression
- Predicts continuous numerical values
- Examples: House price prediction, stock market forecasting
- Common algorithms: Linear Regression, Polynomial Regression, Support Vector Regression

## Key Algorithms

### 1. Linear Regression
Simple yet powerful algorithm for regression tasks.

### 2. Logistic Regression
Despite its name, used for classification problems.

### 3. Decision Trees
Easy to interpret and visualize decision-making process.

### 4. Random Forest
Ensemble method that combines multiple decision trees.

## Model Evaluation

- **Classification**: Accuracy, Precision, Recall, F1-Score
- **Regression**: Mean Squared Error, R-squared, Mean Absolute Error

## Practical Tips

1. Always split your data into training and testing sets
2. Use cross-validation for robust evaluation
3. Consider feature scaling for distance-based algorithms
4. Handle missing data appropriately
        `,
      },
    },
  },

  "3": {
    "module-1": {
      title: "Retrieval-Augmented Generation (RAG)",
      description: "RAG augments a generative model with external documents or knowledge so outputs can be factually grounded and up-to-date.",
      videoContent: { 
        title: "Introduction to RAG",
        duration: "20:00",
        videoUrl: "https://example.com/video-rag",
        transcript: "In this video, we explain Retrieval-Augmented Generation and its key components.",
      },
      documentation: {
        title: "RAG Detailed Guide",
        content: `
# Retrieval-Augmented Generation (RAG)

## Summary
RAG augments a generative model with external documents or knowledge so outputs can be factually grounded and up-to-date.

## Key Components
- Ingestion: parse and clean source documents (PDF, HTML, DOCX).
- Chunking: split content into semantic pieces (tune size & overlap).
- Embeddings: encode chunks into vectors using an embedding model.
- Indexing: store vectors in a vector DB (ANN index) and keep raw text in blob storage.
- Retrieval: form query embeddings, run nearest-neighbor search (top-k).
- Re-ranking: optionally re-rank results with a cross-encoder for precision.
- Prompt composition: pack retrieved chunks with system instructions and query.
- Grounding rules: force the model to cite chunks or return INSUFFICIENT_INFO if unsupported.

## Best Practices
- Tune chunk size (commonly 200–800 tokens) and use overlap to preserve context.
- Add metadata (source, timestamp, author) to support filters and citations.
- Use hybrid search (keyword + vector) for recall-sensitive tasks.
- Cache common queries and embeddings to reduce cost and latency.
- Evaluate grounding with a labeled test set and measure hallucination rates.

## Limitations
- Retrieval mistakes propagate—irrelevant chunks can mislead the model.
- Latency and storage costs for large corpora.
- Prompt length constraints require careful context packing and deduplication.
        `,
      },
    },




    "module-2": {
      title: "Fine-Tuning and Instruction Tuning",
      description: "Methods to adapt base models to domain-specific behavior or to follow instructions more reliably.",
      videoContent: {
        title: "Fine-Tuning Techniques",
        duration: "25:00",
        videoUrl: "https://example.com/video-finetuning",
        transcript: "This video covers full fine-tuning, parameter-efficient fine-tuning, and instruction-tuning.",
      },
      documentation: {
        title: "Fine-Tuning & Instruction Tuning Guide",
        content: `
# Fine-Tuning and Instruction Tuning

## Approaches
- Full fine-tuning: update model weights on a curated dataset.
- Parameter-efficient fine-tuning (PEFT): adapters, LoRA, or prefix tuning to reduce compute and storage.
- Instruction-tuning: supervised training on (instruction, response) pairs to make models better at following prompts.

## Tradeoffs
- Full fine-tuning yields strong adaptation but is expensive and can overfit.
- PEFT is cost-effective and preserves base model updates independently.
- Quality and cleanliness of labeled data are critical; noisy labels degrade behavior.

## Governance
- Keep training data provenance and consent records.
- Validate that fine-tuned behavior does not amplify bias or violate policies.
        `,
      },
    },

    "module-3": {
      title: "RLHF & Alignment",
      description: "Align model behavior with human preferences using reward models and human feedback.",
      videoContent: {
        title: "Introduction to RLHF",
        duration: "18:30",
        videoUrl: "https://example.com/video-rlhf",
        transcript: "Learn how Reinforcement Learning from Human Feedback aligns models with human preferences.",
      },
      documentation: {
        title: "RLHF and Alignment Guide",
        content: `
# Reinforcement Learning from Human Feedback (RLHF)

## Pipeline
- Collect pairwise preference data or fine-grained ratings from human annotators.
- Train a reward model that predicts human preference scores.
- Optimize the base model via RL (e.g., PPO) to maximize the reward model signal.
- Iterate: collect more data, refine the reward model, and re-optimize.

## Challenges
- Reward hacking: models can game the reward signal in unintended ways.
- Annotation cost: gathering high-quality human preferences is expensive and slow.
- Distributional bias: the reward model may reflect annotator biases.

## Alternatives & Variants
- Direct Preference Optimization (DPO): a simpler optimization method that avoids RL complexity.
- Constitutional AI: use model-written critiques or a set of principles to guide outputs.
        `,
      },
    },

    "module-4": {
      title: "Multimodal Models",
      description: "Models that process and generate multiple data types (text, image, audio, video, 3D).",
      videoContent: {
        title: "Introduction to Multimodal Models",
        duration: "22:00",
        videoUrl: "https://example.com/video-multimodal",
        transcript: "This video explains multimodal models and their capabilities.",
      },
      documentation: {
        title: "Multimodal Models Guide",
        content: `
# Multimodal Models

## Architectural Patterns
- Early fusion: combine modalities at input and jointly encode.
- Late fusion: encode modalities separately and combine representations later.
- Cross-attention and multimodal transformers: enable interactions between modality-specific tokens.

## Capabilities
- Image-captioning, caption-to-image, text-conditioned video generation, speech-to-text and vice versa.
- Multimodal reasoning: answer questions about images combined with text context.

## Challenges
- Alignment across modalities (semantics must match).
- Data scarcity for paired multimodal examples (especially video+text).
- Compute and memory costs for large multimodal transformers.
        `,
      },
    },

    // You can add more modules like agents, efficiency, evaluation, etc. similarly
  },
      "7": {
  "module-1": {
    title: "Foundations of Generative AI",
    description: "Learn the fundamentals of Generative AI, its evolution, key breakthroughs, and ethical considerations.",
    videoContent: {
      title: "Introduction to Generative AI",
      duration: "20:45",
      videoUrl: "https://example.com/video-genai1",
      transcript: `Welcome to the Foundations of Generative AI. In this module, we cover Artificial Intelligence, Machine Learning, and Generative AI, including types of ML, evolution from rule-based systems to modern transformers and diffusion models, key breakthroughs like GANs, Transformers, and Diffusion Models, core mathematical foundations, and ethical considerations for responsible AI.`,
    },
    documentation: {
      title: "Foundations of Generative AI Guide",
      content: `
# Foundations of Generative AI

Generative AI is a subset of Machine Learning that focuses on creating new data, including text, images, music, and more. It builds on AI and ML principles.

## 1. Introduction to AI & Machine Learning
- **Artificial Intelligence (AI)**: Systems that perform tasks requiring human intelligence.
- **Machine Learning (ML)**: Algorithms that improve performance from data over time.
- **Types of ML**:
  - **Supervised Learning**: Learning from labeled data.
  - **Unsupervised Learning**: Discover patterns from unlabeled data.
  - **Reinforcement Learning**: Learn through trial-and-error with rewards/penalties.
- **Generative AI**: Creates new data rather than just analyzing it.

## 2. Evolution of Generative AI – From Rules to Deep Learning
- **Rule-Based Systems (Pre-2000s)**: Handcrafted rules, limited creativity.
- **Statistical Models (2000s)**: N-grams, Markov chains; lacked long-term coherence.
- **Deep Learning Era (2010s onwards)**: Autoencoders, GANs, VAEs for content generation.
- **Modern Generative AI (2020s)**: Transformers (GPT, BERT, T5), Diffusion Models (DALL·E, Stable Diffusion), Multimodal AI.

## 3. Key Breakthroughs
- **GANs (2014)**: Generator vs Discriminator for realistic image synthesis.
- **Transformers (2017)**: Attention mechanisms, foundation of GPT, BERT, LLaMA.
- **Diffusion Models (2020+)**: Generate data by denoising noise for state-of-the-art media.

## 4. Core Mathematical Foundations
- **Linear Algebra**: Vectors, matrices, dot products, matrix multiplication.
- **Probability & Statistics**: Modeling uncertainty, distributions, Bayes' theorem.
- **Optimization**: Loss minimization, gradient descent, Adam, RMSprop.

## 5. Ethical Foundations and Responsible AI
- **Bias & Fairness**: Avoid amplifying biases in training data.
- **Misinformation & Deepfakes**: AI-generated content may spread false info.
- **Privacy & Data Use**: Consent, differential privacy, federated learning.
- **Responsible AI Principles**: Transparency, accountability, human-in-the-loop, safety.

## Conclusion
This module introduces the foundations of Generative AI, setting the stage for advanced techniques, multimodal systems, and hands-on projects in upcoming modules.
      `,
    },
  },
},


  "5": {
    "module-1": {
      "title": "Retrieval-Augmented Generation (RAG)",
      "description": "RAG augments a generative model with external documents or knowledge so outputs can be factually grounded and up-to-date.",
      "videoContent": {
        "title": "Introduction to RAG",
        "duration": "20:00",
        "videoUrl": "https://example.com/video-rag",
        "transcript": "In this video, we explain Retrieval-Augmented Generation and its key components."
      },
      "documentation": {
        "title": "RAG Detailed Guide",
        "content": "# Retrieval-Augmented Generation (RAG)\n\n## Summary\nRAG augments a generative model with external documents or knowledge so outputs can be factually grounded and up-to-date.\n\n## Key Components\n- Ingestion: parse and clean source documents (PDF, HTML, DOCX).\n- Chunking: split content into semantic pieces (tune size & overlap).\n- Embeddings: encode chunks into vectors using an embedding model.\n- Indexing: store vectors in a vector DB (ANN index) and keep raw text in blob storage.\n- Retrieval: form query embeddings, run nearest-neighbor search (top-k).\n- Re-ranking: optionally re-rank results with a cross-encoder for precision.\n- Prompt composition: pack retrieved chunks with system instructions and query.\n- Grounding rules: force the model to cite chunks or return INSUFFICIENT_INFO if unsupported.\n\n## Best Practices\n- Tune chunk size (commonly 200–800 tokens) and use overlap to preserve context.\n- Add metadata (source, timestamp, author) to support filters and citations.\n- Use hybrid search (keyword + vector) for recall-sensitive tasks.\n- Cache common queries and embeddings to reduce cost and latency.\n- Evaluate grounding with a labeled test set and measure hallucination rates.\n\n## Limitations\n- Retrieval mistakes propagate—irrelevant chunks can mislead the model.\n- Latency and storage costs for large corpora.\n- Prompt length constraints require careful context packing and deduplication."
      }
    },
    "module-2": {
      "title": "Foundations of Generative AI",
      "description": "Learn the fundamentals of Generative AI, its evolution, key breakthroughs, and ethical considerations.",
      "videoContent": {
        "title": "Introduction to Generative AI",
        "duration": "20:45",
        "videoUrl": "https://example.com/video-genai1",
        "transcript": "Welcome to the Foundations of Generative AI. We cover AI, ML, and Generative AI, including types of ML, evolution from rule-based systems to modern transformers and diffusion models, key breakthroughs like GANs, Transformers, and Diffusion Models, core mathematical foundations, and ethical considerations."
      },
      "documentation": {
        "title": "Foundations of Generative AI Guide",
        "content": "# Foundations of Generative AI\n\nGenerative AI is a subset of Machine Learning that focuses on creating new data, including text, images, music, and more.\n\n## Introduction to AI & Machine Learning\n- AI: Systems performing tasks requiring human intelligence\n- ML: Algorithms improving from data\n- Types: Supervised, Unsupervised, Reinforcement Learning\n- Generative AI: Creates new data\n\n## Evolution\n- Rule-based, Statistical Models, Deep Learning (GANs, VAEs), Modern Generative AI (Transformers, Diffusion Models)\n\n## Key Breakthroughs\n- GANs, Transformers, Diffusion Models\n\n## Mathematical Foundations\n- Linear Algebra, Probability & Statistics, Optimization\n\n## Ethics\n- Bias & Fairness, Misinformation, Privacy, Responsible AI Principles"
      }
    },
    "module-3": {
      "title": "Agentic AI Mastery",
      "description": "Master agentic AI techniques to design autonomous agents that perceive, plan, and act intelligently in complex environments.",
      "videoContent": {
        "title": "Agentic AI Basics",
        "duration": "25:10",
        "videoUrl": "https://example.com/video-agentic1",
        "transcript": "This video introduces agentic AI, autonomous agents, environments, decision-making processes, and the AI agent lifecycle."
      },
      "documentation": {
        "title": "Agentic AI Guide",
        "content": "# Agentic AI\n\nDesign autonomous agents that perceive, plan, and act intelligently.\n\n## Core Concepts\n- Agent, Environment, Perception, Action, Reward\n- Planning, Policy, Multi-Agent Systems\n\n## Applications\n- Autonomous robotics, Game AI agents, Simulation, Real-world decision systems"
      }
    }
  } ,

  
  "9": {
    "module-1": {
      "title": "Introduction to Cybersecurity",
      "description": "Understanding the fundamentals of cybersecurity, key concepts, threats, and roles.",
      "videoContent": {
        "title": "What is Cybersecurity?",
        "duration": "20:00",
        "videoUrl": "https://example.com/video-cyber1",
        "transcript": "Cybersecurity is the practice of protecting systems, networks, devices, applications, and data from digital attacks, unauthorized access, or damage. In today’s digital world, banking, healthcare, education, government services, and even household devices are connected, increasing exposure to cyber risk."
      },
      "documentation": {
        "title": "Cybersecurity Fundamentals",
        "content": `
# Introduction to Cybersecurity

Cybersecurity involves protecting digital systems and data across individuals, businesses, and governments.

## 1. Key Concepts: CIA Triad
- **Confidentiality**: Ensure information is only accessible to authorized people (controls: Encryption, Access control, Authentication, VPNs)
- **Integrity**: Ensure data is accurate, consistent, and trustworthy (controls: Checksums, Digital signatures, Version control)
- **Availability**: Ensure systems are accessible when needed (controls: Redundancy, Backups, Load balancing, DoS protection)

## 2. Cyber Threat Landscape
- **Attackers**: Hacktivists, Cybercriminals, Nation-State Actors, Insiders, Script Kiddies
- **Tools**: Malware, Phishing kits, Exploit frameworks (Metasploit), Botnets, Keyloggers
- **Motivations**: Financial gain, Espionage, Activism, Revenge, Challenge/Notoriety

## 3. Types of Cyber Attacks
- **Malware**: Viruses, worms, trojans, ransomware, spyware
- **Phishing**: Deceptive emails/websites to steal credentials
- **DoS/DDoS**: Overloading a service to make it unavailable
- **MITM**: Intercepting or altering communications
- **SQL Injection**: Injecting malicious SQL into queries
- **Zero-Day Exploits**: Exploiting unknown vulnerabilities
- **Password Attacks**: Brute force, dictionary, credential stuffing

## 4. Roles in Cybersecurity
- **Red Team**: Simulate attacks to find vulnerabilities (activities: Penetration testing, Social engineering)
- **Blue Team**: Defend systems, detect/respond to attacks (activities: Monitoring, Incident response, Threat hunting)
- **Purple Team**: Bridge Red & Blue teams to improve defenses
- **GRC**: Governance, risk assessment, compliance (standards: GDPR, ISO 27001, HIPAA, NIST CSF)

## 5. Cybersecurity Domains
- **Application Security**: Secure development and code review
- **Network Security**: Protect data in transit and network infrastructure
- **Cloud Security**: Secure public/private clouds (AWS, Azure, GCP)
- **Incident Response & Forensics**: Prepare, respond, and investigate incidents
- **Threat Intelligence**: Analyze attacker behavior and TTPs

## Summary
- Cybersecurity protects digital systems and data.
- The CIA Triad underpins all security decisions.
- Adversaries, tools, and motivations create a dynamic threat landscape.
- Common attacks: malware, phishing, DoS/DDoS, MITM, SQL injection, zero-days, password attacks.
- Specialized roles and domains collaborate to build resilient security programs.
        `
      }
    }
  }
}








export default function ModulePage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const courseId = params.id as string
  const moduleId = params.moduleId as string
  const contentType = searchParams.get("content") || "video"

  const [activeTab, setActiveTab] = useState(contentType)


  const { getModuleProgress, markVideoWatched, markDocumentationRead, completeQuiz, isQuizUnlocked } = useProgress()

  const moduleData =
    moduleContent[courseId as keyof typeof moduleContent]?.[
      moduleId as keyof (typeof moduleContent)[keyof typeof moduleContent]
    ]

  const quiz = quizData[courseId]?.[moduleId]

  const moduleProgress = getModuleProgress(courseId, moduleId)
  const quizUnlocked = isQuizUnlocked(courseId, moduleId)

  // Add local state for retake
  const [isRetakingQuiz, setIsRetakingQuiz] = useState(false)

  useEffect(() => {
    setActiveTab(contentType)
  }, [contentType])

  if (!moduleData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
          <Button asChild>
            <Link href={`/courses/${courseId}`}>Back to Course</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleVideoComplete = () => {
    markVideoWatched(courseId, moduleId)
  }

  const handleDocumentationComplete = () => {
    markDocumentationRead(courseId, moduleId)
  }

  const handleQuizComplete = (score: number, passed: boolean) => {
    completeQuiz(courseId, moduleId, score)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6">
        <Link href={`/courses/${courseId}`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Course
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{moduleData.title}</CardTitle>
                  <CardDescription>{moduleData.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  {moduleProgress?.videoWatched && (
                    <Badge variant="default" className="bg-green-600">
                      <Play className="mr-1 h-3 w-3" />
                      Video Complete
                    </Badge>
                  )}
                  {moduleProgress?.documentationRead && (
                    <Badge variant="default" className="bg-blue-600">
                      <BookOpen className="mr-1 h-3 w-3" />
                      Docs Complete
                    </Badge>
                  )}
                  {moduleProgress?.quizCompleted && (
                    <Badge variant="default" className="bg-purple-600">
                      <Brain className="mr-1 h-3 w-3" />
                      Quiz Complete ({moduleProgress.quizScore}%)
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="video" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Video
                    {moduleProgress?.videoWatched && <CheckCircle className="h-3 w-3 text-green-600" />}
                  </TabsTrigger>
                  <TabsTrigger value="documentation" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Documentation
                    {moduleProgress?.documentationRead && <CheckCircle className="h-3 w-3 text-green-600" />}
                  </TabsTrigger>
                  <TabsTrigger value="quiz" disabled={!quizUnlocked} className="flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Quiz
                    {moduleProgress?.quizCompleted && <CheckCircle className="h-3 w-3 text-green-600" />}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="video" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{moduleData.videoContent.title}</CardTitle>
                      <CardDescription>Duration: {moduleData.videoContent.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Video Player Placeholder */}
                      {moduleData.videoContent.videoUrl ? (
                        <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden">
                          <iframe
                            className="w-full h-full"
                            src={moduleData.videoContent.videoUrl}
                            title="Video Player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                          <Play className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                          <p className="text-slate-600 dark:text-slate-400">Video Player</p>
                        </div>
                      )}

                      {!moduleProgress?.videoWatched && (
                        <Button onClick={handleVideoComplete} className="w-full">
                          Mark Video as Watched
                        </Button>
                      )}

                      {/* Transcript */}
                      <div className="mt-6">
                        <h3 className="font-semibold mb-2">Transcript</h3>
                        <p className="text-sm text-muted-foreground">{moduleData.videoContent.transcript}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documentation" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{moduleData.documentation.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <pre className="whitespace-pre-wrap text-sm">{moduleData.documentation.content}</pre>
                      </div>

                      {!moduleProgress?.documentationRead && (
                        <Button onClick={handleDocumentationComplete} className="w-full mt-6">
                          Mark Documentation as Read
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quiz" className="mt-6">
                  {quizUnlocked && quiz ? (
                    <QuizComponent
                      quiz={quiz}
                      onComplete={(score, passed) => {
                        handleQuizComplete(score, passed)
                        setIsRetakingQuiz(false)
                      }}
                      onRetry={() => setIsRetakingQuiz(true)}
                      isCompleted={isRetakingQuiz ? false : moduleProgress?.quizCompleted}
                      previousScore={isRetakingQuiz ? undefined : moduleProgress?.quizScore}
                    />
                  ) : (
                    <Card>
                      <CardHeader>
                        <CardTitle>Module Quiz</CardTitle>
                        <CardDescription>Complete the video and documentation first to unlock the quiz</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8">
                          <div className="text-muted-foreground">
                            Complete the video and documentation to unlock the quiz
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Module Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Video</span>
                {moduleProgress?.videoWatched ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 rounded-full border-2 border-muted" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Documentation</span>
                {moduleProgress?.documentationRead ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="h-4 w-4 rounded-full border-2 border-muted" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Quiz</span>
                {moduleProgress?.quizCompleted ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-muted-foreground">{moduleProgress.quizScore}%</span>
                  </div>
                ) : (
                  <div className="h-4 w-4 rounded-full border-2 border-muted" />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant={activeTab === "video" ? "default" : "outline"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setActiveTab("video")}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Video
              </Button>
              <Button
                variant={activeTab === "documentation" ? "default" : "outline"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setActiveTab("documentation")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Read Documentation
              </Button>
              <Button
                variant={activeTab === "quiz" ? "default" : "outline"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setActiveTab("quiz")}
                disabled={!quizUnlocked}
              >
                <Brain className="mr-2 h-4 w-4" />
                Take Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
