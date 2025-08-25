import type { QuizData } from "@/components/quiz/quiz-component"

export const quizData: Record<string, Record<string, QuizData>> = {
  "1": {
    "module-1": {
      id: "ml-intro-quiz",
      title: "Introduction to Machine Learning Quiz",
      description: "Test your understanding of basic machine learning concepts",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is Machine Learning?",
          options: [
            "A type of computer hardware",
            "A subset of AI that enables computers to learn from data",
            "A programming language",
            "A database management system",
          ],
          correctAnswer: 1,
          explanation:
            "Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.",
        },
        {
          id: "q2",
          question: "Which of the following is NOT a type of machine learning?",
          options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Quantum Learning"],
          correctAnswer: 3,
          explanation:
            "The three main types of machine learning are Supervised Learning, Unsupervised Learning, and Reinforcement Learning. Quantum Learning is not a recognized type of machine learning.",
        },
        {
          id: "q3",
          question: "In supervised learning, what do we use to train the model?",
          options: ["Unlabeled data", "Labeled data", "Random data", "No data"],
          correctAnswer: 1,
          explanation:
            "Supervised learning uses labeled data, where both input features and correct output labels are provided to train the model.",
        },
        {
          id: "q4",
          question: "Which of these is an example of a supervised learning task?",
          options: ["Clustering customers", "Email spam detection", "Data compression", "Anomaly detection"],
          correctAnswer: 1,
          explanation:
            "Email spam detection is a classification task where the model learns from labeled examples of spam and non-spam emails to predict the category of new emails.",
        },
        {
          id: "q5",
          question: "What is the main goal of unsupervised learning?",
          options: [
            "To predict future values",
            "To classify data into categories",
            "To find hidden patterns in data",
            "To optimize a reward function",
          ],
          correctAnswer: 2,
          explanation:
            "Unsupervised learning aims to find hidden patterns, structures, or relationships in data without using labeled examples.",
        },
      ],
    },
    "module-2": {
      id: "supervised-learning-quiz",
      title: "Supervised Learning Quiz",
      description: "Test your knowledge of supervised learning algorithms and concepts",
      passingScore: 75,
      questions: [
        {
          id: "q1",
          question: "What is the main difference between classification and regression?",
          options: [
            "Classification predicts continuous values, regression predicts discrete values",
            "Classification predicts discrete categories, regression predicts continuous values",
            "There is no difference",
            "Classification is faster than regression",
          ],
          correctAnswer: 1,
          explanation:
            "Classification predicts discrete categories or classes (like spam/not spam), while regression predicts continuous numerical values (like house prices).",
        },
        {
          id: "q2",
          question: "Which algorithm is commonly used for linear regression?",
          options: ["Decision Tree", "K-Means", "Least Squares", "K-Nearest Neighbors"],
          correctAnswer: 2,
          explanation:
            "Least Squares is the most common method for fitting a linear regression model by minimizing the sum of squared residuals.",
        },
        {
          id: "q3",
          question: "What does overfitting mean in machine learning?",
          options: [
            "The model performs well on training data but poorly on new data",
            "The model performs poorly on training data",
            "The model is too simple",
            "The model trains too quickly",
          ],
          correctAnswer: 0,
          explanation:
            "Overfitting occurs when a model learns the training data too well, including noise and specific details, making it perform poorly on new, unseen data.",
        },
        {
          id: "q4",
          question: "Which metric is commonly used to evaluate classification models?",
          options: ["Mean Squared Error", "R-squared", "Accuracy", "Mean Absolute Error"],
          correctAnswer: 2,
          explanation:
            "Accuracy is a common metric for classification that measures the percentage of correct predictions out of total predictions.",
        },
        {
          id: "q5",
          question: "What is cross-validation used for?",
          options: [
            "To increase training speed",
            "To reduce model complexity",
            "To get a more reliable estimate of model performance",
            "To clean the data",
          ],
          correctAnswer: 2,
          explanation:
            "Cross-validation is used to get a more reliable and unbiased estimate of how well a model will perform on unseen data by testing it on multiple data splits.",
        },
      ],
    },
  },
  "3": {
    "module-1": {
      id: "rag-quiz",
      title: "Retrieval-Augmented Generation Quiz",
      description: "Test your understanding of RAG concepts and best practices",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What is the main purpose of Retrieval-Augmented Generation?",
          options: [
            "To compress large datasets",
            "To ground model outputs in external knowledge",
            "To increase GPU utilization",
            "To generate random text",
          ],
          correctAnswer: 1,
          explanation:
            "RAG augments a generative model with external documents or knowledge so outputs can be factually grounded and up-to-date.",
        },
        {
          id: "q2",
          question: "Which of the following is a key component of RAG?",
          options: ["Chunking content", "Reducing learning rate", "Model pruning", "Tokenization only"],
          correctAnswer: 0,
          explanation:
            "Chunking content is part of RAG where documents are split into semantic pieces to improve retrieval and context.",
        },
        {
          id: "q3",
          question: "Why is re-ranking used in RAG pipelines?",
          options: [
            "To reduce model size",
            "To improve precision by reordering retrieved chunks",
            "To train the embedding model",
            "To visualize attention",
          ],
          correctAnswer: 1,
          explanation:
            "Re-ranking is optionally used to improve precision by reordering the retrieved chunks before sending them to the model.",
        },
        {
          id: "q4",
          question: "What is a common limitation of RAG?",
          options: [
            "It can only process images",
            "Retrieval mistakes can mislead the model",
            "It doesn't require embeddings",
            "It works without any external data",
          ],
          correctAnswer: 1,
          explanation:
            "If retrieval returns irrelevant chunks, the model may produce incorrect or misleading outputs.",
        },
        {
          id: "q5",
          question: "Which best practice helps reduce latency and cost in RAG?",
          options: [
            "Cache common queries and embeddings",
            "Use extremely large chunks",
            "Avoid metadata",
            "Skip evaluation",
          ],
          correctAnswer: 0,
          explanation:
            "Caching common queries and embeddings reduces repeated computation and helps lower latency and cost.",
        },
      ],
    },

    "module-2": {
      id: "finetuning-quiz",
      title: "Fine-Tuning & Instruction Tuning Quiz",
      description: "Test your knowledge of fine-tuning and instruction tuning methods",
      passingScore: 75,
      questions: [
        {
          id: "q1",
          question: "What is the goal of instruction-tuning?",
          options: [
            "To optimize GPU usage",
            "To make models better at following instructions",
            "To reduce model size",
            "To generate random embeddings",
          ],
          correctAnswer: 1,
          explanation:
            "Instruction-tuning trains a model on (instruction, response) pairs to improve how well it follows user instructions.",
        },
        {
          id: "q2",
          question: "Which is a parameter-efficient fine-tuning technique?",
          options: ["LoRA", "Full weight update", "Random forest", "K-Means clustering"],
          correctAnswer: 0,
          explanation:
            "LoRA is a parameter-efficient fine-tuning method that adapts a small number of parameters instead of the full model.",
        },
        {
          id: "q3",
          question: "What is a tradeoff of full fine-tuning?",
          options: [
            "It cannot overfit",
            "It is computationally expensive and can overfit",
            "It preserves the base model fully",
            "It does not require data",
          ],
          correctAnswer: 1,
          explanation:
            "Full fine-tuning can strongly adapt the model but is expensive and risks overfitting on the training data.",
        },
        {
          id: "q4",
          question: "Why is data provenance important in fine-tuning?",
          options: [
            "To track hardware usage",
            "To ensure consent and compliance",
            "To speed up training",
            "To generate embeddings",
          ],
          correctAnswer: 1,
          explanation:
            "Data provenance ensures that training data has proper consent and follows policies, helping with governance and compliance.",
        },
        {
          id: "q5",
          question: "Which statement is true about PEFT?",
          options: [
            "It updates all model weights",
            "It reduces compute and preserves base model updates",
            "It eliminates the need for labeled data",
            "It only works for images",
          ],
          correctAnswer: 1,
          explanation:
            "PEFT adapts a small portion of parameters, reducing compute costs and preserving the original model weights.",
        },
      ],
    },

    "module-3": {
      id: "rlhf-quiz",
      title: "RLHF & Alignment Quiz",
      description: "Test your understanding of RLHF and model alignment techniques",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "What does RLHF stand for?",
          options: [
            "Reinforced Learning from Heuristic Feedback",
            "Reinforcement Learning from Human Feedback",
            "Random Learning High Fidelity",
            "Recursive Learning for Hyperparameters",
          ],
          correctAnswer: 1,
          explanation:
            "RLHF stands for Reinforcement Learning from Human Feedback, a technique to align models with human preferences.",
        },
        {
          id: "q2",
          question: "What is the purpose of a reward model in RLHF?",
          options: [
            "To generate embeddings",
            "To predict human preference scores",
            "To compress the dataset",
            "To train a decision tree",
          ],
          correctAnswer: 1,
          explanation:
            "The reward model predicts human preferences and guides the base model during RL optimization.",
        },
        {
          id: "q3",
          question: "Which is a potential challenge of RLHF?",
          options: [
            "Overfitting embeddings",
            "Reward hacking",
            "Low GPU memory",
            "Tokenization errors",
          ],
          correctAnswer: 1,
          explanation:
            "Models can game the reward signal in unintended ways, known as reward hacking.",
        },
        {
          id: "q4",
          question: "Which alternative simplifies RLHF optimization?",
          options: [
            "Direct Preference Optimization (DPO)",
            "Cross-Validation",
            "LoRA",
            "K-Means",
          ],
          correctAnswer: 0,
          explanation:
            "DPO is a simpler optimization method that avoids the complexity of full RL training.",
        },
        {
          id: "q5",
          question: "What is Constitutional AI?",
          options: [
            "Training without labels",
            "Using model-written principles to guide outputs",
            "A type of embedding model",
            "A data preprocessing technique",
          ],
          correctAnswer: 1,
          explanation:
            "Constitutional AI uses model-written critiques or rules to guide the outputs, reducing reliance on human feedback.",
        },
      ],
    },
  },
 
  
  "5": {
    "module-1": {
      "id": "genai-foundations-quiz",
      "title": "Foundations of Generative AI Quiz",
      "description": "Test your understanding of the basics of Generative AI, its evolution, and ethical considerations",
      "passingScore": 70,
      "questions": [
        {
          "id": "q1",
          "question": "What is Generative AI?",
          "options": [
            "AI that only analyzes existing data",
            "A subset of ML that generates new data such as text, images, or music",
            "A type of database",
            "A hardware accelerator for AI"
          ],
          "correctAnswer": 1,
          "explanation": "Generative AI creates new data like text, images, and music, unlike traditional AI which mainly analyzes existing data."
        },
        {
          "id": "q2",
          "question": "Which of the following is a key breakthrough in Generative AI?",
          "options": ["Decision Trees", "GANs", "K-Means Clustering", "Linear Regression"],
          "correctAnswer": 1,
          "explanation": "GANs (Generative Adversarial Networks) are a key breakthrough that allow realistic content generation by pitting a generator against a discriminator."
        },
        {
          "id": "q3",
          "question": "Which model type is commonly used in modern Generative AI for text generation?",
          "options": ["Convolutional Neural Networks", "Transformers", "Support Vector Machines", "Random Forests"],
          "correctAnswer": 1,
          "explanation": "Transformers, like GPT models, are the backbone of modern Generative AI for text and multimodal generation."
        },
        {
          "id": "q4",
          "question": "What is a primary ethical concern in Generative AI?",
          "options": [
            "Energy consumption",
            "Data privacy and bias",
            "Using supervised learning",
            "Overfitting models"
          ],
          "correctAnswer": 1,
          "explanation": "Generative AI may create biased content or violate privacy by generating data resembling sensitive datasets, making ethics crucial."
        },
        {
          "id": "q5",
          "question": "Which type of learning is primarily used in Generative AI models?",
          "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "All of the above"],
          "correctAnswer": 3,
          "explanation": "Generative AI can involve supervised learning, unsupervised learning, and reinforcement learning depending on the model and application."
        }
      ]
    }
  },


  
  "7": {
    "module-1": {
      "id": "foundations-of-genai-quiz",
      "title": "Foundations of Generative AI Quiz",
      "description": "Test your knowledge of the fundamentals of Generative AI based on the provided video and documentation.",
      "passingScore": 80,
      "questions": [
        {
          "id": "q1",
          "question": "Which of the following describes the evolution of Generative AI from early methods to modern techniques?",
          "options": [
            "It moved from complex deep learning models to simple statistical models.",
            "It progressed from rule-based systems, through statistical models, to deep learning models like Transformers.",
            "It started with Diffusion Models and then evolved into GANs and Transformers.",
            "The evolution was a single, linear progression from AI directly to Generative AI without intermediate stages."
          ],
          "correctAnswer": 1,
          "explanation": "The progression from handcrafted rules to statistical models and then to the more advanced deep learning architectures is the correct historical path."
        },
        {
          "id": "q2",
          "question": "According to the provided documentation, what is a key ethical consideration related to the use of Generative AI?",
          "options": [
            "Its potential to reduce a computer's processing speed.",
            "The requirement for extensive hand-crafted rules.",
            "The risk of generating and spreading misinformation or deepfakes.",
            "The difficulty in training models on unlabeled data."
          ],
          "correctAnswer": 2,
          "explanation": "The document highlights the risk of misinformation and deepfakes as a major ethical concern with AI-generated content."
        },
        {
          "id": "q3",
          "question": "Which mathematical concept is essential for the optimization process in deep learning?",
          "options": [
            "Integral calculus for calculating the area under a curve.",
            "Trigonometry for angle calculations.",
            "Linear algebra for matrix multiplication.",
            "Gradient descent for loss minimization."
          ],
          "correctAnswer": 3,
          "explanation": "Gradient descent is a key optimization algorithm used to minimize the loss function and improve model performance."
        },
        {
          "id": "q4",
          "question": "Which of the following best describes the role of a Discriminator in a Generative Adversarial Network (GAN)?",
          "options": [
            "It generates new, synthetic data based on the training set.",
            "It learns to differentiate between real data and data created by the Generator.",
            "It is an unsupervised learning model used for clustering data.",
            "It acts as the primary source of the training data for the entire network."
          ],
          "correctAnswer": 1,
          "explanation": "The Discriminator's role is to act as a classifier, distinguishing real data from the synthetic data produced by the Generator."
        },
        {
          "id": "q5",
          "question": "In the context of Machine Learning, what is the main difference between Supervised Learning and Unsupervised Learning?",
          "options": [
            "Supervised learning uses unlabeled data, while unsupervised learning uses labeled data.",
            "Supervised learning predicts future values, while unsupervised learning classifies data into categories.",
            "Supervised learning learns from labeled data, while unsupervised learning finds patterns in unlabeled data.",
            "There is no significant difference; they are interchangeable terms."
          ],
          "correctAnswer": 2,
          "explanation": "The key distinction is the presence of labeled data in supervised learning versus the absence of it in unsupervised learning, which is used for discovering hidden patterns."
        },
      ]
    }
  },

  
  "9": {
    "module-1": {
      "id": "cyber-intro-quiz",
      "title": "Introduction to Cybersecurity Quiz",
      "description": "Test your understanding of core cybersecurity concepts and principles",
      "passingScore": 70,
      "questions": [
        {
          "id": "q1",
          "question": "What does the CIA triad stand for in cybersecurity?",
          "options": ["Confidentiality, Integrity, Availability", "Control, Internet, Access", "Cybersecurity, Intelligence, Automation", "Confidential, Internal, Authorized"],
          "correctAnswer": 0,
          "explanation": "CIA triad refers to Confidentiality, Integrity, and Availability, which are the foundational principles of cybersecurity."
        },
        {
          "id": "q2",
          "question": "Which of the following is an example of a cyber threat?",
          "options": ["Firewall", "Phishing", "Encryption", "VPN"],
          "correctAnswer": 1,
          "explanation": "Phishing is a cyber threat that attempts to steal sensitive information by masquerading as a trusted entity."
        },
        {
          "id": "q3",
          "question": "Which tool can help detect unauthorized access in a network?",
          "options": ["IDS", "Text Editor", "Database", "Email Client"],
          "correctAnswer": 0,
          "explanation": "An Intrusion Detection System (IDS) monitors network or system activities for malicious activity or policy violations."
        },
        {
          "id": "q4",
          "question": "What is OS hardening?",
          "options": ["Installing games on the OS", "Strengthening an operating system to reduce vulnerabilities", "Running updates automatically", "Backing up files"],
          "correctAnswer": 1,
          "explanation": "OS hardening involves configuring an operating system to reduce its attack surface and vulnerabilities."
        },
        {
          "id": "q5",
          "question": "What is the main purpose of ethical hacking?",
          "options": ["Steal sensitive information", "Test security to find vulnerabilities", "Develop malware", "Access unauthorized systems for fun"],
          "correctAnswer": 1,
          "explanation": "Ethical hacking is performed to identify and fix security vulnerabilities in a system before malicious hackers exploit them."
        }
      ]
    }
  }
}


  

