import { translateToEnglish } from './translator';

export const enhanceDescription = (text) => {
  if (!text || !text.trim()) return '';
  
  const words = text.trim().split(/\s+/);
  
  // If it's a single word or very short phrase (1-3 words)
  if (words.length <= 3) {
    const lowerText = text.toLowerCase().trim();
    
    // Comprehensive mapping of single words/short phrases to professional descriptions
    const enhancementMap = {
      // Development & Coding
      'code': 'Developed and maintained clean, efficient, and scalable code following best practices',
      'coding': 'Implemented robust coding solutions with emphasis on performance optimization',
      'program': 'Created comprehensive programs to automate processes and improve efficiency',
      'programming': 'Delivered high-quality programming solutions using modern development frameworks',
      'develop': 'Developed innovative features that enhanced user experience and system functionality',
      'development': 'Spearheaded development initiatives resulting in improved application performance',
      'build': 'Built scalable applications using industry-standard tools and methodologies',
      'building': 'Engineered robust systems with focus on reliability and maintainability',
      'create': 'Created technical solutions that streamlined workflows and reduced operational costs',
      'implement': 'Implemented critical features that directly impacted business objectives',
      
      // Design & UI/UX
      'design': 'Designed intuitive and user-friendly interfaces enhancing overall user satisfaction',
      'designing': 'Crafted visually appealing designs aligned with brand guidelines and user needs',
      'ui': 'Developed responsive UI components ensuring seamless cross-platform compatibility',
      'ux': 'Enhanced user experience through data-driven design decisions and usability testing',
      'mockup': 'Created detailed mockups and prototypes for stakeholder review and approval',
      'wireframe': 'Developed comprehensive wireframes to visualize application flow and functionality',
      
      // Testing & Quality
      'test': 'Conducted comprehensive testing procedures ensuring software quality and reliability',
      'testing': 'Executed rigorous testing protocols to identify and resolve potential issues',
      'qa': 'Performed quality assurance activities maintaining high standards of deliverables',
      'debug': 'Debugged complex issues systematically reducing production defects by significant margins',
      'debugging': 'Resolved critical technical issues through systematic debugging and root cause analysis',
      'fix': 'Identified and fixed software bugs improving system stability and performance',
      
      // Management & Leadership
      'lead': 'Led cross-functional teams toward successful project completion within deadlines',
      'leading': 'Provided strategic leadership driving team performance and productivity improvements',
      'manage': 'Managed project lifecycles from planning through deployment ensuring quality delivery',
      'managing': 'Oversaw daily operations coordinating resources and optimizing team workflows',
      'coordinate': 'Coordinated between multiple stakeholders facilitating smooth project execution',
      'supervise': 'Supervised team activities ensuring alignment with organizational goals and standards',
      'mentor': 'Mentored junior developers fostering skill development and technical growth',
      
      // Analysis & Research
      'analyze': 'Analyzed complex data sets to derive actionable insights for business decisions',
      'analysis': 'Performed detailed analysis identifying trends and opportunities for improvement',
      'research': 'Conducted extensive research to support evidence-based decision making',
      'investigate': 'Investigated technical challenges proposing effective solutions and workarounds',
      'evaluate': 'Evaluated system performance metrics recommending optimization strategies',
      'assess': 'Assessed project requirements translating business needs into technical specifications',
      
      // Documentation & Communication
      'document': 'Created comprehensive technical documentation facilitating knowledge transfer',
      'documentation': 'Developed detailed documentation improving team efficiency and onboarding processes',
      'write': 'Authored technical specifications and user guides ensuring clarity and completeness',
      'report': 'Generated detailed reports providing insights into project status and metrics',
      'present': 'Delivered engaging presentations to stakeholders communicating technical concepts effectively',
      
      // Collaboration & Teamwork
      'collaborate': 'Collaborated with cross-functional teams to deliver integrated solutions',
      'team': 'Worked collaboratively within agile teams to achieve sprint goals and deliverables',
      'teamwork': 'Demonstrated strong teamwork skills contributing to positive team dynamics',
      'cooperate': 'Cooperated with team members ensuring smooth workflow and timely delivery',
      'communicate': 'Maintained clear communication channels with stakeholders throughout project lifecycle',
      
      // Optimization & Improvement
      'optimize': 'Optimized system performance resulting in faster response times and better efficiency',
      'improve': 'Improved existing processes through automation and strategic enhancements',
      'enhance': 'Enhanced application features based on user feedback and analytics',
      'upgrade': 'Upgraded legacy systems to modern platforms improving maintainability',
      'refactor': 'Refactored codebase improving code quality and reducing technical debt',
      'streamline': 'Streamlined workflows eliminating redundancies and improving productivity',
      
      // Database & Data
      'database': 'Designed and optimized database schemas ensuring data integrity and performance',
      'sql': 'Wrote complex SQL queries for data extraction and reporting purposes',
      'data': 'Managed data pipelines ensuring accurate and timely information flow',
      'query': 'Developed efficient queries optimizing database performance and response times',
      
      // DevOps & Infrastructure
      'deploy': 'Deployed applications to production environments ensuring zero-downtime releases',
      'deployment': 'Managed deployment pipelines automating release processes',
      'ci/cd': 'Implemented CI/CD pipelines accelerating development and deployment cycles',
      'docker': 'Containerized applications using Docker improving deployment consistency',
      'kubernetes': 'Orchestrated containerized applications using Kubernetes for scalability',
      'cloud': 'Migrated infrastructure to cloud platforms reducing operational costs',
      'aws': 'Architected AWS solutions leveraging cloud-native services for scalability',
      'azure': 'Implemented Azure-based solutions optimizing cloud resource utilization',
      
      // Security
      'security': 'Implemented security best practices protecting sensitive data and systems',
      'secure': 'Secured applications against vulnerabilities through comprehensive security audits',
      'encrypt': 'Implemented encryption protocols safeguarding data in transit and at rest',
      
      // Agile & Methodology
      'agile': 'Participated in agile ceremonies ensuring continuous improvement and collaboration',
      'scrum': 'Contributed to scrum team activities delivering incremental value each sprint',
      'sprint': 'Completed sprint objectives consistently meeting defined acceptance criteria',
      
      // Monitoring & Support
      'monitor': 'Monitored system performance proactively identifying and resolving issues',
      'support': 'Provided technical support resolving user issues and maintaining satisfaction',
      'troubleshoot': 'Troubleshot complex technical problems minimizing system downtime',
      'maintain': 'Maintained production systems ensuring high availability and reliability',
      
      // Planning & Strategy
      'plan': 'Developed strategic plans aligning technical initiatives with business objectives',
      'strategy': 'Formulated technical strategies supporting long-term organizational goals',
      'architect': 'Architected scalable solutions considering future growth and requirements',
      
      // Training & Knowledge Transfer
      'train': 'Trained team members on new technologies and best practices',
      'teaching': 'Conducted knowledge sharing sessions enhancing team capabilities',
      'onboard': 'Facilitated smooth onboarding of new team members',
      
      // Integration & APIs
      'api': 'Developed RESTful APIs enabling seamless integration with external systems',
      'integration': 'Integrated third-party services expanding application functionality',
      'microservices': 'Designed microservices architecture improving system modularity',
      
      // Performance & Metrics
      'performance': 'Analyzed performance metrics implementing optimizations for better efficiency',
      'metrics': 'Tracked key performance indicators driving data-informed decisions',
      'benchmark': 'Conducted benchmark testing establishing performance baselines'
    };
    
    // Check for exact matches or partial matches
    for (const [key, value] of Object.entries(enhancementMap)) {
      if (lowerText === key || lowerText.includes(key)) {
        return value;
      }
    }
    
    // Fallback variations to avoid "contributed to" repetition
    const genericFallbacks = [
      `Successfully executed ${text} responsibilities delivering measurable results`,
      `Demonstrated expertise in ${text} through consistent high-quality deliverables`,
      `Applied ${text} skills to solve complex challenges and improve outcomes`,
      `Utilized ${text} capabilities to drive project success and team efficiency`,
      `Performed ${text} duties with attention to detail and professional excellence`
    ];
    
    // Use hash of text to consistently pick same fallback for same input
    const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return genericFallbacks[hash % genericFallbacks.length];
  }
  
  // For longer text (4+ words), enhance with action verbs if needed
  const actionVerbs = [
    'Achieved', 'Administered', 'Analyzed', 'Architected', 'Built', 'Collaborated',
    'Completed', 'Conducted', 'Configured', 'Coordinated', 'Created', 'Delivered',
    'Demonstrated', 'Designed', 'Developed', 'Directed', 'Established', 'Executed',
    'Facilitated', 'Generated', 'Identified', 'Implemented', 'Improved', 'Increased',
    'Initiated', 'Integrated', 'Launched', 'Led', 'Maintained', 'Managed',
    'Optimized', 'Organized', 'Performed', 'Pioneered', 'Planned', 'Produced',
    'Programmed', 'Reduced', 'Resolved', 'Spearheaded', 'Streamlined', 'Transformed'
  ];
  
  const startsWithActionVerb = actionVerbs.some(verb => 
    text.trim().toLowerCase().startsWith(verb.toLowerCase())
  );
  
  if (!startsWithActionVerb) {
    // Pick a contextual action verb based on content
    let selectedVerb = 'Contributed to';
    
    if (text.toLowerCase().includes('code') || text.toLowerCase().includes('program')) {
      selectedVerb = 'Developed';
    } else if (text.toLowerCase().includes('manage') || text.toLowerCase().includes('lead')) {
      selectedVerb = 'Coordinated';
    } else if (text.toLowerCase().includes('design')) {
      selectedVerb = 'Designed';
    } else if (text.toLowerCase().includes('test')) {
      selectedVerb = 'Executed';
    } else if (text.toLowerCase().includes('help') || text.toLowerCase().includes('support')) {
      selectedVerb = 'Facilitated';
    } else if (text.toLowerCase().includes('improve') || text.toLowerCase().includes('enhance')) {
      selectedVerb = 'Optimized';
    } else if (text.toLowerCase().includes('create') || text.toLowerCase().includes('build')) {
      selectedVerb = 'Established';
    }
    
    return `${selectedVerb} ${text}`;
  }
  
  return text;
};

