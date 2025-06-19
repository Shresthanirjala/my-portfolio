import React, { useEffect } from "react";
import { Link } from "react-scroll";

const About = () => {
  useEffect(() => {
    // Particle animation
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    "React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Node.js", 
    "Express", "UI/UX Design", "GitHub", "Next.js", "MongoDB", 
    "API Development"
  ];

  const achievements = [
    {
      id: 1,
      image: "hackathon1.jpg",
      title: "himalAi 2024",
      description: "Top 4 finalist in AI innovation hackathon",
      date: "April 2025",
      award: "Top 4 Finalist",
    },
    {
      id: 2,
      image: "Hackathon2.JPG",
      title: "Sui Hacker House",
      description: "AI Track Winner for platform development",
      date: "April 2025",
      award: "AI Track Winner",
    },
  ];

  return (
    <div id="about" className="relative min-h-screen text-white py-20 overflow-hidden">
      {/* Particle canvas for subtle background */}
      <canvas id="particle-canvas" className="absolute inset-0 z-0" />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-0"></div>
      
      {/* Professional geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl z-0"></div>
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
        
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer passionate about creating digital solutions that inspire and empower users
          </p>
        </div>

       
        {/* Skills, Experience & Education - Three Column Layout */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Skills Column */}
            <div className="bg-gray-800/20 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Skills</h2>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group bg-gray-800/40 backdrop-blur-sm border border-indigo-500/30 rounded-lg px-3 py-2 hover:border-indigo-400/50 transition-all duration-300 hover:bg-gray-700/40"
                  >
                    <span className="text-gray-200 font-medium text-sm group-hover:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="bg-gray-800/20 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Experience</h2>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    period: "2025 - Present",
                    role: "Web Developer",
                    company: "Clothing In Nepal",
                    description: "Leading development of responsive e-commerce solutions.",
                    technologies: ["React", "Node.js", "MongoDB"],
                  },
                  {
                    period: "2024",
                    role: "Full-Stack Developer Intern",
                    company: "N9 Solution",
                    description: "Collaborated on enterprise-level projects.",
                    technologies: ["MERN Stack", "API Development"],
                  },
                ].map((job, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-xl p-5 border border-indigo-500/20">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-white mb-1">{job.role}</h3>
                      <p className="text-indigo-300 font-medium text-sm">{job.company}</p>
                      <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded mt-1 inline-block">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {job.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="px-2 py-1 text-xs bg-indigo-600/20 text-indigo-300 rounded border border-indigo-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="bg-gray-800/20 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-6">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    period: "2021 - Present",
                    degree: "Bachelor in Computer Application",
                    institution: "Jaya Multiple Campus",
                    description: "Computer science fundamentals and web development.",
                    status: "Currently Pursuing"
                  },
                  {
                    period: "2019 - 2021",
                    degree: "Higher Secondary Education (+2)",
                    institution: "Indreswori Secondary School",
                    description: "Business studies and mathematics specialization.",
                    status: "Completed"
                  },
                ].map((edu, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-xl p-5 border border-indigo-500/20">
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          edu.status === 'Currently Pursuing' 
                            ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                            : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-indigo-300 font-medium text-sm mb-1">{edu.institution}</p>
                      <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <div className="bg-gray-800/20 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-white">Achievements</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-sm opacity-60"></div>
                        <span className="relative px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg border border-white/20">
                          {achievement.award}
                        </span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 text-sm font-medium bg-gray-900/80 backdrop-blur-sm text-indigo-300 rounded-lg border border-indigo-500/30">
                        {achievement.date}
                      </span>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-indigo-400/50 rounded-tl-2xl"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    
                    <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-800/20 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and turn your ideas into digital reality. I'm always excited to work on new challenges.
            </p>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Let's Work Together
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;