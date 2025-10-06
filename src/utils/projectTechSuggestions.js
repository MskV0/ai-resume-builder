// Technology suggestions based on project types
export const projectTechSuggestions = {
  // Video Streaming Projects
  'youtube': ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'FFmpeg', 'Redis', 'Socket.io'],
  'netflix': ['React', 'Node.js', 'MongoDB', 'AWS', 'CDN', 'Redis', 'Stripe', 'JWT'],
  'video streaming': ['React', 'Node.js', 'WebRTC', 'Socket.io', 'FFmpeg', 'AWS S3', 'HLS'],
  'live streaming': ['Node.js', 'WebRTC', 'Socket.io', 'Redis', 'RTMP', 'OBS'],
  
  // Social Media Projects
  'instagram': ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Socket.io', 'Redis', 'Express'],
  'twitter': ['React', 'Node.js', 'MongoDB', 'Redis', 'Elasticsearch', 'WebSocket'],
  'facebook': ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'GraphQL'],
  'whatsapp': ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'End-to-End Encryption'],
  'tiktok': ['React', 'Node.js', 'FFmpeg', 'AWS S3', 'MongoDB', 'Redis'],
  'social media': ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'JWT'],
  'chat': ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Redis'],
  
  // E-commerce Projects
  'e-commerce': ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express', 'JWT'],
  'shopping': ['React', 'Node.js', 'MongoDB', 'Stripe', 'Razorpay', 'Redis'],
  'amazon': ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Elasticsearch'],
  'flipkart': ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Redis', 'Express'],
  
  // Food & Delivery
  'food delivery': ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Socket.io', 'Stripe'],
  'zomato': ['React', 'Node.js', 'MongoDB', 'Google Maps', 'Razorpay', 'Redis'],
  'swiggy': ['React', 'Node.js', 'MongoDB', 'Google Maps', 'Payment Gateway', 'Socket.io'],
  'restaurant': ['React', 'Node.js', 'MongoDB', 'Stripe', 'QR Code', 'Socket.io'],
  
  // Booking & Travel
  'airbnb': ['React', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps', 'Cloudinary'],
  'uber': ['React Native', 'Node.js', 'MongoDB', 'Google Maps', 'Socket.io', 'Stripe'],
  'hotel': ['React', 'Node.js', 'MongoDB', 'Stripe', 'Calendar API', 'Email Service'],
  'booking': ['React', 'Node.js', 'MongoDB', 'Payment Gateway', 'Calendar', 'Email'],
  
  // Music & Entertainment
  'spotify': ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Audio Processing', 'Redis'],
  'music': ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Audio API', 'FFmpeg'],
  
  // Communication
  'zoom': ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Screen Recording'],
  'slack': ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'WebSocket'],
  'discord': ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Voice Chat'],
  
  // Content & Publishing
  'medium': ['React', 'Node.js', 'MongoDB', 'Rich Text Editor', 'SEO', 'Redis'],
  'blog': ['React', 'Node.js', 'MongoDB', 'Markdown', 'SEO', 'CMS'],
  'cms': ['React', 'Node.js', 'MongoDB', 'Rich Text Editor', 'File Upload'],
  
  // Collaboration Tools
  'trello': ['React', 'Node.js', 'MongoDB', 'Drag and Drop', 'Socket.io', 'Redux'],
  'notion': ['React', 'Node.js', 'MongoDB', 'Rich Text Editor', 'Real-time Sync'],
  'github': ['React', 'Node.js', 'MongoDB', 'Git', 'Webhook', 'GraphQL'],
  
  // Finance
  'fintech': ['React', 'Node.js', 'MongoDB', 'Stripe', 'Plaid API', 'Encryption'],
  'payment': ['React', 'Node.js', 'MongoDB', 'Stripe', 'Razorpay', 'JWT', 'Encryption'],
  'expense': ['React', 'Node.js', 'MongoDB', 'Chart.js', 'PDF Generator'],
  'wallet': ['React', 'Node.js', 'MongoDB', 'Payment Gateway', 'Encryption', 'QR Code'],
  
  // Security & Privacy
  'steganography': ['Python', 'Pillow', 'NumPy', 'OpenCV', 'Cryptography', 'PIL'],
  'encryption': ['Python', 'PyCrypto', 'Cryptography', 'AES', 'RSA', 'Hashing'],
  'password manager': ['React', 'Node.js', 'MongoDB', 'AES Encryption', 'bcrypt'],
  'security': ['Python', 'Cryptography', 'SSL/TLS', 'JWT', 'OAuth', 'Firewall'],
  'cybersecurity': ['Python', 'Nmap', 'Wireshark', 'Metasploit', 'Kali Linux'],
  
  // AI & ML Projects
  'machine learning': ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Scikit-learn'],
  'deep learning': ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'CUDA', 'NumPy'],
  'ai': ['Python', 'TensorFlow', 'OpenAI API', 'NLP', 'Computer Vision'],
  'chatbot': ['Python', 'NLTK', 'TensorFlow', 'Dialogflow', 'Node.js', 'NLP'],
  'recommendation': ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering', 'TensorFlow'],
  'prediction': ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'NumPy', 'Matplotlib'],
  'nlp': ['Python', 'NLTK', 'SpaCy', 'TensorFlow', 'Transformers', 'BERT'],
  'computer vision': ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'YOLO', 'CNN'],
  'face recognition': ['Python', 'OpenCV', 'Dlib', 'Face Recognition Library', 'TensorFlow'],
  'sentiment analysis': ['Python', 'NLTK', 'TextBlob', 'VADER', 'Scikit-learn'],
  
  // Data Science Projects
  'data analysis': ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
  'data visualization': ['Python', 'Plotly', 'Tableau', 'D3.js', 'Matplotlib', 'PowerBI'],
  'dashboard': ['React', 'Node.js', 'MongoDB', 'Chart.js', 'D3.js', 'Recharts'],
  'analytics': ['Python', 'Pandas', 'SQL', 'Tableau', 'PowerBI', 'Excel'],
  
  // Blockchain
  'blockchain': ['Solidity', 'Web3.js', 'Ethereum', 'Truffle', 'Ganache', 'React'],
  'cryptocurrency': ['Solidity', 'Web3.js', 'Ethereum', 'Node.js', 'MongoDB'],
  'nft': ['Solidity', 'Web3.js', 'IPFS', 'React', 'Ethereum', 'MetaMask'],
  
  // IoT Projects
  'iot': ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'Python', 'Sensors'],
  'smart home': ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js', 'React', 'Firebase'],
  'automation': ['Python', 'Arduino', 'Raspberry Pi', 'MQTT', 'Node-RED'],
  
  // Mobile Development
  'android': ['Android Studio', 'Kotlin', 'Java', 'Firebase', 'Retrofit', 'Room'],
  'ios': ['Swift', 'SwiftUI', 'Xcode', 'Firebase', 'CoreData', 'Alamofire'],
  'mobile app': ['React Native', 'Firebase', 'Redux', 'Expo', 'AsyncStorage'],
  'flutter': ['Flutter', 'Dart', 'Firebase', 'Provider', 'Dio', 'Hive'],
  
  // Game Development
  'game': ['Unity', 'C#', 'Unreal Engine', 'Blender', 'Physics Engine'],
  'unity': ['Unity', 'C#', 'Unity Physics', 'Unity UI', 'Multiplayer Networking'],
  '2d game': ['Pygame', 'Python', 'JavaScript', 'Phaser.js', 'Unity'],
  '3d game': ['Unity', 'Unreal Engine', 'C++', 'Blender', 'C#'],
  
  // Web Development
  'mern': ['MongoDB', 'Express', 'React', 'Node.js'],
  'mean': ['MongoDB', 'Express', 'Angular', 'Node.js'],
  'mevn': ['MongoDB', 'Express', 'Vue.js', 'Node.js'],
  'full stack': ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT'],
  'frontend': ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Redux'],
  'backend': ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API', 'PostgreSQL'],
  'rest api': ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Postman'],
  'graphql': ['GraphQL', 'Apollo', 'Node.js', 'React', 'MongoDB'],
  
  // Management Systems
  'hospital': ['React', 'Node.js', 'MongoDB', 'JWT', 'Email Service', 'PDF Generator'],
  'library': ['React', 'Node.js', 'MongoDB', 'Barcode Scanner', 'Email Notifications'],
  'inventory': ['React', 'Node.js', 'MongoDB', 'Barcode', 'Excel Export', 'PDF'],
  'crm': ['React', 'Node.js', 'MongoDB', 'Email Integration', 'Analytics', 'Calendar'],
  'hrms': ['React', 'Node.js', 'MongoDB', 'Email', 'PDF Generator', 'Calendar'],
  
  // Weather & Maps
  'weather': ['React', 'OpenWeather API', 'Chart.js', 'Geolocation', 'Maps API'],
  'maps': ['React', 'Google Maps API', 'Leaflet', 'Mapbox', 'Geolocation'],
  
  // Portfolio & Resume
  'portfolio': ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  'resume': ['React', 'Node.js', 'PDF Generator', 'Tailwind CSS', 'Firebase'],
  
  // Testing & DevOps
  'testing': ['Jest', 'Selenium', 'Cypress', 'Mocha', 'Chai', 'Postman'],
  'ci/cd': ['Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI'],
  'devops': ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Ansible']
};

