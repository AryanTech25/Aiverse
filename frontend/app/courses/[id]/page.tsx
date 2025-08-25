"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useProgress } from "@/contexts/progress-context"
import { Clock, Users, Star, CheckCircle, BookOpen, Award, Target, Download, Code, Trophy } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const courseData = {
  "1": {
    id: 1,
    title: "Generative AI Fundamentals",
    instructor: "Dr. Sarah Chen",
    description:
      "Master generative AI technologies including GPT, DALL-E, and other cutting-edge models. Learn to build and deploy generative AI applications.",
    level: "Intermediate",
    duration: "12 hours",
    students: 2150,
    rating: 4.8,
    reviews: 456,
    price: "$129",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["Generative AI", "GPT", "DALL-E", "LLMs"],
    instructorBio: "Dr. Sarah Chen is a leading researcher in generative AI with 8+ years at OpenAI and Google.",
    instructorAvatar: "/placeholder.svg?height=100&width=100",
    learningObjectives: [
      "Understand generative AI architectures and principles",
      "Build applications using GPT and other LLMs",
      "Create image generation systems with DALL-E",
      "Deploy generative AI models in production",
    ],
    prerequisites: ["Python programming", "Basic machine learning concepts"],
    certificate: true,
    modules: [
      {
        id: "module-1",
        title: "Introduction to Generative AI",
        description: "Understanding the fundamentals of generative models and their applications",
      },
      {
        id: "module-2",
        title: "Large Language Models",
        description: "Deep dive into GPT, BERT, and transformer architectures",
      },
      {
        id: "practice-labs",
        title: "Practice Labs",
        description: "Hands-on coding exercises with Python compiler for generative AI projects",
      },
    ],
  },
  "2": {
    id: 2,
    title: "Agentic AI Systems",
    instructor: "Prof. Michael Rodriguez",
    description: "Learn to build autonomous AI agents that can reason, plan, and take actions in complex environments.",
    level: "Advanced",
    duration: "15 hours",
    students: 1340,
    rating: 4.9,
    reviews: 287,
    price: "$179",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["Agentic AI", "Autonomous Agents", "Multi-Agent Systems", "Reasoning"],
    instructorBio: "Prof. Rodriguez specializes in autonomous systems and has published 50+ papers on AI agents.",
    instructorAvatar: "/placeholder.svg?height=100&width=100",
    learningObjectives: [
      "Design and implement autonomous AI agents",
      "Understand agent reasoning and planning algorithms",
      "Build multi-agent collaborative systems",
      "Deploy agents in real-world scenarios",
    ],
    prerequisites: ["Advanced Python", "Machine learning experience", "Basic reinforcement learning"],
    certificate: true,
    modules: [
      {
        id: "module-1",
        title: "Agent Architectures",
        description: "Fundamental concepts of AI agents and their design patterns",
      },
      {
        id: "module-2",
        title: "Reasoning and Planning",
        description: "How agents make decisions and plan actions in complex environments",
      },
      {
        id: "practice-labs",
        title: "Practice Labs",
        description: "Build and test autonomous agents with integrated Python development environment",
      },
    ],
  },
  "3": {
    id: 3,
    title: "Machine Learning Mastery",
    instructor: "Dr. Emily Watson",
    description:
      "Comprehensive machine learning course covering supervised, unsupervised, and reinforcement learning with practical implementations.",
    level: "Beginner",
    duration: "18 hours",
    students: 3250,
    rating: 4.7,
    reviews: 892,
    price: "Free",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["Machine Learning", "Scikit-learn", "TensorFlow", "Data Science"],
    instructorBio:
      "Dr. Watson is a data scientist with 12+ years of experience in ML research and industry applications.",
    instructorAvatar: "/placeholder.svg?height=100&width=100",
    learningObjectives: [
      "Master supervised and unsupervised learning algorithms",
      "Implement ML models using Python and popular libraries",
      "Understand feature engineering and model evaluation",
      "Deploy ML models in production environments",
    ],
    prerequisites: ["Basic Python programming", "High school mathematics"],
    certificate: true,
    modules: [
      {
        id: "module-1",
        title: "ML Fundamentals",
        description: "Introduction to machine learning concepts and methodologies",
      },
      {
        id: "module-2",
        title: "Supervised Learning",
        description: "Classification and regression algorithms with practical examples",
      },
      {
        id: "practice-labs",
        title: "Practice Labs",
        description: "Hands-on ML projects with Jupyter-style Python compiler and data analysis tools",
      },
    ],
  },
  "4": {
    id: 4,
    title: "Cybersecurity Essentials",
    instructor: "Dr. James Liu",
    description:
      "Learn essential cybersecurity concepts, threat analysis, and protection strategies for modern digital environments.",
    level: "Intermediate",
    duration: "14 hours",
    students: 1890,
    rating: 4.6,
    reviews: 534,
    price: "$99",
    thumbnail: "/placeholder.svg?height=400&width=600",
    tags: ["Cybersecurity", "Network Security", "Threat Analysis", "Penetration Testing"],
    instructorBio: "Dr. Liu is a cybersecurity expert with 15+ years in both defensive and offensive security.",
    instructorAvatar: "/placeholder.svg?height=100&width=100",
    learningObjectives: [
      "Understand common cybersecurity threats and vulnerabilities",
      "Implement security measures and best practices",
      "Perform basic penetration testing and vulnerability assessment",
      "Develop incident response and recovery strategies",
    ],
    prerequisites: ["Basic networking knowledge", "Command line familiarity"],
    certificate: true,
    modules: [
      {
        id: "module-1",
        title: "Security Fundamentals",
        description: "Core cybersecurity concepts and threat landscape overview",
      },
      {
        id: "module-2",
        title: "Network Security",
        description: "Protecting networks from attacks and implementing security controls",
      },
      {
        id: "practice-labs",
        title: "Practice Labs",
        description: "Hands-on security exercises with Python scripting and penetration testing tools",
      },
    ],
  },
    "7": {
  id: 7,
  title: "Generative AI Fundamentals",
  instructor: "Dr. Sarah Chen",
  description:
    "Master generative AI technologies including GPT, DALL-E, and other cutting-edge models. Learn to build and deploy generative AI applications.",
  level: "Intermediate",
  duration: "12 hours",
  students: 2150,
  rating: 4.8,
  reviews: 456,
  price: "$129",
  thumbnail: "/placeholder.svg?height=400&width=600",
  tags: ["Generative AI", "GPT", "DALL-E", "LLMs"],
  instructorBio: "Dr. Sarah Chen is a leading researcher in generative AI with 8+ years at OpenAI and Google.",
  instructorAvatar: "/placeholder.svg?height=100&width=100",
  learningObjectives: [
    "Understand generative AI architectures and principles",
    "Build applications using GPT and other LLMs",
    "Create image generation systems with DALL-E",
    "Deploy generative AI models in production",
  ],
  prerequisites: ["Python programming", "Basic machine learning concepts"],
  certificate: true,
  modules: [
    {
      id: "module-1",
      title: "Introduction to Generative AI",
      description: "Understanding the fundamentals of generative models and their applications",
      videoContent: {
        title: "What is Generative AI?",
        duration: "20:45",
        videoUrl: "https://example.com/video-genai1",
        transcript: "Welcome to Generative AI Fundamentals. This video introduces AI, ML, and generative AI concepts, including types of ML and applications.",
      },
      documentation: {
        title: "Generative AI Overview",
        content: `
# Introduction to Generative AI

Generative AI is a subset of machine learning that focuses on creating new content: text, images, audio, and more.

## Key Concepts
- **Artificial Intelligence (AI)**: Systems that perform tasks requiring human intelligence.
- **Machine Learning (ML)**: Algorithms improve performance based on data.
- **Generative AI**: Creates new data rather than just analyzing existing data.
- **Types of ML**:
  - Supervised Learning
  - Unsupervised Learning
  - Reinforcement Learning

## Applications
- Text generation (GPT models)
- Image synthesis (DALL-E, Stable Diffusion)
- Music and video generation
- Multimodal AI combining text, image, and audio
        `,
      },
    },
    {
      id: "module-2",
      title: "Large Language Models",
      description: "Deep dive into GPT, BERT, and transformer architectures",
      videoContent: {
        title: "Transformers and LLMs",
        duration: "25:30",
        videoUrl: "https://example.com/video-genai2",
        transcript: "In this module, we explore large language models, transformer architecture, attention mechanisms, and how LLMs generate human-like text.",
      },
      documentation: {
        title: "Large Language Models Guide",
        content: `
# Large Language Models (LLMs)

LLMs like GPT, BERT, and LLaMA are transformer-based architectures capable of generating coherent text.

## Core Components
- **Transformer Architecture**: Self-attention, feed-forward layers
- **Pre-training and Fine-tuning**: Learning general language patterns, then adapting to specific tasks
- **Tokenization and Embeddings**: Converting text to numerical form
- **Applications**: Chatbots, summarization, translation, question-answering
        `,
      },
    },
    {
      id: "practice-labs",
      title: "Practice Labs",
      description: "Hands-on coding exercises with Python compiler for generative AI projects",
      exercises: [
        {
          id: "text-gen-gpt",
          title: "Text Generation with GPT",
          description: "Use GPT to generate creative text based on a given prompt",
          language: "python",
          starterCode: `import openai

# Set up API key and generate text
def generate_text(prompt):
    pass`,
          solution: `import openai

def generate_text(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=150
    )
    return response.choices[0].message.content`,
        },
        {
          id: "image-gen-dalle",
          title: "Image Generation with DALL-E",
          description: "Generate images from textual prompts using DALL-E API",
          language: "python",
          starterCode: `import openai

# Generate image from prompt
def generate_image(prompt):
    pass`,
          solution: `import openai

def generate_image(prompt):
    response = openai.Image.create(
        model="dall-e-2",
        prompt=prompt,
        size="1024x1024"
    )
    return response['data'][0]['url']`,
        },
      ],
    },
  ],
},

  "9": {
  id: 9,
  "title": "Cybersecurity Fundamentals",
  "instructor": "Dr. Michael Torres",
  "description": "Learn essential cybersecurity concepts, tools, and practices to protect systems and data. Gain hands-on experience in threat detection, ethical hacking, and security management.",
  "level": "Intermediate",
  "duration": "14 hours",
  "students": 1875,
  "rating": 4.7,
  "reviews": 398,
  "price": "$139",
  "thumbnail": "/placeholder.svg?height=400&width=600",
  "tags": ["Cybersecurity", "Ethical Hacking", "Network Security", "Threat Analysis"],
  "instructorBio": "Dr. Michael Torres has 10+ years of experience in cybersecurity research and practice, working with top tech firms and government agencies.",
  "instructorAvatar": "/placeholder.svg?height=100&width=100",
  "learningObjectives": [
    "Understand core cybersecurity principles and frameworks",
    "Identify and mitigate security threats and vulnerabilities",
    "Perform ethical hacking and penetration testing",
    "Implement network and application security measures"
  ],
  "prerequisites": ["Basic networking knowledge", "Familiarity with operating systems"],
  "certificate": true,
  "modules": [
    {
      "id": "module-1",
      "title": "Introduction to Cybersecurity",
      "description": "Learn the fundamentals of cybersecurity, key concepts, and its importance in modern IT environments",
      "videoContent": {
        "title": "Cybersecurity Basics",
        "duration": "22:15",
        "videoUrl": "https://example.com/video-cyber1",
        "transcript": "This video covers the history, principles, and importance of cybersecurity, including types of cyber threats and common attack vectors."
      },
      "documentation": {
        "title": "Cybersecurity Overview",
        "content": `
# Introduction to Cybersecurity

Cybersecurity involves protecting systems, networks, and data from cyber threats.

## Key Concepts
- **Confidentiality, Integrity, Availability (CIA triad)**: Core security principles
- **Threats**: Malware, phishing, DDoS, ransomware
- **Vulnerabilities**: Weak passwords, unpatched software, misconfigurations
- **Security Measures**: Firewalls, antivirus, intrusion detection systems (IDS)

## Applications
- Protecting personal and corporate data
- Securing networks and cloud systems
- Ethical hacking for vulnerability assessment
        `
      }
    },
    {
      "id": "module-2",
      "title": "Network and System Security",
      "description": "Dive into network security protocols, firewall configurations, and securing operating systems",
      "videoContent": {
        "title": "Securing Networks and Systems",
        "duration": "28:40",
        "videoUrl": "https://example.com/video-cyber2",
        "transcript": "Explore network security fundamentals, including TCP/IP, firewalls, VPNs, intrusion detection, and OS hardening practices."
      },
      "documentation": {
        "title": "Network Security Guide",
        "content": `
# Network and System Security

Securing networks and systems is essential for preventing unauthorized access and attacks.

## Core Components
- **Firewalls and IDS/IPS**
- **VPNs and secure communication**
- **OS hardening and patch management**
- **Access control and authentication mechanisms**

## Applications
- Securing enterprise networks
- Protecting cloud infrastructure
- Preventing data breaches and system compromises
        `
      }
    },
    {
      "id": "practice-labs",
      "title": "Hands-on Labs",
      "description": "Practical exercises to apply cybersecurity skills using virtual labs and tools",
      "exercises": [
        {
          "id": "ethical-hacking",
          "title": "Ethical Hacking Basics",
          "description": "Perform basic penetration testing on a vulnerable system",
          "language": "python",
          "starterCode": `# Use Python and networking tools to scan and test vulnerabilities
def scan_network(target):
    pass`,
          "solution": `import nmap

def scan_network(target):
    nm = nmap.PortScanner()
    nm.scan(target, '22-1024')
    return nm.all_hosts()`
        },
        {
          "id": "password-cracking",
          "title": "Password Cracking Simulation",
          "description": "Simulate password attacks to understand common vulnerabilities",
          "language": "python",
          "starterCode": `# Try to crack simple passwords using Python
def crack_password(hash):
    pass`,
          "solution": `import hashlib

def crack_password(hash, wordlist):
    for word in wordlist:
        if hashlib.sha256(word.encode()).hexdigest() == hash:
            return word
    return None`
        }
      ]
    }
  ]
},

"5": {
  "id": 5,
  "title": "Agentic AI Mastery",
  "instructor": "Dr. Rajiv Kumar",
  "description": "Master agentic AI techniques to design autonomous agents that perceive, plan, and act intelligently in complex environments. Learn multi-agent coordination, decision-making, and real-world applications of agentic AI.",
  "level": "Advanced",
  "duration": "18 hours",
  "students": 1420,
  "rating": 4.9,
  "reviews": 372,
  "price": "$159",
  "thumbnail": "/placeholder.svg?height=400&width=600",
  "tags": ["Agentic AI", "Autonomous Agents", "Decision-Making", "Planning", "Multi-Agent Systems"],
  "instructorBio": "Dr. Rajiv Kumar is an expert in agentic AI with 9+ years of experience designing autonomous systems for robotics, simulation, and real-world AI applications.",
  "instructorAvatar": "/placeholder.svg?height=100&width=100",
  "learningObjectives": [
    "Understand agentic AI principles and autonomous agent design",
    "Implement decision-making and planning algorithms for agents",
    "Build and train autonomous agents in simulation and real-world environments",
    "Coordinate multi-agent systems to solve complex tasks"
  ],
  "prerequisites": ["Python programming", "Linear algebra", "Probability and statistics", "Basic machine learning"],
  "certificate": true,
  "modules": [
    {
      "id": "module-1",
      "title": "Introduction to Agentic AI",
      "description": "Learn the fundamentals of agentic AI, agent architectures, and agent-environment interaction",
      "videoContent": {
        "title": "Agentic AI Basics and Concepts",
        "duration": "25:10",
        "videoUrl": "https://example.com/video-agentic1",
        "transcript": "This video introduces agentic AI, autonomous agents, environments, decision-making processes, and the AI agent lifecycle."
      },
      "documentation": {
        "title": "Agentic AI Overview",
        "content": `
# Introduction to Agentic AI

Agentic AI focuses on designing autonomous agents that perceive, plan, and act intelligently in environments.

## Core Concepts
- **Agent**: Autonomous decision-maker
- **Environment**: Where agents operate
- **Perception, Action, Reward**
- **Planning and Policy**: Decision-making strategies
- **Multi-Agent Systems**: Coordination among agents

## Applications
- Autonomous robotics
- Game AI agents
- Simulation and virtual environments
- Real-world decision systems
        `
      }
    },
    {
      "id": "module-2",
      "title": "Value-Based and Planning Methods",
      "description": "Deep dive into value-based methods, decision-making algorithms, and planning strategies for autonomous agents",
      "videoContent": {
        "title": "Value-Based Agentic AI",
        "duration": "28:45",
        "videoUrl": "https://example.com/video-agentic2",
        "transcript": "This module covers value-based agent methods, Q-Learning for autonomous agents, planning strategies, and exploration-exploitation trade-offs."
      },
      "documentation": {
        "title": "Value-Based Decision-Making Guide",
        "content": `
# Value-Based and Planning Methods

Value-based approaches help agents evaluate actions and make optimal decisions.

## Key Concepts
- **Q-Learning for Agents**
- **Planning Algorithms**
- **Exploration vs Exploitation**
- **Reward Optimization**

## Applications
- Gridworld navigation
- Autonomous game agents
- Task scheduling and resource allocation
        `
      }
    },
    {
      "id": "module-3",
      "title": "Policy-Based and Multi-Agent Methods",
      "description": "Learn policy gradients, actor-critic methods, and strategies for coordinating multiple autonomous agents",
      "videoContent": {
        "title": "Policy-Based Agentic AI",
        "duration": "32:20",
        "videoUrl": "https://example.com/video-agentic3",
        "transcript": "This module explains policy-based methods, actor-critic frameworks, and multi-agent coordination strategies for complex environments."
      },
      "documentation": {
        "title": "Policy-Based and Multi-Agent Guide",
        "content": `
# Policy-Based and Multi-Agent Methods

Policy-based methods optimize agents' behavior directly and are suited for continuous or complex environments.

## Key Concepts
- **Policy Gradient Methods**
- **Actor-Critic Architecture**
- **Multi-Agent Coordination**
- **Applications**: Robotics teams, swarm intelligence, autonomous fleets
        `
      }
    },
    {
      "id": "module-4",
      "title": "Deep Agentic AI",
      "description": "Implement deep neural networks for autonomous agents and advanced planning strategies",
      "videoContent": {
        "title": "Deep Neural Agents",
        "duration": "35:15",
        "videoUrl": "https://example.com/video-agentic4",
        "transcript": "Learn how to integrate deep learning with agentic AI using neural network policies, experience replay, and environment modeling."
      },
      "documentation": {
        "title": "Deep Agentic AI Guide",
        "content": `
# Deep Agentic AI

Deep learning enables agents to handle high-dimensional inputs and complex environments.

## Key Concepts
- **Deep Policy Networks**
- **Experience Replay**
- **Environment Modeling**
- **Stabilization Techniques**

## Applications
- Game-playing AI
- Robotics control
- Complex simulation tasks
        `
      }
    },
    {
      "id": "practice-labs",
      "title": "Hands-on Labs",
      "description": "Train and evaluate agentic AI systems in simulated and real environments",
      "exercises": [
        {
          "id": "qlearning-agent",
          "title": "Q-Learning Agent in Gridworld",
          "description": "Train an autonomous agent to navigate a Gridworld environment using Q-Learning",
          "language": "python",
          "starterCode": `import numpy as np

# Q-Learning setup for agent
def train_agent(env):
    pass`,
          "solution": `import numpy as np
import gym

def train_agent(env, episodes=500, alpha=0.1, gamma=0.99, epsilon=0.1):
    Q = np.zeros((env.observation_space.n, env.action_space.n))
    for episode in range(episodes):
        state = env.reset()
        done = False
        while not done:
            if np.random.rand() < epsilon:
                action = env.action_space.sample()
            else:
                action = np.argmax(Q[state])
            next_state, reward, done, _ = env.step(action)
            Q[state, action] = Q[state, action] + alpha * (reward + gamma * np.max(Q[next_state]) - Q[state, action])
            state = next_state
    return Q`
        },
        {
          "id": "deep-agent-cartpole",
          "title": "Deep Agent on CartPole",
          "description": "Use a deep neural network to train an autonomous agent in the CartPole environment",
          "language": "python",
          "starterCode": `import torch
import torch.nn as nn
import torch.optim as optim

# Define Deep Agent model
class DeepAgent(nn.Module):
    def __init__(self):
        super(DeepAgent, self).__init__()
        pass

    def forward(self, x):
        pass`,
          "solution": `import torch
import torch.nn as nn
import torch.nn.functional as F

class DeepAgent(nn.Module):
    def __init__(self, input_dim, output_dim):
        super(DeepAgent, self).__init__()
        self.fc1 = nn.Linear(input_dim, 128)
        self.fc2 = nn.Linear(128, 128)
        self.fc3 = nn.Linear(128, output_dim)

    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x`
        }
      ]
    }
  ]
},


"6": {
  id: 6,
  "title": "AI Ethics and Responsible AI",
  "instructor": "Dr. Ananya Singh",
  "description": "Explore ethical challenges in AI development and deployment. Learn to build responsible AI systems that prioritize fairness, transparency, and accountability.",
  "level": "Intermediate",
  "duration": "10 hours",
  "students": 980,
  "rating": 4.7,
  "reviews": 214,
  "price": "$119",
  "thumbnail": "/placeholder.svg?height=400&width=600",
  "tags": ["AI Ethics", "Responsible AI", "Fairness", "Bias Mitigation", "Transparency"],
  "instructorBio": "Dr. Ananya Singh is an AI researcher and ethicist with 8+ years of experience advising AI projects in academia and industry.",
  "instructorAvatar": "/placeholder.svg?height=100&width=100",
  "learningObjectives": [
    "Understand ethical challenges in AI and their societal impact",
    "Identify and mitigate biases in AI models",
    "Design AI systems with transparency, accountability, and fairness"
  ],
  "prerequisites": ["Basic AI and machine learning knowledge", "Python programming (optional for case studies)"],
  "certificate": true,
  "modules": [
    {
      "id": "module-1",
      "title": "Introduction to AI Ethics",
      "description": "Learn the foundational concepts of AI ethics, including fairness, transparency, and accountability",
      "videoContent": {
        "title": "What is AI Ethics?",
        "duration": "20:30",
        "videoUrl": "https://example.com/video-aiethics1",
        "transcript": "This video introduces AI ethics, the importance of responsible AI, ethical frameworks, and real-world examples of ethical challenges in AI systems."
      },
      "documentation": {
        "title": "AI Ethics Overview",
        "content": `
# Introduction to AI Ethics

AI Ethics focuses on the moral and societal implications of AI technologies.

## Core Principles
- **Fairness**: Avoiding discrimination and bias
- **Transparency**: Making AI decisions explainable
- **Accountability**: Ensuring responsibility for AI outcomes
- **Privacy**: Protecting user data and consent

## Applications
- Healthcare AI
- Recruitment algorithms
- Autonomous vehicles
        `
      }
    },
    {
      "id": "module-2",
      "title": "Bias and Fairness in AI",
      "description": "Deep dive into detecting, measuring, and mitigating bias in AI systems",
      "videoContent": {
        "title": "Understanding Bias in AI",
        "duration": "25:15",
        "videoUrl": "https://example.com/video-aiethics2",
        "transcript": "This module covers different types of bias in AI, techniques to measure bias, and strategies for creating fair and inclusive AI models."
      },
      "documentation": {
        "title": "Bias and Fairness Guide",
        "content": `
# Bias and Fairness in AI

Bias in AI can lead to unfair outcomes affecting individuals and communities.

## Types of Bias
- **Data Bias**: Skewed or incomplete datasets
- **Algorithmic Bias**: Bias introduced by model design or optimization
- **Societal Bias**: Pre-existing social inequalities reflected in AI

## Mitigation Strategies
- Diverse and representative datasets
- Fairness-aware algorithms
- Regular auditing and monitoring
        `
      }
    },
    {
      "id": "module-3",
      "title": "Practices labs",
      "description": "Learn best practices for building and deploying AI responsibly, including governance and explainability",
      "videoContent": {
        "title": "Implementing Responsible AI",
        "duration": "24:40",
        "videoUrl": "https://example.com/video-aiethics3",
        "transcript": "This module explains responsible AI design, explainable AI (XAI), ethical guidelines, and governance frameworks to ensure AI benefits society."
      },
      "documentation": {
        "title": "Responsible AI Guide",
        "content": `
# Responsible AI Practices

Responsible AI ensures ethical, transparent, and accountable AI systems.

## Key Practices
- **Explainability**: Making AI decisions understandable
- **Governance**: Policies and oversight for AI deployment
- **Continuous Monitoring**: Detecting unintended consequences
- **Stakeholder Engagement**: Including diverse perspectives in AI design

## Applications
- Ethical AI in finance, healthcare, and government
- Designing AI systems for societal benefit
- Implementing AI risk management
        `
      }
    }
  ]
},

"8": {
  id: 8,
  "title": "MLOps and Model Deployment",
  "instructor": "Dr. Arjun Mehta",
  "description": "Learn how to operationalize machine learning models, automate workflows, and deploy models in production environments using modern MLOps practices.",
  "level": "Intermediate",
  "duration": "12 hours",
  "students": 1150,
  "rating": 4.8,
  "reviews": 287,
  "price": "$139",
  "thumbnail": "/placeholder.svg?height=400&width=600",
  "tags": ["MLOps", "Model Deployment", "CI/CD", "Monitoring", "Automation"],
  "instructorBio": "Dr. Arjun Mehta has 8+ years of experience in ML engineering and MLOps, helping organizations scale AI solutions in production.",
  "instructorAvatar": "/placeholder.svg?height=100&width=100",
  "learningObjectives": [
    "Understand MLOps principles and workflows",
    "Automate model training, testing, and deployment",
    "Monitor and manage ML models in production"
  ],
  "prerequisites": ["Python programming", "Machine learning basics", "Basic cloud knowledge"],
  "certificate": true,
  "modules": [
    {
      "id": "module-1",
      "title": "Introduction to MLOps",
      "description": "Learn the fundamentals of MLOps, its importance, and key concepts for operationalizing ML models",
      "videoContent": {
        "title": "MLOps Fundamentals",
        "duration": "22:15",
        "videoUrl": "https://example.com/video-mlops1",
        "transcript": "This video introduces MLOps, its lifecycle, challenges in deploying ML models, and best practices for model management and reproducibility."
      },
      "documentation": {
        "title": "MLOps Overview",
        "content": `
# Introduction to MLOps

MLOps combines Machine Learning, DevOps, and data engineering to deploy and maintain models in production.

## Core Concepts
- **Model Lifecycle**: Development, deployment, monitoring, and retraining
- **Versioning**: Model, data, and code management
- **CI/CD Pipelines for ML**
- **Collaboration between teams**: Data scientists, ML engineers, and DevOps

## Applications
- Automating ML workflows
- Ensuring reproducibility
- Scaling ML solutions
        `
      }
    },
    {
      "id": "module-2",
      "title": "Model Deployment and Serving",
      "description": "Learn how to deploy ML models using cloud platforms, APIs, and containerized environments",
      "videoContent": {
        "title": "Deploying ML Models",
        "duration": "26:40",
        "videoUrl": "https://example.com/video-mlops2",
        "transcript": "This module covers deploying models using REST APIs, Docker containers, Kubernetes, and cloud services like AWS, GCP, or Azure."
      },
      "documentation": {
        "title": "Model Deployment Guide",
        "content": `
# Model Deployment

Deploying ML models allows them to serve predictions in real-world applications.

## Techniques
- **REST API / Flask / FastAPI**
- **Containerization**: Docker, Kubernetes
- **Cloud Deployment**: AWS SageMaker, GCP AI Platform, Azure ML
- **Batch vs Real-Time Serving**

## Applications
- ML-powered web apps
- Recommendation systems
- Real-time prediction services
        `
      }
    },
    {
      "id": "module-3",
      "title": "Monitoring, Automation, and Scaling",
      "description": "Learn to monitor deployed models, implement automation, and scale ML systems efficiently",
      "videoContent": {
        "title": "MLOps Monitoring and Scaling",
        "duration": "28:10",
        "videoUrl": "https://example.com/video-mlops3",
        "transcript": "This module explains monitoring ML model performance, automating retraining pipelines, alerting for drift, and scaling models for high traffic."
      },
      "documentation": {
        "title": "Monitoring and Scaling Guide",
        "content": `
# Monitoring and Scaling ML Models

Maintaining deployed models is crucial for performance and reliability.

## Key Practices
- **Performance Monitoring**: Accuracy, latency, and throughput
- **Data and Concept Drift Detection**
- **Automated Retraining Pipelines**
- **Scaling**: Load balancing, horizontal and vertical scaling

## Applications
- Reliable ML services in production
- Continuous integration and continuous delivery (CI/CD) for ML
- Enterprise-level ML system management
        `
      }
    }
  ]
}


}

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.id as string
  const course = courseData[courseId as keyof typeof courseData]

  const { getCourseProgress, getModuleProgress, isModuleUnlocked, isQuizUnlocked, startCourse, isCertificateEligible } =
    useProgress()

  const courseProgress = getCourseProgress(courseId)

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleStartCourse = () => {
    startCourse(courseId)
  }

  const isEnrolled = !!courseProgress
  const isCompleted = courseProgress?.certificateEarned
  const overallProgress = courseProgress?.overallProgress || 0
  const certificateEligible = isCertificateEligible(courseId)
  const assessmentPassed = courseProgress?.assessment?.passed || false

  return (
    <div className="container mx-auto px-4 py-8">
      {certificateEligible && !isCompleted && (
        <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Trophy className="h-12 w-12 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
                  🎉 Congratulations! Certificate Ready
                </h3>
                <p className="text-green-600 dark:text-green-400">
                  You've passed the assessment and earned your certificate. Claim it now!
                </p>
              </div>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href={`/courses/${courseId}/certificate`}>
                <Award className="mr-2 h-4 w-4" />
                Claim Certificate
              </Link>
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <Badge variant="outline" className="mb-2">
              {course.level}
            </Badge>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{course.description}</p>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="h-12 w-12">
              <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} alt={course.instructor} />
              <AvatarFallback>
                {course.instructor
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{course.instructor}</p>
              <p className="text-sm text-muted-foreground">{course.instructorBio}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>
                {course.rating} ({course.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{course.modules.length} modules</span>
            </div>
            {course.certificate && (
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>Certificate included</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg mb-4 overflow-hidden">
                {course.thumbnail && course.thumbnail !== "/placeholder.svg" ? (
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-lg"
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
              </div>
              <div className="text-2xl font-bold">{course.price}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEnrolled && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} />
                  {isCompleted && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Course completed!</span>
                    </div>
                  )}
                </div>
              )}

              {isEnrolled ? (
                <Button className="w-full" size="lg" asChild>
                  <Link href={`/courses/${courseId}/modules/module-1`}>
                    {isCompleted ? "Review Course" : "Continue Learning"}
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" size="lg" onClick={handleStartCourse}>
                  Start Course
                </Button>
              )}

              {(certificateEligible || isCompleted) && course.certificate && (
                <div className="space-y-2 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-center mb-3">
                    <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      {isCompleted ? "Certificate Earned!" : "Certificate Available!"}
                    </p>
                  </div>
                  <Button variant="default" className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href={`/courses/${courseId}/certificate`}>
                      <Award className="mr-2 h-4 w-4" />
                      {isCompleted ? "View Certificate" : "Claim Certificate"}
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent border-green-300" asChild>
                    <Link href={`/courses/${courseId}/certificate`}>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Link>
                  </Button>
                </div>
              )}

              {!isEnrolled && (
                <Button variant="outline" className="w-full bg-transparent">
                  Add to Wishlist
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="curriculum" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Modules</CardTitle>
              <CardDescription>
                {course.modules.length} modules • {course.duration} total length
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {course.modules.map((module, index) => {
                  const moduleProgress = getModuleProgress(courseId, module.id)
                  const isUnlocked = isModuleUnlocked(courseId, module.id)
                  const quizUnlocked = isQuizUnlocked(courseId, module.id)

                  return (
                    <div key={module.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {module.id === "practice-labs" ? (
                            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                              <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                          ) : (
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold">{module.title}</h3>
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                            {module.id === "practice-labs" && (
                              <Badge variant="secondary" className="mt-1">
                                <Code className="h-3 w-3 mr-1" />
                                Interactive Coding
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {moduleProgress?.videoWatched && <CheckCircle className="h-4 w-4 text-green-600" />}
                          <Button
                            variant={isUnlocked ? "default" : "outline"}
                            size="sm"
                            disabled={!isUnlocked}
                            asChild={isUnlocked}
                          >
                            {isUnlocked ? (
                              <Link href={`/courses/${courseId}/modules/${module.id}`}>
                                {module.id === "practice-labs" ? "Start Coding" : "Start Module"}
                              </Link>
                            ) : (
                              <span>Locked</span>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Learning Objectives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="instructor" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} alt={course.instructor} />
                  <AvatarFallback>
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{course.instructor}</CardTitle>
                  <CardDescription>Technology Expert</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{course.instructorBio}</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Reviews</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{course.rating}</span>
                </div>
                <span className="text-muted-foreground">({course.reviews} reviews)</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Excellent course! The practice labs with integrated compiler made learning so much more effective.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
