// Technology keywords mapped to standard skill names
const technologyKeywords = {
  // Frontend Technologies
  'react': 'React',
  'reactjs': 'React',
  'react.js': 'React',
  'angular': 'Angular',
  'angularjs': 'Angular',
  'vue': 'Vue.js',
  'vuejs': 'Vue.js',
  'vue.js': 'Vue.js',
  'javascript': 'JavaScript',
  'js': 'JavaScript',
  'typescript': 'TypeScript',
  'ts': 'TypeScript',
  'html': 'HTML5',
  'html5': 'HTML5',
  'css': 'CSS3',
  'css3': 'CSS3',
  'sass': 'SASS',
  'scss': 'SCSS',
  'less': 'LESS',
  'bootstrap': 'Bootstrap',
  'tailwind': 'Tailwind CSS',
  'material': 'Material UI',
  'mui': 'Material UI',
  'next': 'Next.js',
  'nextjs': 'Next.js',
  'next.js': 'Next.js',
  'gatsby': 'Gatsby',
  'svelte': 'Svelte',
  'jquery': 'jQuery',
  'redux': 'Redux',
  'webpack': 'Webpack',
  'vite': 'Vite',
  
  // Backend Technologies
  'node': 'Node.js',
  'nodejs': 'Node.js',
  'node.js': 'Node.js',
  'express': 'Express.js',
  'expressjs': 'Express.js',
  'nestjs': 'NestJS',
  'python': 'Python',
  'django': 'Django',
  'flask': 'Flask',
  'fastapi': 'FastAPI',
  'java': 'Java',
  'spring': 'Spring Boot',
  'springboot': 'Spring Boot',
  'php': 'PHP',
  'laravel': 'Laravel',
  'symfony': 'Symfony',
  'ruby': 'Ruby',
  'rails': 'Ruby on Rails',
  'go': 'Go',
  'golang': 'Go',
  'rust': 'Rust',
  'c#': 'C#',
  'csharp': 'C#',
  '.net': '.NET',
  'dotnet': '.NET',
  'asp.net': 'ASP.NET',
  
  // Databases
  'mysql': 'MySQL',
  'postgresql': 'PostgreSQL',
  'postgres': 'PostgreSQL',
  'mongodb': 'MongoDB',
  'mongo': 'MongoDB',
  'redis': 'Redis',
  'cassandra': 'Cassandra',
  'oracle': 'Oracle Database',
  'sql': 'SQL',
  'nosql': 'NoSQL',
  'sqlite': 'SQLite',
  'mariadb': 'MariaDB',
  'dynamodb': 'DynamoDB',
  'firebase': 'Firebase',
  'firestore': 'Firestore',
  'elasticsearch': 'Elasticsearch',
  'neo4j': 'Neo4j',
  
  // Cloud & DevOps
  'aws': 'AWS',
  'amazon': 'AWS',
  'azure': 'Microsoft Azure',
  'gcp': 'Google Cloud Platform',
  'google cloud': 'Google Cloud Platform',
  'docker': 'Docker',
  'kubernetes': 'Kubernetes',
  'k8s': 'Kubernetes',
  'jenkins': 'Jenkins',
  'gitlab': 'GitLab CI/CD',
  'github actions': 'GitHub Actions',
  'circleci': 'CircleCI',
  'terraform': 'Terraform',
  'ansible': 'Ansible',
  'chef': 'Chef',
  'puppet': 'Puppet',
  'vagrant': 'Vagrant',
  'nginx': 'Nginx',
  'apache': 'Apache',
  'heroku': 'Heroku',
  'digitalocean': 'DigitalOcean',
  'lambda': 'AWS Lambda',
  'ec2': 'AWS EC2',
  's3': 'AWS S3',
  'cloudformation': 'CloudFormation',
  
  // Mobile Development
  'android': 'Android Development',
  'ios': 'iOS Development',
  'swift': 'Swift',
  'kotlin': 'Kotlin',
  'react native': 'React Native',
  'flutter': 'Flutter',
  'dart': 'Dart',
  'xamarin': 'Xamarin',
  'ionic': 'Ionic',
  
  // Data Science & AI/ML
  'machine learning': 'Machine Learning',
  'ml': 'Machine Learning',
  'deep learning': 'Deep Learning',
  'ai': 'Artificial Intelligence',
  'artificial intelligence': 'Artificial Intelligence',
  'tensorflow': 'TensorFlow',
  'pytorch': 'PyTorch',
  'keras': 'Keras',
  'scikit': 'Scikit-learn',
  'sklearn': 'Scikit-learn',
  'pandas': 'Pandas',
  'numpy': 'NumPy',
  'matplotlib': 'Matplotlib',
  'seaborn': 'Seaborn',
  'opencv': 'OpenCV',
  'nlp': 'Natural Language Processing',
  'computer vision': 'Computer Vision',
  'data science': 'Data Science',
  'data analysis': 'Data Analysis',
  'tableau': 'Tableau',
  'powerbi': 'Power BI',
  'power bi': 'Power BI',
  'jupyter': 'Jupyter Notebook',
  
  // Testing
  'jest': 'Jest',
  'mocha': 'Mocha',
  'chai': 'Chai',
  'cypress': 'Cypress',
  'selenium': 'Selenium',
  'pytest': 'PyTest',
  'junit': 'JUnit',
  'testng': 'TestNG',
  'karma': 'Karma',
  'jasmine': 'Jasmine',
  
  // Version Control & Collaboration
  'git': 'Git',
  'github': 'GitHub',
  'gitlab': 'GitLab',
  'bitbucket': 'Bitbucket',
  'svn': 'SVN',
  'jira': 'JIRA',
  'confluence': 'Confluence',
  'slack': 'Slack',
  'trello': 'Trello',
  
  // APIs & Integration
  'rest': 'REST API',
  'restful': 'RESTful API',
  'graphql': 'GraphQL',
  'soap': 'SOAP',
  'grpc': 'gRPC',
  'websocket': 'WebSocket',
  'socket.io': 'Socket.io',
  'api': 'API Development',
  
  // Security
  'jwt': 'JWT',
  'oauth': 'OAuth',
  'ssl': 'SSL/TLS',
  'encryption': 'Encryption',
  'security': 'Application Security',
  'penetration': 'Penetration Testing',
  'firewall': 'Firewall Configuration',
  
  // Big Data
  'hadoop': 'Hadoop',
  'spark': 'Apache Spark',
  'kafka': 'Apache Kafka',
  'airflow': 'Apache Airflow',
  'hive': 'Apache Hive',
  'pig': 'Apache Pig',
  
  // Blockchain
  'blockchain': 'Blockchain',
  'ethereum': 'Ethereum',
  'solidity': 'Solidity',
  'web3': 'Web3',
  'smart contract': 'Smart Contracts',
  
  // Other Technologies
  'agile': 'Agile Methodologies',
  'scrum': 'Scrum',
  'kanban': 'Kanban',
  'ci/cd': 'CI/CD',
  'microservices': 'Microservices Architecture',
  'serverless': 'Serverless Architecture',
  'soa': 'Service-Oriented Architecture',
  'mvc': 'MVC Pattern',
  'design patterns': 'Design Patterns',
  'oop': 'Object-Oriented Programming',
  'functional programming': 'Functional Programming',
  'tdd': 'Test-Driven Development',
  'bdd': 'Behavior-Driven Development'
};