// Get technology suggestions based on project name
export const getTechSuggestionsForProject = (projectName) => {
  if (!projectName) return [];
  
  const lowerName = projectName.toLowerCase();
  const suggestions = new Set();
  
  // Check for matches
  for (const [key, techs] of Object.entries(projectTechSuggestions)) {
    if (lowerName.includes(key) || key.includes(lowerName)) {
      techs.forEach(tech => suggestions.add(tech));
    }
  }
  
  // If no match, provide default MERN stack
  if (suggestions.size === 0 && projectName.trim().length > 0) {
    return ['React', 'Node.js', 'MongoDB', 'Express'];
  }
  
  return Array.from(suggestions);
};

// Get primary tech stack suggestion
export const getPrimaryTechStack = (projectName) => {
  if (!projectName) return '';
  
  const lowerName = projectName.toLowerCase();
  
  // Security/Cryptography projects
  if (lowerName.includes('steganography') || lowerName.includes('encryption') || 
      lowerName.includes('security') || lowerName.includes('crypto')) {
    return 'Python, Cryptography, Pillow, NumPy';
  }
  
  // AI/ML projects
  if (lowerName.includes('ml') || lowerName.includes('ai') || lowerName.includes('prediction') || 
      lowerName.includes('recommendation') || lowerName.includes('neural') || lowerName.includes('deep learning')) {
    return 'Python, TensorFlow, Keras, Pandas, NumPy, Scikit-learn';
  }
  
  // Data Science projects
  if (lowerName.includes('data') || lowerName.includes('analytics') || lowerName.includes('visualization')) {
    return 'Python, Pandas, NumPy, Matplotlib, Seaborn';
  }
  
  // Blockchain projects
  if (lowerName.includes('blockchain') || lowerName.includes('crypto') || lowerName.includes('nft')) {
    return 'Solidity, Web3.js, Ethereum, React, Node.js';
  }
  
  // Mobile projects
  if (lowerName.includes('android')) {
    return 'Android Studio, Kotlin, Java, Firebase, Retrofit';
  }
  if (lowerName.includes('ios')) {
    return 'Swift, SwiftUI, Xcode, Firebase, CoreData';
  }
  if (lowerName.includes('flutter')) {
    return 'Flutter, Dart, Firebase, Provider';
  }
  if (lowerName.includes('react native') || lowerName.includes('mobile')) {
    return 'React Native, Firebase, Redux, Expo';
  }
  
  // Game development
  if (lowerName.includes('game') || lowerName.includes('unity')) {
    return 'Unity, C#, Blender, Physics Engine';
  }
  
  // IoT projects
  if (lowerName.includes('iot') || lowerName.includes('arduino') || lowerName.includes('raspberry')) {
    return 'Arduino, Raspberry Pi, Python, MQTT, Sensors';
  }
  
  // Default to MERN for web projects
  return 'React, Node.js, MongoDB, Express';
};