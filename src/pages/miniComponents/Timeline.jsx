import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://backend-beta-ruby-13.vercel.app";

  useEffect(() => {
    const getMyTimeline = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/timeline/getall`, {
          withCredentials: true,
        });

        const timelineData = response?.data?.timelines;
        if (Array.isArray(timelineData)) {
          setTimeline(timelineData);
          setError("");
        } else {
          setTimeline([]);
          setError("Backend returned an unexpected review format.");
        }
      } catch (fetchError) {
        console.warn("Timeline fetch failed:", fetchError.message);
        setTimeline([]);
        setError("Unable to load backend reviews. Check the backend connection.");
      } finally {
        setLoading(false);
      }
    };
    getMyTimeline();
  }, [backendUrl]);

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="timeline" className="w-full px-6 md:px-12 py-20 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.35em] text-sky-400 font-medium"
          >
            Testimonials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-3xl md:text-5xl font-extrabold mt-4"
          >
            Client <span className="text-sky-500">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            These cards are pulled from backend review data, with animated UI states for a polished, interactive experience.
          </motion.p>
        </div>

        {loading ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 text-center shadow-xl"
          >
            <div className="mx-auto mb-4 h-12 w-12 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" />
            <p className="text-gray-300">Loading reviews from backend...</p>
          </motion.div>
        ) : (
          <>
            {error ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-red-100"
              >
                {error}
              </motion.div>
            ) : null}

            {timeline.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-gray-300"
              >
                No client reviews are available yet. Once backend data is published, it will appear here.
              </motion.div>
            ) : (
              <div className="relative">
                <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

                {timeline.map((element, index) => {
                  const isLeft = index % 2 === 0;
                  const clientName = element.clientName || element.title || "Client";
                  const reviewText = element.review || element.description || "No review text available.";
                  const company = element.company || element.timeline?.from || "";
                  const role = element.role || element.timeline?.to || "";
                  const duration = element.timeline?.from && element.timeline?.to ? `${element.timeline.from} — ${element.timeline.to}` : "";

                  return (
                    <motion.div
                      key={element._id}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.4 }}
                      className={`mb-12 flex w-full ${isLeft ? "justify-start" : "justify-end"} relative`}
                    >
                      <div className={`relative w-full md:w-[45%] ${isLeft ? "text-left" : "text-right"}`}>
                        <div className="absolute -right-8 top-6 hidden h-20 w-0.5 bg-gradient-to-b from-sky-500 to-transparent md:block" />
                        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl backdrop-blur-xl hover:border-sky-500 transition duration-300">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
                              <Quote size={20} />
                            </span>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{clientName}</h3>
                              <p className="text-sm text-sky-400">
                                {company}{company && role ? " • " : ""}{role}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-7 text-sm md:text-base">{reviewText}</p>
                          {duration ? (
                            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gray-500">
                              {duration}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <span className="absolute left-1/2 top-10 z-10 -translate-x-1/2 h-5 w-5 rounded-full border-4 border-[#0b0f19] bg-sky-500 shadow-[0_0_0_12px_rgba(56,189,248,0.12)]" />
                    </motion.div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Timeline;