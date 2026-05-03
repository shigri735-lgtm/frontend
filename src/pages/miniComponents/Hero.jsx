
// import {
//   Facebook,
//   Github,
//   Instagram,
//   Linkedin,
//   Twitter,
  
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Typewriter } from "react-simple-typewriter";

// import axios from "axios";
// import { motion } from "framer-motion";
// import pic from "../../../public/picofme (3).png";

// const Hero = () => {
//   const [user, setUser] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getMyProfile = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://backend-beta-ruby-13.vercel.app/api/v1/user/portfolio/me",
//           { withCredentials: true },
//         );
//         setUser(data?.user || {});
//       } catch (error) {
//         console.log(error);
//         setUser({});
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMyProfile();
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-full h-64 flex items-center justify-center text-white">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-br  text-white overflow-hidden">
//       {/* BACKGROUND GLOW */}
//       {/* <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] top-10 right-10 rounded-full"></div> */}

//       {/* LEFT SIDE */}
//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="z-10 flex-1"
//       >
//         <p className="text-orange-400 tracking-widest uppercase text-sm mb-3">
//           Aspiring Data Scientist & MERN Stack Developer
//         </p>

//         <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//           {user?.fullName || "I'M Akbar Ali"}
//         </h1>

//         <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
//           <Typewriter
//             words={[
//               "MERN Stack Developer",
//               "Data Scientist",
//               "Machine Learning Engineer",
//               "Python Developer",
//               "Building Predictive Models",
//               "Data Visualization Expert",
//               "Data Analyst",
//               "Video Editor",
//               "Digital Marketer",
//             ]}
//             loop={0}
//             cursor
//             typeSpeed={70}
//             deleteSpeed={40}
//             delaySpeed={1200}
//           />
//         </h2>
//         {/* SOCIAL ICONS (ALWAYS SHOW) */}
//         <div className="mt-6 flex gap-5 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full w-fit">
//           <a
//             href={
//               user?.instagramURL ||
//               "https://www.instagram.com/akbaro_20?igsh=MTZxNXluOThnaWptcw=="
//             }
//             target="_blank"
//             // rel="noreferrer"
//             // onClick={(e) => !user?.instagramURL && e.preventDefault()}
//           >
//             <Instagram className="text-pink-400 hover:scale-110 transition" />
//           </a>

//           <a
//             href={
//               user?.facebookURL || "https://www.facebook.com/share/18swHUPapq"
//             }
//             target="_blank"
//           >
//             <Facebook className="text-blue-500 hover:scale-110 transition" />
//           </a>

//           <a
//             // href={user?.linkedInURL || "https://www.linkedin.com/in/akbaraliduhavi28/"}
//             href="https://www.linkedin.com/in/akbaraliduhavi28/"
//             target="_blank"
//           >
//             <Linkedin className="text-sky-400 hover:scale-110 transition" />
//           </a>

//           <a
//             href={user?.twitterURL || "https://x.com/akbaro_akb33714"}
//             target="_blank"
//             // rel="noreferrer"
//             // onClick={(e) => !user?.twitterURL && e.preventDefault()}
//           >
//             <Twitter className="text-blue-400 hover:scale-110 transition" />
//           </a>

//           <a href="https://github.com/AkbAroG">
//             <Github className="hover:scale-110 transition" />
//           </a>
//         </div>

//         {/* BUTTONS */}
       
//       </motion.div>

//       {/* RIGHT SIDE */}
//       <motion.div
//         initial={{ opacity: 0, x: 60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex-1 flex justify-center items-center relative z-10"
//       >
//         <div className="absolute w-[350px] h-[350px] bg-orange-500/30 blur-[100px] rounded-full"></div>