export const enhanceProjectDescription = (description, technologies) => {
  if (!description || description.trim().length < 10) {
    if (technologies) {
      const techList = technologies.split(',').map(t => t.trim()).filter(Boolean);
      const techString = techList.slice(0, 3).join(', ');
      
      // Multiple variations for project descriptions
      const variations = [
        `Engineered a comprehensive solution leveraging ${techString} to deliver a robust, scalable, and maintainable application. Implemented industry best practices and modern design patterns ensuring code quality, performance optimization, and seamless user experience.`,
        
        `Developed an innovative application utilizing ${techString} with focus on performance, scalability, and user experience. Applied agile methodologies and modern development practices to deliver high-quality, production-ready software.`,
        
        `Built a feature-rich platform using ${techString} demonstrating strong technical expertise and problem-solving capabilities. Integrated cutting-edge technologies to create efficient, reliable, and user-centric solutions.`,
        
        `Created a sophisticated application powered by ${techString} emphasizing clean code architecture and optimal performance. Delivered end-to-end solution from requirements analysis through deployment and maintenance.`,
        
        `Architected and implemented a scalable system using ${techString} with emphasis on security, performance, and maintainability. Followed industry standards and best practices throughout the development lifecycle.`
      ];
      
      // Use hash to consistently select same variation
      const hash = technologies.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return variations[hash % variations.length];
    }
    
    // Variations without specific technologies
    const genericVariations = [
      'Developed a feature-rich application demonstrating technical expertise and innovative problem-solving capabilities. Implemented modern development practices delivering a high-quality, user-centric solution.',
      
      'Built a comprehensive software solution showcasing proficiency in full-stack development. Applied best practices and design patterns ensuring scalability, maintainability, and optimal performance.',
      
      'Created an end-to-end application highlighting strong technical skills and attention to detail. Delivered production-ready software meeting all functional and non-functional requirements.',
      
      'Engineered a robust application demonstrating expertise in software architecture and development. Focused on creating efficient, reliable, and maintainable code following industry standards.',
      
      'Architected and developed a complete solution showcasing versatility and technical proficiency. Implemented modern technologies and methodologies delivering exceptional results.'
    ];
    
    const hash = Math.random() * 1000;
    return genericVariations[Math.floor(hash) % genericVariations.length];
  }
  
  return translateToEnglish(description);
};

