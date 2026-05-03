
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
import React, { useEffect, useState } from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Quote,
  ArrowUpRight,
  Megaphone,
  Sparkles,
  Rocket,
  Smartphone
} from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";
import picture from "../../../assets/img1.png"

// Fallback image if the local import fails in the preview environment
const fallbackPic = {picture};


// Extracted words array to prevent recreation on every render
const TYPED_WORDS = [
  "Digital Marketer",
  "Performance marketer",
  "Ads Specialist",
  "Social Media Manager",
  "PPC Expert",
  "Brand & Marketer",
  "Creative Strategist",
  "Content Creator",
  "Growth Hacker",
  "Marketing Enthusiast",
  
];

// Custom Typewriter Hook to replace the missing external library
const useTypewriter = (words, typingSpeed = 70, deletingSpeed = 40, delay = 1500) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Avoid running the effect if words array is empty or undefined
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex];
    let timeoutId;

    if (isDeleting) {
      timeoutId = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeoutId = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          timeoutId = setTimeout(() => setIsDeleting(true), delay);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return text;
};

const Hero = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  
  // HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL EARLY RETURNS
  const typedText = useTypewriter(TYPED_WORDS);

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-beta-ruby-13.vercel.app/api/v1/user/portfolio/me",
          { withCredentials: true }
        );
        setUser(data?.user || {});
      } catch (error) {
        console.log(error);
        setUser({});
      } finally {
        setLoading(false);
      }
    };

    getMyProfile();
  }, []);

  // Early return comes AFTER all hooks (useState, useEffect, useTypewriter)
  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center  text-white font-['Inter']">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#3b82f6] border-t-transparent rounded-full mb-4"
        />
        <p className="font-medium tracking-widest text-sm uppercase text-zinc-400">Loading Profile...</p>
      </div>
    );
  }

  const name ="Muhamd M Noori";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  const floatingVariants = (delay = 0, yOffset = 15) => ({
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay },
    },
    float: {
      y: [0, -yOffset, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section className="relative  min-h-screen  text-white overflow-hidden flex flex-col items-center justify-center py-16 px-4 md:px-8 font-sans">
      {/* CSS for Background Noise & Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
          section {
            font-family: 'Inter', sans-serif;
          }
          .bg-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }
          .custom-outline {
            filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.1)) drop-shadow(0px 10px 20px rgba(0,0,0,0.5));
          }
        `}
      </style>
      <div className="bg-noise"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center"
      >
        {/* Top Hello Badge */}
        <motion.div variants={itemVariants} className="mb-6 relative">
          <div className="px-6 py-2 border border-zinc-700 rounded-full text-sm font-medium tracking-wide bg-[#1A1A1A]/50 backdrop-blur-sm text-zinc-300">
            Hello!
          </div>
            
          {/* Decorative lines */}
          <svg className="absolute -left-12 top-4 w-8 h-8 text-[#3b82f6] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 5L10 10M2 12H8M5 19L10 14" />
          </svg>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="text-center z-20">
          <h1 className="text-4xl md:text-[80px] font-black tracking-tight text-white flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 leading-none">
            <span>I'm {name}</span>
          
            <span className="hidden md:inline text-white">,</span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-extrabold mt-4 text-white tracking-tight leading-none">
            {" "}
            <span className="text-[#3b82f6]">
              {typedText}
              <span className="text-[#3b82f6] animate-pulse font-normal ml-1">|</span>
            </span>
          </h2>
        </motion.div>

        {/* Center Illustration Area */}
        <div className="relative w-full max-w-4xl mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-center">
          
          {/* Left Content (Desktop: Absolute, Mobile: Stacked) */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-auto md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-20 mb-8 md:mb-0 px-6 md:px-0 text-center md:text-left max-w-[280px]"
          >
            <Quote className="w-8 h-8 text-zinc-600 mb-4 mx-auto md:mx-0 fill-current opacity-40" />
            <p className="text-white md:text-lg text-zinc-400 font-medium leading-relaxed tracking-wide">
              working closely with <span className="text-white font-bold">{name}</span>, and I can confidently say he is an exceptional professional and strategist.
            </p>
          </motion.div>

          {/* Core Image & Shapes */}
          <div className="relative flex justify-center items-end h-[350px] md:h-[450px] w-full max-w-[350px] md:max-w-[450px] z-10">
            {/* Blue Semi Circle */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
              className="absolute bottom-0 w-full h-[70%] md:h-[75%] bg-[#3b82f6] rounded-t-full shadow-inner"
            ></motion.div>

            {/* Profile Image */}
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
              src={user?.avatar?.url || fallbackPic}
              alt={name}
              className="relative z-10 w-[85%] md:w-[90%] h-auto max-h-[120%] object-cover object-bottom custom-outline pointer-events-none"
            />

            {/* Floating Badges */}
            <motion.div
              variants={floatingVariants(0.2, 10)}
              initial="hidden"
              animate={["show", "float"]}
              className="absolute top-10 md:top-20 -left-6 md:-left-12 bg-[#1A1A1A] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 shadow-xl z-20 whitespace-nowrap border border-white/10"
            >
              <Megaphone className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
              <span className="font-semibold text-sm md:text-base tracking-wide">Marketing</span>
            </motion.div>

            <motion.div
              variants={floatingVariants(0.5, 15)}
              initial="hidden"
              animate={["show", "float"]}
              className="absolute top-70 md:top-82 -left-4 md:-left-8 bg-[#1A1A1A] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 shadow-xl z-20 whitespace-nowrap border border-white/10"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="font-semibold  text-sm md:text-base tracking-wide">Branding</span>
            </motion.div>

            <motion.div
              variants={floatingVariants(0.8, 12)}
              initial="hidden"
              animate={["show", "float"]}
              className="absolute top-20 md:top-32 -right-4 md:-right-8 bg-[#1A1A1A] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 shadow-xl z-20 whitespace-nowrap border border-white/10"
            >
              <Rocket className="w-4 h-4 md:w-5 md:h-5 text-[#3b82f6]" />
              <span className="font-semibold text-sm md:text-base tracking-wide">Ads</span>
            </motion.div>

            <motion.div
              variants={floatingVariants(1.1, 8)}
              initial="hidden"
              animate={["show", "float"]}
              className="absolute bottom-10 md:bottom-20 -right-8 md:-right-16 bg-[#1A1A1A] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 shadow-xl z-20 whitespace-nowrap border border-white/10"
            >
              <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="font-semibold text-sm md:text-base tracking-wide">Social Media</span>
            </motion.div>
          </div>

          {/* Right Content (Desktop: Absolute, Mobile: Stacked) */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-auto md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 mt-8 md:mt-0 text-center md:text-right max-w-[200px]"
          >
            <h3 className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">
              {user?.experience || "3"} <span className="text-2xl md:text-3xl text-[#3b82f6]">Years</span>
            </h3>
            <p className="text-sm md:text-base text-zinc-400 font-medium tracking-wide">
              in Digital Marketing & Performance Marketing
            </p>
          </motion.div>

        </div>

        {/* Bottom Actions */}
        <motion.div variants={itemVariants} className="mt-12 md:mt-16 flex flex-col items-center gap-8 z-30 relative">
          
          {/* Toggle-style Buttons */}
          <div className="bg-[#1A1A1A] p-1.5 rounded-full flex items-center shadow-2xl border border-white/10">
            <a 
              href="#portfolio"
              className="bg-[#3b82f6] text-white px-6 md:px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#2563eb] transition-colors"
            >
              Portfolio <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="text-zinc-300 px-6 md:px-8 py-3 rounded-full font-semibold hover:text-white transition-colors"
            >
              Hire me
            </a>
          </div>

          {/* Social Icons mapped from API directly like your original code */}
          <div className="flex gap-4 md:gap-6 bg-[#1A1A1A]/60 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-700 shadow-sm">
            <a href={user?.instagramURL || "https://www.instagram.com/"} target="_blank" rel="noreferrer" className="group">
              <div className="bg-[#2A2A2A] p-2 rounded-full shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Instagram className="w-5 h-5 text-pink-400" />
              </div>
            </a>
            <a href={user?.facebookURL || "https://www.facebook.com/"} target="_blank" rel="noreferrer" className="group">
              <div className="bg-[#2A2A2A] p-2 rounded-full shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Facebook className="w-5 h-5 text-blue-400" />
              </div>
            </a>
            <a href={user?.linkedInURL || "https://www.linkedin.com/"} target="_blank" rel="noreferrer" className="group">
              <div className="bg-[#2A2A2A] p-2 rounded-full shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Linkedin className="w-5 h-5 text-sky-400" />
              </div>
            </a>
            <a href={user?.twitterURL || "https://twitter.com/"} target="_blank" rel="noreferrer" className="group">
              <div className="bg-[#2A2A2A] p-2 rounded-full shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </div>
            </a>
            <a href={user?.githubURL || "https://github.com/"} target="_blank" rel="noreferrer" className="group">
              <div className="bg-[#2A2A2A] p-2 rounded-full shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Github className="w-5 h-5 text-zinc-300" />
              </div>
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;