//         <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] overflow-hidden rounded-2xl border border-orange-400/40 shadow-2xl">
//           <img
//             // src={user?.avatar?.url || {pic}}
//             src={pic}
//             alt="profile"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute top-10 right-10 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
//           Open to Work
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Github 
} from 'lucide-react';
import axios from 'axios';
import pic from "../../../assets/img1.png";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Data Fetching State
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Fallback Data in case the API fails
  const fallbackUser = {
    fullName: "Muhammad M Noori",
    experience: "3",
    avatar: {pic},
    instagramURL: "https://www.instagram.com/",
    facebookURL: "https://www.facebook.com/",
    linkedInURL: "https://www.linkedin.com/",
    twitterURL: "https://twitter.com/",
    githubURL: "https://github.com/"
  };

  const navItems = [
    { label: 'Philosophy', href: '#about' },
    { label: 'Case Studies', href: '#project' },
    { label: 'Services', href: '#myapp' },
    { label: 'Testimonials', href: '#timeline' }
  ];

  // API Fetching Logic with robust error handling
  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-beta-ruby-13.vercel.app/api/v1/user/portfolio/me",
          { withCredentials: true }
        );
        
        if (data && data.user) {
          setUser(data.user);
        } else {
          setUser(fallbackUser);
        }
      } catch (error) {
        console.warn("API call failed, using fallback data:", error.message);
        setUser(fallbackUser);
      } finally {
        setLoading(false);
      }
    };
    getMyProfile();
  }, []);

  const phrases = useMemo(() => [
    "Vanity metrics won't.",
    "Cheap traffic won't.",
    "Wasting ad spend won't.",
    "Hope-based strategies won't.",
    "Predictable growth systems will."
  ], []);

  // Typewriter Logic
  useEffect(() => {
    const currentPhrase = phrases[index];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setDisplayText(currentPhrase.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, phrases]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
        />
        <p className="text-[#a1a1aa] uppercase tracking-widest text-xs">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-white font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Background Ambient Glow (Updated to Blue) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,rgba(10,10,10,0)_70%)] pointer-events-none z-0" />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-50 flex items-center justify-between px-6 py-4 md:px-12 max-w-screen-2xl mx-auto bg-[#02060d]/70 backdrop-blur-xl border-b border-white/10"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif italic tracking-wide"
        >
          {user?.fullName?.split(' ')[0] || "Noori"}.
        </motion.div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#a1a1aa]">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="relative group transition-all duration-300 hover:text-white font-sans">
              <span className="relative z-10">{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a   href="https://wa.me/923312686870" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2.5 border border-white/20 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 font-sans font-medium">
              Book a Call
            </button>
          </a>
        </div>

        <button className="md:hidden text-white p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 md:px-12 max-w-screen-2xl mx-auto pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
          
          {/* Content Left */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-blue-500" />
              <span className="text-blue-500 text-sm font-medium tracking-widest uppercase font-sans">Lead Growth Strategist</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-8xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 min-h-[140px] md:min-h-[160px]">
              Random marketing <br />
              <span className="text-8xl text-[#a1a1aa]">won't scale your brand.</span> <br />
              <div className="min-h-[1.2em] relative">
                <span className="absolute top-0 left-0 text-blue-500 font-serif text-4xl md:text-4xl lg:text-4xl leading-[1.1] whitespace-nowrap">
                  {displayText}
                </span>
                
              </div>
            </motion.h1>

            <motion.div variants={itemVariants} className="border-l-2 border-white/10 pl-6 mb-10 max-w-xl">
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed font-sans">
                Visibility and engagement are the baseline—profitability is the goal. I specialize in bridging the gap between high-reach marketing and measurable business growth. <br/><br/>
                By engineering <span className="text-white font-medium">data-driven performance engines</span>, I ensure every marketing dollar spent is an investment toward sustainable revenue.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <button className="group relative flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium overflow-hidden transition-all active:scale-95 font-sans">
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get a Free Marketing Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              {/* Dynamic Social Icons (Updated to Blue) */}
              {/* <div className="flex gap-5 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
                <a href={user?.instagramURL || "https://www.instagram.com/"} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <Instagram size={18} className="text-blue-500" />
                </a>
                <a href={user?.facebookURL || "https://www.facebook.com/"} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <Facebook size={18} className="text-blue-500" />
                </a>
                <a href={user?.linkedInURL || "https://www.linkedin.com/"} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <Linkedin size={18} className="text-blue-500" />
                </a>
                <a href={user?.twitterURL || "https://twitter.com/"} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <Twitter size={18} className="text-blue-500" />
                </a>
                <a href={user?.githubURL || "https://github.com/"} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <Github size={18} className="text-blue-500" />
                </a>
              </div> */}
            </motion.div>

            {/* Trust Metrics */}
            <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-2xl">
                <div>
                    <p className="text-3xl font-serif mb-1">Direct</p>
                    <p className="text-xs text-[#a1a1aa] uppercase tracking-wider font-sans">Expert Communication</p>
                </div>
                <div>
                    <p className="text-3xl font-serif mb-1 text-blue-500">{user?.experience || "3"}+ Years</p>
                    <p className="text-xs text-[#a1a1aa] uppercase tracking-wider font-sans">Marketing Expertise</p>
                </div>
                <div className="hidden md:block">
                    <p className="text-3xl font-serif mb-1">Elite</p>
                    <p className="text-xs text-[#a1a1aa] uppercase tracking-wider font-sans">Tailored Execution</p>
                </div>
            </motion.div>
          </motion.div>

          {/* Image Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="lg:col-span-5 relative h-[500px] lg:h-[80vh] w-full mt-10 lg:mt-0"
          >
              <div className="w-full h-full relative rounded-2xl overflow-hidden group" style={{
                  maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}>
                <img 
                  src={pic} 
                  alt="Lead Strategist"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
                
                <div className="absolute bottom-10 left-8 z-20 font-sans">
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                        <p className="text-sm font-medium text-white">Hi, I'm {user?.fullName || "Akbar Ali"} 👋</p>
                        <p className="text-xs text-blue-500 font-semibold uppercase tracking-widest">Growth Expert</p>
                    </div>
                </div>
              </div>
          </motion.div>

        </div>
      </main>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-[#02060d] p-6 flex flex-col font-serif"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-xl italic tracking-wide">{user?.fullName?.split(' ')[0] || "Noori"}.</div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 text-4xl">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500 transition-colors duration-300">{item.label}</a>
              ))}
            </div>
            <div className="mt-auto w-full">
              <button className="w-full border border-white/20 text-white py-5 rounded-full text-xl mt-8 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 font-sans font-medium">
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Hero;