export const enhanceEducationDescription = (degree, institution) => {
  if (!degree || !institution) return '';
  
  const variations = [
    `Completed ${degree} program with focus on core competencies, practical applications, and industry-relevant skills. Developed strong analytical abilities and problem-solving expertise through comprehensive coursework and hands-on projects.`,
    
    `Pursued ${degree} curriculum emphasizing theoretical foundations and practical implementations. Built solid understanding of fundamental concepts while gaining experience through collaborative projects and research initiatives.`,
    
    `Earned ${degree} with concentration on modern methodologies and real-world applications. Strengthened technical proficiency and critical thinking skills through rigorous academic training and project-based learning.`,
    
    `Achieved ${degree} demonstrating academic excellence and dedication to continuous learning. Gained comprehensive knowledge through challenging coursework, laboratory work, and innovative project development.`,
    
    `Graduated with ${degree} focusing on both theoretical knowledge and practical skill development. Enhanced analytical capabilities and technical expertise through diverse academic experiences and collaborative endeavors.`
  ];
  
  const hash = (degree + institution).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return variations[hash % variations.length];
};

export const generateEnhancedSummary = (data) => {
  const { currentRole, yearsExperience, targetRole, technicalSkills } = data;
  const skills = technicalSkills.split(',').slice(0, 4).map(s => s.trim()).filter(Boolean).join(', ');
  
  if (!currentRole && !targetRole && !skills) {
    return 'Dynamic and results-oriented professional with a proven track record of delivering high-impact results across diverse projects. Combines strong technical expertise with excellent problem-solving abilities to drive innovation and exceed organizational goals. Demonstrated ability to adapt to new technologies and methodologies while maintaining focus on quality and efficiency. Committed to continuous learning and professional development to stay current with industry trends and best practices.';
  }
  
  const exp = yearsExperience ? `${yearsExperience}+ years` : 'proven';
  const role = currentRole || 'professional';
  const target = targetRole || 'senior technical leadership';
  const skillSection = skills ? ` with expertise in ${skills}` : '';
  
  // Multiple summary variations to avoid repetition
  const summaryVariations = [
    `Accomplished ${role} with ${exp} of progressive experience in delivering innovative solutions and driving measurable business impact${skillSection}. Demonstrated success in leading complex projects from conception to deployment, consistently exceeding performance expectations and stakeholder requirements. Strong analytical and problem-solving capabilities combined with excellent communication skills enable effective collaboration across cross-functional teams. Proven ability to mentor junior team members and contribute to organizational growth through technical excellence and strategic thinking. Currently seeking to leverage comprehensive skill set and experience to excel as ${target}, bringing fresh perspectives and driving continuous improvement initiatives.`,
    
    `Results-driven ${role} bringing ${exp} of hands-on experience in architecting and implementing scalable solutions${skillSection}. Track record of successfully managing end-to-end project lifecycles while maintaining high quality standards and meeting aggressive timelines. Excel at translating complex technical concepts into actionable strategies that align with business objectives. Known for fostering collaborative team environments and driving innovation through creative problem-solving. Eager to transition into ${target} role to contribute strategic vision and technical leadership.`,
    
    `Seasoned ${role} with ${exp} of experience specializing in developing robust, high-performance solutions${skillSection}. Consistently recognized for delivering projects that enhance operational efficiency and drive revenue growth. Expertise spans full software development lifecycle with particular strength in system design, optimization, and implementation. Strong communicator who builds effective relationships with stakeholders at all levels. Pursuing opportunities in ${target} to apply technical acumen and leadership capabilities in driving organizational success.`,
    
    `Experienced ${role} offering ${exp} of demonstrated expertise in creating innovative technical solutions${skillSection}. History of transforming business requirements into elegant, efficient implementations that exceed expectations. Combines deep technical knowledge with business acumen to deliver solutions that provide tangible value. Passionate about staying current with emerging technologies and industry best practices. Seeking ${target} position to leverage extensive experience in driving strategic initiatives and mentoring high-performing teams.`,
    
    `Versatile ${role} with ${exp} of progressive experience delivering impactful solutions${skillSection}. Proven track record of successfully navigating complex technical challenges while maintaining focus on business outcomes. Strong advocate for code quality, best practices, and continuous improvement. Effective collaborator who thrives in dynamic, fast-paced environments. Looking to advance career as ${target} where comprehensive technical expertise and leadership skills can drive organizational excellence.`
  ];
  
  // Select variation based on role to ensure consistency per user
  const hash = role.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return summaryVariations[hash % summaryVariations.length];
};