import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Moon, Sun, Github, Linkedin, Twitter, Mail, Phone, MapPin, Code, Globe, ShoppingCart, Smartphone, Database, Palette, Calendar, ExternalLink, Clock, CheckCircle, Users, Building2, Handshake, Instagram, TrendingUp, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const currentYear = new Date().getFullYear();

  // Hero slides data
  const heroSlides = [
    {
      title: "Full-Stack Software Engineer",
      subtitle: "Building Digital Solutions That Drive Success",
      description: "I create modern, scalable web applications and mobile solutions using cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
    },
    {
      title: "React & Node.js Expert",
      subtitle: "Crafting High-Performance Applications",
      description: "Specialized in React, Node.js, and modern JavaScript frameworks for enterprise-level solutions.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Mobile App Developer",
      subtitle: "Cross-Platform Mobile Solutions",
      description: "Creating native and cross-platform mobile applications that deliver exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Tech Trainer & Mentor",
      subtitle: "Empowering the Next Generation",
      description: "Offering private and corporate training in web development, UI/UX, and career-focused tech skills.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Services data
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "SEO optimization, social media marketing, content strategy, and digital advertising campaigns to boost your online presence."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Business intelligence, data visualization, predictive analytics, and insights generation to drive informed decision-making."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust APIs, databases, and server-side solutions using Node.js, Python, and cloud services."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design and prototyping for optimal user experience and interface design."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Technology strategy, code reviews, and technical guidance for your development projects."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate & Private Training",
      description: "Tailored training programs for individuals, teams, and organizations on modern web development, software engineering, and digital tools."
    }
  ];

  // Pricing data
  const pricingPlans = [
    {
      title: "Professional/Corporate Website",
      price: "₦150,000 - ₦300,000",
      features: [
        "Responsive Design",
        "Content Management System",
        "SEO Optimization",
        "Contact Forms",
        "Social Media Integration",
        "Google Analytics",
        "1 Year Support"
      ],
      popular: false
    },
    {
      title: "E-commerce Website",
      price: "₦500,000 - ₦5,000,000",
      features: [
        "Product Catalog",
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Management",
        "Customer Dashboard",
        "Admin Panel",
        "Analytics & Reports"
      ],
      popular: true
    },
    {
      title: "Mobile Application",
      price: "₦300,000 - ₦2,000,000",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Push Notifications",
        "Offline Functionality",
        "App Store Deployment",
        "Backend Integration",
        "User Authentication"
      ],
      popular: false
    },
    {
      title: "Custom Solution",
      price: "Let's Discuss",
      features: [
        "Custom Requirements",
        "Scalable Architecture",
        "Advanced Features",
        "Third-party Integrations",
        "Ongoing Support",
        "Training & Documentation"
      ],
      popular: false,
      isCustom: true
    }
  ];

  // Recent Projects data
  const recentProjects = [
    {
      title: "Tender365 — Business Management Platform",
      client: "Tender365",
      status: "Demo-Testing stage",
      duration: "Demo-Testing stage",
      description: "A full-featured SaaS with POS, inventory management, invoice generation, sales reports, Bill of Quantity, customer management, referral wallet system, and multi-shop support built for Nigerian SMEs.",
      technologies: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL"],
      image: "/images/tender364.png",
      completedDate: "Ongoing",
      url: "http://app.tender365.lightleadachieversacademy.com/"
    },
     {
      title: "Light Lead Achievers Academy",
      client: "Light Lead Achievers Academy",
      status: "completed",
      duration: "2 months",
      description: "Educational platform for a learning institution featuring course listings, admissions management, student resources, news updates, and event management.",
      technologies: ["WordPress", "LMS Plugin", "PHP", "MySQL"],
      image: "/images/lightlead-achievers.png",
      completedDate: "2025",
      url: "https://lightleadachieversacademy.com"
    },
    {
      title: "WirelessNG — Broadband Service Provider",
      client: "WirelessNG",
      status: "completed",
      duration: "2 months",
      description: "Full-stack website for a Nigerian broadband ISP featuring service plans, coverage information, customer portal, and online support.",
      technologies: ["WordPress", "PHP", "CSS3", "MySQL"],
      image: "/images/wirelessng.png",
      completedDate: "2023",
      url: "https://wirelessng.com"
    },
    {
      title: "Naija Restaurant — Food Ordering Platform",
      client: "Naija Restaurant",
      status: "completed",
      duration: "2 months",
      description: "Online food ordering platform for a Nigerian restaurant with menu browsing, cart management, order placement, and an admin panel for order tracking.",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
      image: "/images/Naija Restaurant.png",
      completedDate: "2023",
      url: "https://naijarestaurant.com"
    },
    {
      title: "Alfao Networks — ISP Solutions",
      client: "Alfao Networks",
      status: "completed",
      duration: "1.5 months",
      description: "Corporate website for an ISP solutions company, showcasing internet packages, enterprise services, technical support, and client onboarding.",
      technologies: ["WordPress", "PHP", "Bootstrap", "MySQL"],
      image: "/images/Alfao.png",
      completedDate: "2023",
      url: "https://alfaonetworks.com"
    },
    {
      title: "US Solution Ltd — Oil & Gas & Logistics",
      client: "US Solution Ltd",
      status: "completed",
      duration: "2 months",
      description: "Corporate platform for an Oil & Gas and logistics company with service listings, project portfolio, team profiles, and a client inquiry system.",
      technologies: ["WordPress", "PHP", "MySQL", "CSS3"],
      image: "/images/US Solution-Ltd.png",
      completedDate: "2022",
      url: "https://ussolutionltd.com"
    },
   
    {
      title: "Cnamopr Properties — Real Estate Platform",
      client: "Cnamopr Properties",
      status: "completed",
      duration: "2.5 months",
      description: "A modern real estate platform for a leading property company in Nigeria, featuring property listings, advanced search filters, virtual property tours, agent profiles, mortgage calculator, and a user-friendly inquiry system for buyers, sellers, and renters.",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "Leaflet Maps"],
      image: "/images/cnamoproperties.png",
      completedDate: "2025",
      url: "https://cnamoproperties.com"
    },
    {
      title: "Contact365 — Local Business Directory",
      client: "Test-Page",
      status: "ongoing",
      duration: "3 months",
      description: "A Nigerian local business directory platform enabling users to discover and list businesses by category, location, and industry type.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/images/contact365.png",
      progress: "65%",
      url: "https://www.contact365.cnamoproperties.com"
    },
    {
      title: "AI Job Interview Prep Platform",
      client: "Personal Project",
      status: "ongoing",
      duration: "3 months",
      description: "An AI-powered platform helping job seekers practice and prepare for interviews with role-based question sets, mock sessions, and instant AI feedback.",
      technologies: ["Next.js", "Python", "AI/LLM", "Vercel"],
      image: "/images/interview-prep.png",
      progress: "70%",
      url: "https://interview-prep-lime.vercel.app"
    }
  ];

  // Partners data
  const partners = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Leading technology consulting firm",
      partnership: "Development Partner"
    },
    {
      name: "Digital Marketing Pro",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Full-service digital marketing agency",
      partnership: "Marketing Partner"
    },
    {
      name: "CloudHost Nigeria",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Premium cloud hosting services",
      partnership: "Infrastructure Partner"
    },
    {
      name: "Design Studio Plus",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Creative design and branding agency",
      partnership: "Design Partner"
    },
    {
      name: "FinTech Innovations",
      logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Financial technology solutions provider",
      partnership: "Technology Partner"
    },
    {
      name: "Startup Incubator Hub",
      logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      description: "Supporting emerging tech startups",
      partnership: "Strategic Partner"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Navigation handler
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               Ochei Emeka Melvin
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'services', 'projects', 'partners', 'pricing', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item
                        ? 'bg-blue-600 text-white'
                        : isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'services', 'projects', 'partners', 'pricing', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item
                      ? 'bg-blue-600 text-white'
                      : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 transform translate-y-0 opacity-100 transition-all duration-700">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl mb-6 transform translate-y-0 opacity-100 transition-all duration-700 delay-200">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl mb-8 transform translate-y-0 opacity-100 transition-all duration-700 delay-400">
                    {slide.description}
                  </p>
                  <div className="space-x-4 transform translate-y-0 opacity-100 transition-all duration-700 delay-600">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      View Services
                    </button>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Services</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              I offer comprehensive software development services to help your business thrive in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Projects & Ongoing Work</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Here's a showcase of my recent completed projects and current ongoing work that demonstrates my expertise and commitment to quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {project.status === 'completed' ? (
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Completed
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Ongoing
                        </div>
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {project.client}
                  </p>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      Duration: {project.duration}
                    </div>
                    {project.status === 'ongoing' && project.progress && (
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: project.progress }}
                          ></div>
                        </div>
                      </div>
                    )}
                    {project.completedDate && (
                      <div className="text-sm text-green-600">
                        Completed: {project.completedDate}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live URL Button */}
                  {project.url && project.url !== '#' && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partners & Collaborations</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              I work with amazing partners and organizations to deliver exceptional results. Join our network of collaborative success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{partner.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {partner.partnership}
                    </p>
                  </div>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Partnership CTA */}
          <div className={`p-8 rounded-lg text-center ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="max-w-3xl mx-auto">
              <Handshake className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Interested in Partnership?</h3>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Let's collaborate and create something amazing together. I'm always open to forming strategic partnerships 
                with like-minded professionals and organizations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Joint Ventures</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Collaborate on large-scale projects
                  </p>
                </div>
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Agency Partnerships</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    White-label development services
                  </p>
                </div>
                <div className="text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Tech Partnerships</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Technology integration & consulting
                  </p>
                </div>
              </div>
              
              {/* Partnership Contact Form */}
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-gray-50'} text-left`}>
                <h4 className="text-xl font-semibold mb-4 text-center">Partnership Inquiry</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company/Organization</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-500 text-white placeholder-gray-300'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Partnership Type</label>
                    <select
                      className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-500 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    >
                      <option value="">Select partnership type</option>
                      <option value="joint-venture">Joint Venture</option>
                      <option value="agency">Agency Partnership</option>
                      <option value="tech">Technology Partnership</option>
                      <option value="referral">Referral Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2">Partnership Proposal</label>
                  <textarea
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-500 text-white placeholder-gray-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    placeholder="Tell me about your partnership idea and how we can work together..."
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => alert('Thank you for your partnership interest! I will get back to you within 24 hours.')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Submit Partnership Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Transparent pricing for quality software development services. Choose the package that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-2 border-blue-600 scale-105'
                    : isDarkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : plan.isCustom
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.isCustom ? 'Discuss Project' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Image & About */}
          <div className="text-center mb-16">
            <img
              src="/images/KKK.jpg"
              alt="Ochei Emeka Melvin"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-6 border-4 border-blue-600 shadow-2xl"
            />
            <h3 className="text-3xl font-bold mb-2">Ochei Emeka Melvin</h3>
            <p className={`text-xl mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Full-Stack Software Engineer</p>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate software engineer with expertise in building scalable web applications, 
              mobile apps, and digital solutions. With years of experience in the Nigerian tech ecosystem, 
              I've helped businesses transform their ideas into powerful digital products. 
              Whether you need a corporate website, e-commerce platform, or custom software solution, 
              I'm here to bring your vision to life.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Ready to start your project? Let's discuss your requirements and bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span>ochemeka@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span>+234 806 754 3218</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ochemeka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/therealochemeka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/e.o.melvin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-600 border-gray-500 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Professional/Corporate Website</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="dmarketing">Digital Marketing</option>
                    <option value="danalysis">Data Analysis</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      isDarkMode
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Thank you for your interest! Please contact me directly via email or phone.')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              © {currentYear} Ochei Emeka Melvin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
