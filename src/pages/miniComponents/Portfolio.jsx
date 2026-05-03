
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const filters = [
//   { name: "All", icon: "🌐" },
//   { name: "MERN", icon: "⚛️" },
//   { name: "Data Science", icon: "🤖" },
// ];

// const Portfolio = () => {
//   const [viewAll, setViewAll] = useState(false);
//   const [projects, setProjects] = useState([]);
//   // const [skills, setSkills] = useState([]);
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     const getMyProjects = async () => {
//       const { data } = await axios.get(
//         "https://backend-beta-ruby-13.vercel.app/api/v1/project/getall",
//         { withCredentials: true }
//       );
//       setProjects(data.projects);
//     };

//     // const getMySkills = async () => {
//     //   const { data } = await axios.get(
//     //     "http://localhost:4000/api/v1/skill/getall",
//     //     { withCredentials: true }
//     //   );
//     //   // setSkills(data.skills);
//     // };

//     getMyProjects();
//     // getMySkills();
//   }, []);

//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter((p) =>
//           p.category?.toLowerCase().includes(filter.toLowerCase())
//         );

//   return (
//     <div className="w-full px-6 md:px-12 py-20  text-white">

//       <div className="text-center mb-16">
//         <p className="uppercase text-xs tracking-[6px] text-orange-400 mb-2">
//          ✦ My Work
//       </p>
//          <h1 className="text-4xl md:text-5xl font-extrabold">
//           My <span className="text-orange-500">Projects</span>
//         </h1>
//       </div>

//       {/* FILTER */}
//       <div className="flex justify-center gap-3 mb-10 flex-wrap">
//         {filters.map((item) => {
//           const isActive = filter === item.name;

//           return (
//             <motion.button
//               key={item.name}
//               onClick={() => setFilter(item.name)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border transition
//                 ${
//                   isActive
//                     ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(255,140,0,0.5)] border-orange-400"
//                     : "border-orange-400 text-orange-400"
//                 }`}
//             >
//               <span>{item.icon}</span>
//               {item.name}
//             </motion.button>
//           );
//         })}
//       </div>

//       {/* PROJECT CARDS (NEW DESIGN) */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {(viewAll ? filteredProjects : filteredProjects.slice(0, 9)).map(
//           (element) => (
//             <Link to={`/project/${element._id}`} key={element._id}>

//               <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,140,0,0.2)]">

//                 {/* IMAGE */}
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={element.projectBanner && element.projectBanner.url}
//                     alt={element.title}
//                     className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

//                 {/* CONTENT */}
//                 <div className="p-4 relative">

//                   {/* TAG */}
//                   <span className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-400/30">
//                     {element.category || "Project"}
//                   </span>

//                   {/* TITLE */}
//                   <h3 className="mt-3 text-lg font-semibold group-hover:text-orange-400 transition">
//                     {element.title}
//                   </h3>

//                   {/* BUTTONS PREVIEW */}
//                   <div className="mt-4 flex gap-2">
//                     <div className="flex-1 text-center text-xs py-2 rounded-md bg-orange-500 text-white">
//                       Live Demo
//                     </div>
//                     <div className="flex-1 text-center text-xs py-2 rounded-md border border-orange-400 text-orange-400">
//                       GitHub
//                     </div>
//                   </div>

//                 </div>
//               </div>

//             </Link>
//           )
//         )}
//       </div>

//       {/* SHOW MORE */}
//       {filteredProjects.length > 9 && (
//         <div className="w-full text-center my-9">
//           <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
//             {viewAll ? "Show Less" : "Show More"}
//           </Button>
//         </div>
//       )}

//       {/* SKILLS */}
//       {/* <div className="relative mb-12 mt-16 text-center">
//         <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] font-extrabold">
//           MY <span className="text-tubeLight-effect font-extrabold">SKILLS</span>
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {skills.map((element) => (
//           <div key={element._id} className="flex flex-col items-center p-4 border rounded-lg">
//             <img
//               src={element.svg && element.svg.url}
//               alt={element.title}
//               className="w-16 h-16 mb-2"
//             />
//             <h3 className="text-lg font-semibold">{element.title}</h3>
//             <p className="text-sm text-gray-400">{element.proficiency}</p>
//           </div>
//         ))}
//       </div> */}

//     </div>
//   );
// };

// export default Portfolio;


// import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const filters = [
  { name: "All", icon: "🌐" },
  { name: "Mate Ads", icon: "⚛️" },
  { name: "Google Ads", icon: "🤖" },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const fallbackProjects = [
    {
      _id: "p-1",
      title: "Product Launch Campaign",
      description: "Designed a growth engine for faster user acquisition and stronger conversion.",
      category: "Mate Ads",
      projectBanner: { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" },
      githubUrl: "https://github.com/"
    },
    {
      _id: "p-2",
      title: "Data Intelligence Dashboard",
      description: "Visualized performance metrics for quick stakeholder decision-making.",
      category: "Google Ads",
      projectBanner: { url: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=1200&q=80" },
      githubUrl: "https://github.com/"
    }
  ];

  useEffect(() => {
    const getMyProjects = async () => {
      try {
        const { data } = await axios.get(
          "https://backend-beta-ruby-13.vercel.app/api/v1/project/getall",
          { withCredentials: true }
        );
        setProjects(data.projects || fallbackProjects);
      } catch (error) {
        console.warn("Project fetch failed, using fallback projects", error.message);
        setProjects(fallbackProjects);
      }
    };
    getMyProjects();
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.category?.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section id="project" className="relative min-h-screen overflow-hidden text-white px-6 md:px-12 py-20">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',backgroundSize:'60px 60px'}} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase text-xs tracking-[6px] text-sky-400 mb-2 font-sans">✦ My Work</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold">
            My <span className="text-sky-500">Projects</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A simple portfolio grid with clean white borders, blue accents, and classic layout.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((item) => (
            <motion.button
              key={item.name}
              type="button"
              onClick={() => { setFilter(item.name); setActiveIndex(0); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                filter === item.name
                  ? 'border-sky-500 bg-sky-500/20 text-white shadow-[0_0_25px_rgba(56,189,248,0.25)]'
                  : 'border-white/10 text-slate-300 hover:border-sky-500 hover:text-white'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-serif">{item.name}</span>
            </motion.button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <motion.div
            key="no-projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 p-14 text-center shadow-2xl"
          >
            <p className="text-sky-500 uppercase tracking-[0.35em] mb-3 text-sm font-semibold">No projects found</p>
            <h2 className="text-3xl font-serif font-semibold text-white mb-3">No {filter} Projects Yet</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Try another filter or check back later for new work.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((element, index) => (
              <motion.div
                key={element._id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/90 shadow-2xl transition-all duration-300 ${
                  activeIndex === index ? 'border-sky-500 shadow-[0_0_40px_rgba(56,189,248,0.2)]' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={element.projectBanner?.url}
                    alt={element.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="relative p-6">
                  <span className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-sky-300">
                    {element.category || 'Project'}
                  </span>
                  <h3 className="mt-5 text-2xl font-serif font-semibold text-white">{element.title}</h3>
                  <p className="mt-3 text-sm text-gray-400 leading-7 line-clamp-3">
                    {element.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={element.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-sky-200 transition hover:bg-sky-500/20"
                    >
                      <Github size={18} /> GitHub
                    </a>
                    <Link
                      to={`/project/${element._id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
                    >
                      View <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
