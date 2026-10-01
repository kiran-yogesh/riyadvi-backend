const servicesData = [
  {
    title: 'Web Development',
    slug: 'web-development',
    iconName: 'Globe',
    sceneType: 'browser',
    tagline: 'High-performance, scalable web platforms built for high-growth enterprises.',
    problemStatement: 'Legacy monolithic websites suffer from slow load times, poor mobile performance, and low conversion rates.',
    solutionStatement: 'We craft modern Web Apps using React, Node.js, and Cloud Infrastructure designed for speed, security, and maximum engagement.',
    keyFeatures: [
      { title: 'Full-Stack MERN Architecture', description: 'Clean RESTful & GraphQL integration.' },
      { title: 'Sub-second Page Load Performance', description: 'Optimized bundle size & Web Vitals.' },
      { title: 'Interactive 3D & WebGL Features', description: 'Three.js powered 3D visualizers.' },
      { title: 'Enterprise Security', description: 'OWASP compliant protection & SSL.' }
    ],
    useCases: [
      { industry: 'E-Commerce & SaaS', description: 'High-throughput checkout and subscription management.' },
      { industry: 'Healthcare & Fintech', description: 'HIPAA & PCI compliant portal architecture.' }
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Three.js'],
    processSteps: [
      { stepNumber: 1, title: 'Discovery', description: 'Mapping technical goals and target audience behavior.' },
      { stepNumber: 2, title: 'Architecture', description: 'Designing database schemas and API specifications.' },
      { stepNumber: 3, title: 'UI/UX Design', description: 'Creating interactive Figma wireframes and design tokens.' },
      { stepNumber: 4, title: 'Development', description: 'Agile sprint iteration with continuous integration.' },
      { stepNumber: 5, title: 'Launch', description: 'Performance audit, security testing, and production deploy.' }
    ],
    isFeatured: true
  },
  {
    title: 'App Development',
    slug: 'app-development',
    iconName: 'Smartphone',
    sceneType: 'phone',
    tagline: 'Native and Cross-Platform Mobile Applications for iOS & Android.',
    problemStatement: 'Businesses lose over 60% of mobile users due to clunky interfaces and fragmented platform support.',
    solutionStatement: 'We engineer slick, lightning-fast mobile apps using React Native and Flutter with real-time backend synchronization.',
    keyFeatures: [
      { title: 'Cross-Platform Efficiency', description: 'Single codebase for iOS & Android.' },
      { title: 'Offline Data Syncing', description: 'Uninterrupted user experience in low connectivity.' },
      { title: 'Push Notification Systems', description: 'Automated user re-engagement messaging.' },
      { title: 'Biometric Security', description: 'FaceID & Fingerprint authentication.' }
    ],
    useCases: [
      { industry: 'On-Demand Services', description: 'Real-time GPS tracking and instant booking.' },
      { industry: 'Fitness & Lifestyle', description: 'Ble connectivity and biometric dashboards.' }
    ],
    techStack: ['React Native', 'Flutter', 'Node.js', 'Firebase', 'Redux Toolkit', 'GraphQL'],
    processSteps: [
      { stepNumber: 1, title: 'Requirements', description: 'User flow mapping and device capability scoping.' },
      { stepNumber: 2, title: 'Prototyping', description: 'Interactive mobile prototypes with micro-interactions.' },
      { stepNumber: 3, title: 'Core Coding', description: 'Native module integration and API hooks.' },
      { stepNumber: 4, title: 'App Store Submission', description: 'Apple App Store and Google Play compliance review.' }
    ],
    isFeatured: true
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    iconName: 'TrendingUp',
    sceneType: 'growth',
    tagline: 'Data-driven growth strategies that convert traffic into loyal revenue.',
    problemStatement: 'Generic ad campaigns waste budget on low-intent traffic without clear ROI tracking.',
    solutionStatement: 'Our full-funnel digital marketing combines SEO, performance marketing, and automated analytics dashboards to scale revenue.',
    keyFeatures: [
      { title: 'Technical & Organic SEO', description: 'First-page search visibility for high-value keywords.' },
      { title: 'Performance Ad Campaigns', description: 'Laser-targeted Google & Meta ads optimization.' },
      { title: 'Conversion Rate Optimization (CRO)', description: 'A/B testing user journeys to boost conversion.' },
      { title: 'Real-Time ROI Analytics', description: 'Custom BI dashboards tracking customer acquisition cost.' }
    ],
    useCases: [
      { industry: 'B2B Tech', description: 'Qualified lead generation and account-based marketing.' },
      { industry: 'D2C Brands', description: 'Omnichannel customer acquisition and funnel scaling.' }
    ],
    techStack: ['Google Analytics 4', 'Semrush', 'HubSpot', 'Meta Pixel', 'Google Ads', 'Hotjar'],
    processSteps: [
      { stepNumber: 1, title: 'Audit', description: 'Comprehensive SEO & competitor benchmark audit.' },
      { stepNumber: 2, title: 'Funnel Strategy', description: 'Designing multi-touch acquisition funnels.' },
      { stepNumber: 3, title: 'Execution', description: 'Launching target ad sets and optimized landing pages.' },
      { stepNumber: 4, title: 'Scaling', description: 'Weekly data analysis and channel scaling.' }
    ],
    isFeatured: true
  },
  {
    title: 'AR / VR',
    slug: 'ar-vr',
    iconName: 'Eye',
    sceneType: 'ar-vr',
    tagline: 'Next-generation spatial computing and immersive WebAR experiences.',
    problemStatement: 'Static 2D images fail to provide realistic product visualization or hands-on training simulation.',
    solutionStatement: 'We create WebAR/WebVR solutions accessible directly in mobile browsers without downloading extra apps.',
    keyFeatures: [
      { title: 'No-App WebAR Access', description: 'Instant camera AR activation via web links & QR codes.' },
      { title: 'Interactive 3D Product Try-On', description: 'Real-scale spatial placement in user environment.' },
      { title: 'Virtual Showrooms & Tours', description: '360-degree interactive environment exploration.' },
      { title: 'Cross-Device Compatibility', description: 'Seamless performance on WebXR, iOS QuickLook, & Android SceneViewer.' }
    ],
    useCases: [
      { industry: 'Real Estate & Retail', description: 'Virtual property walkthroughs and furniture placement.' },
      { industry: 'Industrial Training', description: 'Immersive step-by-step machinery operation simulations.' }
    ],
    techStack: ['Three.js', 'WebXR API', 'Unity', 'A-Frame', '8th Wall', 'Blender'],
    processSteps: [
      { stepNumber: 1, title: 'Asset Modeling', description: 'High-poly to low-poly 3D mesh optimization.' },
      { stepNumber: 2, title: 'Spatial Physics', description: 'Lighting, shadows, and surface detection setup.' },
      { stepNumber: 3, title: 'Web Integration', description: 'Integrating WebGL canvas into website UI.' }
    ],
    isFeatured: true
  },
  {
    title: '3D Modeling',
    slug: '3d-modeling',
    iconName: 'Box',
    sceneType: 'object3d',
    tagline: 'Photorealistic 3D assets, CAD rendering, and interactive web models.',
    problemStatement: 'Physical photography shoots are expensive, slow, and impossible for unbuilt hardware products.',
    solutionStatement: 'We build ultra-detailed 3D models with PBR materials for web visualizers, marketing renders, and interactive configurators.',
    keyFeatures: [
      { title: 'Photorealistic PBR Textures', description: '4K PBR material maps for glass, metals, & fabrics.' },
      { title: 'GLTF/GLB Asset Optimization', description: 'Ultra-compressed 3D mesh files under 5MB.' },
      { title: 'Dynamic Product Configurators', description: 'Real-time color, texture, and part swapping.' },
      { title: 'Studio-Grade Lighting', description: 'Custom HDR environment maps and ray-traced shadows.' }
    ],
    useCases: [
      { industry: 'Hardware & Automotive', description: 'Interactive 360-degree product configurators.' },
      { industry: 'Architecture & Medical', description: 'Surgical device models and architectural visualizations.' }
    ],
    techStack: ['Blender', 'Substance Painter', 'Three.js', 'React Three Fiber', 'Draco', 'GLTF Pipeline'],
    processSteps: [
      { stepNumber: 1, title: 'CAD Blueprinting', description: 'Importing or drafting exact dimensional geometry.' },
      { stepNumber: 2, title: 'Texturing & UV', description: 'Applying PBR maps, roughness, and normal textures.' },
      { stepNumber: 3, title: 'Export & Compression', description: 'Draco compression for instant WebGL loading.' }
    ],
    isFeatured: true
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    iconName: 'Layout',
    sceneType: 'floating-ui',
    tagline: 'Human-centered digital interfaces designed for delight and maximum conversion.',
    problemStatement: 'Confusing user journeys and outdated interfaces lead to high bounce rates and abandoned carts.',
    solutionStatement: 'We combine cognitive psychology, accessibility standards, and sleek micro-animations to craft intuitive digital products.',
    keyFeatures: [
      { title: 'User Research & Personas', description: 'Mapping real user pain points and behavior.' },
      { title: 'Interactive Design Systems', description: 'Scalable typography, color tokens, and atomic UI libraries.' },
      { title: 'Micro-Animations & Motion', description: 'Delightful visual feedback that guides user action.' },
      { title: 'Accessibility (WCAG 2.1 AAA)', description: 'Color contrast & screen-reader optimized elements.' }
    ],
    useCases: [
      { industry: 'Enterprise SaaS', description: 'Complex dashboard navigation simplified into crisp views.' },
      { industry: 'Mobile Apps', description: 'Thumb-friendly ergonomics and seamless onboarding.' }
    ],
    techStack: ['Figma', 'Principle', 'Adobe CC', 'Tailwind CSS', 'Framer Motion', 'Lottie'],
    processSteps: [
      { stepNumber: 1, title: 'Wireframing', description: 'Low-fidelity layout mapping for fast iteration.' },
      { stepNumber: 2, title: 'High-Fi Mockups', description: 'Applying brand identity and pixel-perfect components.' },
      { stepNumber: 3, title: 'Design Handoff', description: 'Exporting CSS tokens and responsive assets for dev.' }
    ],
    isFeatured: true
  }
];

const portfolioData = [
  {
    title: 'Puratap Smart Water System',
    slug: 'puratap',
    client: 'Puratap Water Filters',
    industry: 'IoT & CleanTech',
    challenge: 'Legacy system lacked real-time filter health monitoring and instant service booking for residential users.',
    solution: 'Engineered an IoT mobile dashboard connected to smart water flow sensors with automated maintenance alerts.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'MQTT', 'Tailwind CSS'],
    results: [
      { metric: '+140%', label: 'Filter Replacement Sales' },
      { metric: '4.9/5', label: 'App Store Rating' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'puratap-cylinder',
    relatedServiceSlug: 'app-development',
    isFeatured: true
  },
  {
    title: 'Wanaromah Luxury Perfumes E-Commerce',
    slug: 'wanaromah',
    client: 'Wanaromah Perfumers',
    industry: 'Luxury Retail & Fragrance',
    challenge: 'Needed an interactive online fragrance selector to replicate in-store olfactory consultations.',
    solution: 'Created a WebGL-powered 3D perfume bottle customizer and AI scent finder questionnaire.',
    technologies: ['React', 'Three.js', 'Node.js', 'MongoDB', 'Stripe'],
    results: [
      { metric: '3.2x', label: 'Conversion Rate Boost' },
      { metric: '$1.2M', label: 'Annual Online Sales' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'perfume-bottle',
    relatedServiceSlug: '3d-modeling',
    isFeatured: true
  },
  {
    title: 'Laxmi Astro AI Astrological Platform',
    slug: 'laxmi-astro-ai',
    client: 'Laxmi Astro AI Technologies',
    industry: 'Consumer AI & EdTech',
    challenge: 'Integrating complex astrological chart calculations with real-time AI natural language processing.',
    solution: 'Built an AI-driven chat platform parsing planetary charts and delivering personalized insights instantly.',
    technologies: ['React', 'Python OpenAI API', 'Node.js', 'MongoDB', 'WebSocket'],
    results: [
      { metric: '500k+', label: 'Active Monthly Users' },
      { metric: '< 800ms', label: 'AI Response Latency' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'astro-sphere',
    relatedServiceSlug: 'web-development',
    isFeatured: true
  },
  {
    title: 'Tony & Guy Salon Digital Booking Portal',
    slug: 'tony-and-guy',
    client: 'Tony & Guy Hairdressing',
    industry: 'Beauty & Lifestyle',
    challenge: 'High phone call volume and scheduling conflicts across 45+ franchise locations.',
    solution: 'Developed a centralized appointment portal with stylist preference matching and automated SMS reminders.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Twilio SMS', 'Tailwind CSS'],
    results: [
      { metric: '-65%', label: 'Reception Phone Volume' },
      { metric: '85k+', label: 'Monthly Bookings' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'salon-chair',
    relatedServiceSlug: 'web-development',
    isFeatured: false
  },
  {
    title: 'Studio11 Salon & Spa Franchise ERP',
    slug: 'studio11',
    client: 'Studio11 Salons',
    industry: 'Enterprise Franchise Ops',
    challenge: 'Inconsistent billing, inventory tracking, and commission calculations across 100+ locations.',
    solution: 'Architected a cloud-based multi-tenant ERP managing inventory, POS billing, and staff payroll.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Chart.js'],
    results: [
      { metric: '100%', label: 'Inventory Audit Accuracy' },
      { metric: '100+', label: 'Franchises Onboarded' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'erp-building',
    relatedServiceSlug: 'web-development',
    isFeatured: false
  },
  {
    title: 'Sivam Physio Care Tele-Rehab App',
    slug: 'sivam-physio-care',
    client: 'Sivam Healthcare',
    industry: 'Healthcare & Telemedicine',
    challenge: 'Post-surgery physiotherapy patients struggled with home exercise posture accuracy.',
    solution: 'Built a mobile tele-rehab app with computer vision motion tracking for real-time exercise feedback.',
    technologies: ['React Native', 'Node.js', 'TensorFlow Lite', 'MongoDB'],
    results: [
      { metric: '+80%', label: 'Patient Exercise Compliance' },
      { metric: '4.8/5', label: 'Patient Satisfaction' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'medical-heart',
    relatedServiceSlug: 'app-development',
    isFeatured: false
  },
  {
    title: 'Pearl Housing 3D Virtual Property Showcase',
    slug: 'pearl-housing',
    client: 'Pearl Housing Infrastructure',
    industry: 'Real Estate & Construction',
    challenge: 'Selling off-plan luxury apartments before physical construction was complete.',
    solution: 'Created an interactive 3D WebGL apartment viewer allowing buyers to customize floor plans and finishes.',
    technologies: ['Three.js', 'React', 'Node.js', 'MongoDB', 'GSAP'],
    results: [
      { metric: '70%', label: 'Pre-Construction Sales' },
      { metric: '$45M', label: 'Inventory Sold' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'house-model',
    relatedServiceSlug: 'ar-vr',
    isFeatured: true
  },
  {
    title: 'Nugenica Biotech Lab Information System',
    slug: 'nugenica-biotech-lab',
    client: 'Nugenica Life Sciences',
    industry: 'Biotechnology & Pharma',
    challenge: 'Manual sample tracking in genomic sequencing labs led to turnaround bottlenecks.',
    solution: 'Engineered a automated LIMS pipeline tracking DNA samples from receipt to sequencing analysis.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Docker'],
    results: [
      { metric: '-50%', label: 'Lab Sample Processing Time' },
      { metric: '0', label: 'Compliance Audit Deficiencies' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'dna-strand',
    relatedServiceSlug: 'web-development',
    isFeatured: false
  },
  {
    title: 'VisDoc Tele-Doctor Consultation Platform',
    slug: 'visdoc',
    client: 'VisDoc Telehealth',
    industry: 'Digital Health',
    challenge: 'Connecting remote rural patients with specialized medical doctors via secure video call.',
    solution: 'Deployed a WebRTC video consultation app with electronic health records (EHR) integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Socket.io'],
    results: [
      { metric: '250k+', label: 'Tele-Consultations Conducted' },
      { metric: '99.99%', label: 'Video Call Uptime' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'stethoscope',
    relatedServiceSlug: 'app-development',
    isFeatured: false
  },
  {
    title: 'Cube Dental Practice Management System',
    slug: 'cube-dental',
    client: 'Cube Dental Clinics',
    industry: 'Dental Care & Health',
    challenge: 'Managing X-ray images, patient charts, and automated insurance claims filing.',
    solution: 'Designed an intuitive cloud dental suite featuring DICOM image viewer and quick claims submission.',
    technologies: ['React', 'Node.js', 'MongoDB', 'DICOM Web', 'Tailwind CSS'],
    results: [
      { metric: '-40%', label: 'Administrative Overhead' },
      { metric: '150+', label: 'Dentists Daily Active' }
    ],
    coverImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    model3DType: 'tooth-3d',
    relatedServiceSlug: 'ui-ux-design',
    isFeatured: false
  }
];

const blogData = [
  {
    title: 'Building High-Performance WebGL 3D Experiences in React with R3F',
    slug: 'building-high-performance-webgl-react-r3f',
    category: 'Engineering & 3D',
    tags: ['React', 'Three.js', 'R3F', 'WebGL', 'Performance'],
    author: { name: 'Kiran R.', role: 'Lead 3D Architect', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
    excerpt: 'Discover how to combine React Three Fiber with custom GLSL shaders to achieve 60 FPS 3D animations without melting mobile GPUs.',
    contentMarkdown: `
# Building High-Performance WebGL 3D Experiences in React with R3F

Integrating 3D experiences directly into corporate websites has evolved from a gimmick to a powerful conversion asset. However, unoptimized WebGL assets can lead to massive bundle sizes and choppy frame rates.

## Key Optimization Strategies

### 1. Draco Geometry Compression
Always compress your 3D GLTF models using the Draco pipeline. This reduces 3D mesh payload size by **up to 80%**.

### 2. DPR (Device Pixel Ratio) Management
Never set your R3F canvas DPR higher than 2.0. On high-density retina screens, rendering at 3.0+ quadruples pixel shading math with negligible visual benefit.

\`\`\`jsx
<Canvas dpr={[1, 1.5]}>
  <OrbitControls enableZoom={false} />
  <FloatingNodes />
</Canvas>
\`\`\`

### 3. Instanced Meshes for Repeated Objects
If you are rendering hundreds of floating particle nodes or lights, use \`instancedMesh\` instead of creating individual React components for each object.
    `,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    readTimeMinutes: 7,
    isFeatured: true
  },
  {
    title: 'Why Modern Enterprises Are Shifting to MERN Stack & Microservices',
    slug: 'enterprise-mern-stack-microservices',
    category: 'Architecture',
    tags: ['MERN', 'Node.js', 'MongoDB', 'Enterprise'],
    author: { name: 'Senior Systems Architect', role: 'Full-Stack Lead', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
    excerpt: 'A deep dive into how decoupled Node.js APIs and MongoDB Atlas enable rapid product scaling for enterprise tech platforms.',
    contentMarkdown: `
# Enterprise MERN Architecture in 2026

Modern businesses require rapid iteration cycles. Monolithic server-side rendered apps are being replaced by event-driven MERN stack microservices.

## Advantages of MERN for Enterprise Scale

- **Single Language Advantage**: JavaScript/TypeScript across front and back end reduces context switching.
- **Document-Based Agility**: MongoDB JSON-like documents fit dynamic domain entities without rigid migration scripts.
- **Asynchronous Express I/O**: Non-blocking event loops handle thousands of concurrent client connections with minimal RAM footprint.
    `,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    readTimeMinutes: 5,
    isFeatured: false
  },
  {
    title: 'Scroll-Driven Storytelling: Combining GSAP ScrollTrigger & Lenis',
    slug: 'scroll-driven-storytelling-gsap-lenis',
    category: 'UI/UX Design',
    tags: ['GSAP', 'Lenis', 'Animation', 'UI/UX'],
    author: { name: 'Motion Specialist', role: 'UI/UX Engineer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
    excerpt: 'Learn how smooth inertial scrolling transforms ordinary web pages into cinematic digital brand journeys.',
    contentMarkdown: `
# Scroll-Driven Storytelling with GSAP & Lenis

Smooth scrolling is the secret ingredient behind award-winning web experiences. When combined with GSAP ScrollTrigger, users feel like they are directing an interactive movie as they scroll.

## Implementation Blueprint

1. Initialize Lenis for normalized cross-browser inertial scroll physics.
2. Synchronize Lenis \`scroll\` event with GSAP \`ScrollTrigger.update\`.
3. Pin key storytelling sections while stepping through SVG wireframes and 3D camera angles.
    `,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    readTimeMinutes: 6,
    isFeatured: false
  }
];

const jobsData = [
  {
    title: 'Senior MERN Full-Stack Engineer',
    slug: 'senior-mern-fullstack-engineer',
    department: 'Engineering',
    designation: 'Senior Engineer',
    experienceLevel: 'Senior',
    location: 'Hybrid / Mylapore, Chennai / Remote',
    description: 'We are seeking an exceptional MERN Stack Architect to build scalable cloud backends and high-performance React frontends.',
    responsibilities: [
      'Design RESTful & GraphQL APIs using Node.js and Express.',
      'Optimize MongoDB schema indexes and query execution plans.',
      'Collaborate with UI/UX engineers to integrate Three.js & GSAP visual components.',
      'Mentor junior developers and participate in code reviews.'
    ],
    requirements: [
      '4+ years of professional full-stack development experience.',
      'Deep mastery of React 18, Node.js, Express, and MongoDB.',
      'Strong understanding of web security, JWT, and CORS.',
      'Familiarity with Three.js or GSAP is a major plus.'
    ],
    isActive: true
  },
  {
    title: '3D WebGL & Creative Frontend Developer',
    slug: '3d-webgl-creative-frontend-developer',
    department: 'Design & Graphics',
    designation: '3D Developer',
    experienceLevel: 'Mid-Level',
    location: 'Remote',
    description: 'Join our creative technology team to build mesmerizing WebGL and React Three Fiber visual experiences.',
    responsibilities: [
      'Build interactive 3D heroes, product configurators, and particle shaders.',
      'Optimize 3D GLTF models and Draco compression pipelines.',
      'Implement smooth GSAP ScrollTrigger timelines.'
    ],
    requirements: [
      '2+ years experience with Three.js, React Three Fiber, or GLSL shaders.',
      'Proficiency in React, JavaScript (ES6+), and CSS/Tailwind.',
      'Portfolio showcasing live interactive 3D websites.'
    ],
    isActive: true
  },
  {
    title: 'UI/UX Lead Designer',
    slug: 'ui-ux-lead-designer',
    department: 'Design',
    designation: 'Design Lead',
    experienceLevel: 'Lead',
    location: 'Hybrid / Remote',
    description: 'Shape the visual language and user journey for high-growth enterprise tech clients.',
    responsibilities: [
      'Create high-fidelity Figma prototypes and component design systems.',
      'Conduct user research and usability testing.',
      'Collaborate closely with frontend developers for pixel-perfect handoff.'
    ],
    requirements: [
      '5+ years experience in digital product and web design.',
      'Expertise in Figma, design systems, and micro-interactions.',
      'Strong understanding of responsive design and web accessibility.'
    ],
    isActive: true
  }
];

module.exports = {
  servicesData,
  portfolioData,
  blogData,
  jobsData
};