// Role-based skill mappings
const roleSkillMappings = {
  'software engineer': ['JavaScript', 'Git', 'REST API', 'Agile Methodologies', 'Problem Solving'],
  'senior software engineer': ['System Design', 'Architecture', 'Code Review', 'Mentoring', 'Technical Leadership'],
  'full stack developer': ['JavaScript', 'Node.js', 'React', 'Database Design', 'REST API'],
  'frontend developer': ['JavaScript', 'React', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
  'backend developer': ['Node.js', 'Database Design', 'REST API', 'Microservices', 'System Design'],
  'cloud engineer': ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux'],
  'devops engineer': ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'AWS', 'Terraform', 'Monitoring'],
  'data scientist': ['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Statistics', 'Pandas'],
  'data engineer': ['Python', 'SQL', 'ETL', 'Big Data', 'Apache Spark', 'Data Warehousing'],
  'data analyst': ['SQL', 'Excel', 'Tableau', 'Data Visualization', 'Statistical Analysis'],
  'machine learning engineer': ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
  'mobile developer': ['Mobile Development', 'REST API', 'Git', 'Agile'],
  'android developer': ['Android Development', 'Kotlin', 'Java', 'Material Design', 'REST API'],
  'ios developer': ['iOS Development', 'Swift', 'Xcode', 'REST API', 'SwiftUI'],
  'ui/ux designer': ['Figma', 'Sketch', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing'],
  'product manager': ['Product Strategy', 'Roadmap Planning', 'Agile', 'Data Analysis', 'Stakeholder Management'],
  'project manager': ['Project Management', 'Agile', 'Scrum', 'Risk Management', 'Stakeholder Communication'],
  'qa engineer': ['Testing', 'Selenium', 'Test Automation', 'Bug Tracking', 'Quality Assurance'],
  'security engineer': ['Security', 'Penetration Testing', 'Encryption', 'Firewall', 'Compliance'],
  'business analyst': ['Requirements Analysis', 'Process Mapping', 'SQL', 'Data Analysis', 'Documentation']
};

// Extract skills from text
export const extractSkillsFromText = (text) => {
  if (!text) return new Set();
  
  const lowerText = text.toLowerCase();
  const foundSkills = new Set();
  
  // Check for each technology keyword
  Object.entries(technologyKeywords).forEach(([keyword, skillName]) => {
    // Use word boundaries to avoid partial matches
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    if (regex.test(lowerText)) {
      foundSkills.add(skillName);
    }
  });
  
  return foundSkills;
};

// Get skills based on role
export const getSkillsForRole = (role) => {
  if (!role) return new Set();
  
  const lowerRole = role.toLowerCase();
  const skills = new Set();
  
  // Direct match
  if (roleSkillMappings[lowerRole]) {
    roleSkillMappings[lowerRole].forEach(skill => skills.add(skill));
    return skills;
  }
  
  // Fuzzy match
  for (const [roleKey, roleSkills] of Object.entries(roleSkillMappings)) {
    if (lowerRole.includes(roleKey) || roleKey.includes(lowerRole)) {
      roleSkills.forEach(skill => skills.add(skill));
      break;
    }
  }
  
  return skills;
};

// Extract skills from degree
export const extractSkillsFromDegree = (degree) => {
  if (!degree) return new Set();
  
  const skills = new Set();
  const lowerDegree = degree.toLowerCase();
  
  if (lowerDegree.includes('computer science') || lowerDegree.includes('computer engineering')) {
    skills.add('Data Structures');
    skills.add('Algorithms');
    skills.add('Object-Oriented Programming');
    skills.add('Database Management');
    skills.add('Software Engineering');
  }
  
  if (lowerDegree.includes('data science') || lowerDegree.includes('analytics')) {
    skills.add('Data Analysis');
    skills.add('Statistics');
    skills.add('Machine Learning');
    skills.add('Python');
    skills.add('SQL');
  }
  
  if (lowerDegree.includes('information technology') || lowerDegree.includes('it')) {
    skills.add('Networking');
    skills.add('System Administration');
    skills.add('Database Management');
    skills.add('IT Support');
  }
  
  if (lowerDegree.includes('artificial intelligence') || lowerDegree.includes('ai')) {
    skills.add('Artificial Intelligence');
    skills.add('Machine Learning');
    skills.add('Deep Learning');
    skills.add('Neural Networks');
    skills.add('Python');
  }
  
  if (lowerDegree.includes('software engineering')) {
    skills.add('Software Development');
    skills.add('System Design');
    skills.add('Agile Methodologies');
    skills.add('Design Patterns');
  }
  
  if (lowerDegree.includes('cybersecurity') || lowerDegree.includes('security')) {
    skills.add('Cybersecurity');
    skills.add('Network Security');
    skills.add('Encryption');
    skills.add('Ethical Hacking');
  }
  
  if (lowerDegree.includes('cloud computing')) {
    skills.add('Cloud Architecture');
    skills.add('AWS');
    skills.add('Virtualization');
    skills.add('DevOps');
  }
  
  if (lowerDegree.includes('business') || lowerDegree.includes('mba')) {
    skills.add('Business Analysis');
    skills.add('Strategic Planning');
    skills.add('Project Management');
    skills.add('Leadership');
  }
  
  return skills;
};

// Generate comprehensive technical skills from all sources
export const generateTechnicalSkills = (formData) => {
  const allSkills = new Set();
  
  // Extract from work experience
  if (formData.experience) {
    formData.experience.forEach(exp => {
      // From role
      const roleSkills = getSkillsForRole(exp.role);
      roleSkills.forEach(skill => allSkills.add(skill));
      
      // From company name (some companies imply certain tech stacks)
      if (exp.company) {
        const companySkills = extractSkillsFromText(exp.company);
        companySkills.forEach(skill => allSkills.add(skill));
      }
      
      // From description
      if (exp.description) {
        const descSkills = extractSkillsFromText(exp.description);
        descSkills.forEach(skill => allSkills.add(skill));
      }
    });
  }
  
  // Extract from current/target role
  if (formData.currentRole) {
    const currentRoleSkills = getSkillsForRole(formData.currentRole);
    currentRoleSkills.forEach(skill => allSkills.add(skill));
    
    const roleTextSkills = extractSkillsFromText(formData.currentRole);
    roleTextSkills.forEach(skill => allSkills.add(skill));
  }
  
  if (formData.targetRole) {
    const targetRoleSkills = getSkillsForRole(formData.targetRole);
    targetRoleSkills.forEach(skill => allSkills.add(skill));
    
    const roleTextSkills = extractSkillsFromText(formData.targetRole);
    roleTextSkills.forEach(skill => allSkills.add(skill));
  }
  
  // Extract from education
  if (formData.education) {
    formData.education.forEach(edu => {
      if (edu.degree) {
        const degreeSkills = extractSkillsFromDegree(edu.degree);
        degreeSkills.forEach(skill => allSkills.add(skill));
        
        const textSkills = extractSkillsFromText(edu.degree);
        textSkills.forEach(skill => allSkills.add(skill));
      }
    });
  }
  
  // Extract from projects
  if (formData.projects) {
    formData.projects.forEach(proj => {
      if (proj.technologies) {
        const techSkills = extractSkillsFromText(proj.technologies);
        techSkills.forEach(skill => allSkills.add(skill));
      }
      
      if (proj.name) {
        const nameSkills = extractSkillsFromText(proj.name);
        nameSkills.forEach(skill => allSkills.add(skill));
      }
      
      if (proj.description) {
        const descSkills = extractSkillsFromText(proj.description);
        descSkills.forEach(skill => allSkills.add(skill));
      }
    });
  }
  
  // Convert Set to comma-separated string
  return Array.from(allSkills).sort().join(', ');
};

// Generate soft skills based on role and experience
export const generateSoftSkills = (formData) => {
  const softSkills = new Set();
  
  // Base soft skills for everyone
  softSkills.add('Problem Solving');
  softSkills.add('Communication');
  softSkills.add('Team Collaboration');
  
  // Role-based soft skills
  const role = (formData.currentRole || formData.targetRole || '').toLowerCase();
  
  if (role.includes('senior') || role.includes('lead') || role.includes('manager')) {
    softSkills.add('Leadership');
    softSkills.add('Mentoring');
    softSkills.add('Strategic Thinking');
    softSkills.add('Decision Making');
  }
  
  if (role.includes('manager')) {
    softSkills.add('Project Management');
    softSkills.add('Stakeholder Management');
    softSkills.add('Time Management');
  }
  
  if (role.includes('designer')) {
    softSkills.add('Creativity');
    softSkills.add('Attention to Detail');
    softSkills.add('User Empathy');
  }
  
  if (role.includes('analyst')) {
    softSkills.add('Critical Thinking');
    softSkills.add('Analytical Skills');
    softSkills.add('Attention to Detail');
  }
  
  if (role.includes('developer') || role.includes('engineer')) {
    softSkills.add('Debugging');
    softSkills.add('Code Review');
    softSkills.add('Continuous Learning');
  }
  
  // Experience-based skills
  if (formData.yearsExperience) {
    const years = parseInt(formData.yearsExperience);
    if (years >= 5) {
      softSkills.add('Technical Leadership');
    }
    if (years >= 3) {
      softSkills.add('Mentoring');
    }
  }
  
  // Additional common soft skills
  softSkills.add('Adaptability');
  softSkills.add('Time Management');
  
  return Array.from(softSkills).sort().join(', ');
};