import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  const fallbackApps = [
    { _id: "app-1", name: "Campaign Hub", svg: { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&q=80" } },
    { _id: "app-2", name: "Growth Tracker", svg: { url: "https://images.unsplash.com/photo-1523475496153-3d6cc4a1f7e2?auto=format&fit=crop&w=200&q=80" } },
    { _id: "app-3", name: "Insight Board", svg: { url: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=200&q=80" } },
    { _id: "app-4", name: "Ad Optimizer", svg: { url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=80" } }
  ];

  useEffect(() => {
    getApps();
  }, []);

  const getApps = async () => {
    try {
      const { data } = await axios.get(
        "https://backend-beta-ruby-13.vercel.app/api/v1/softwareapplication/getall",
        { withCredentials: true }
      );
      setApps(data.softwareApplications || fallbackApps);
    } catch (error) {
      console.warn("MyApps fetch failed, using fallback apps", error.message);
      setApps(fallbackApps);
    }
  };

  // 💾 SAVE ORDER TO BACKEND
  const saveOrder = async (newOrder) => {
    try {
      await axios.post(
        "https://backend-beta-ruby-13.vercel.app/api/v1/softwareapplication/reorder",
        { apps: newOrder },
        { withCredentials: true }
      );
    } catch (error) {
      console.warn("Unable to save app order due to network/CORS", error.message);
    }
  };

  // 🔥 DRAG HANDLER
  const handleDragEnd = (fromIndex, toIndex) => {
    const updated = [...apps];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);

    setApps(updated);
    saveOrder(updated.map((a) => a._id));
  };

  return (
    <div id="myapp" className="w-full flex flex-col gap-8 py-10">

      {/* TITLE */}
      <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] font-serif font-extrabold mx-auto text-sky-500">
        <span className="text-white">My</span> Services
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">

        {apps.map((app, index) => (
          <motion.div
            key={app._id}
            layout
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}

            onDragEnd={() => handleDragEnd(index, index)}

            whileHover={{
              scale: 1.08,
              rotateY: 10,
              rotateX: 10,
            }}

            style={{ perspective: 1000 }}
          >

            <Card
              className="relative p-5 flex flex-col items-center gap-3
              bg-white/5 border border-white/10 backdrop-blur-lg
              hover:border-sky-500 transition"
              onClick={() => setSelectedApp(app)}
            >

              {/* ICON */}
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <img
                  src={app.svg?.url}
                  className="h-14 sm:h-20"
                />
              </motion.div>

              <p className="font-serif text-white text-sm">{app.name}</p>

            </Card>

          </motion.div>
        ))}

      </div>

      {/* 🔵 MODAL */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#0b0f19] p-6 rounded-xl border border-sky-500 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedApp.svg?.url}
                className="h-20 mx-auto mb-3"
              />

              <h2 className="text-white text-lg">
                {selectedApp.name}
              </h2>

              <button
                className="mt-4 px-4 py-1.5 bg-sky-500 text-white rounded"
                onClick={() => setSelectedApp(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MyApps;