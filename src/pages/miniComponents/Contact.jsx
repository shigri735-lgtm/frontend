// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import axios from "axios";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [senderName, setSenderName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleMessage = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     await axios
//       .post(
//         "https://backend-beta-ruby-13.vercel.app/api/v1/message/send",
//         { senderName, subject, message },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       )
//       .then((res) => {
//         toast.success(res.data.message);
//         setSenderName("");
//         setSubject("");
//         setMessage("");
//         setLoading(false);

//         // success animation
//         setSuccess(true);
//         setTimeout(() => setSuccess(false), 2000);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="overflow-x-hidden relative">

//       {/* SUCCESS POPUP */}
//       {success && (
//         <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-black/80 border border-green-500 text-green-400 px-6 py-3 rounded-xl shadow-lg animate-bounce z-50">
//           ✅ Message Sent Successfully
//         </div>
//       )}

//       {/* TITLE */}
//       <div className="relative mb-10 text-center">
//         <h1 className="flex gap-4 items-center text-[1.85rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3rem] tracking-[15px] mx-auto w-fit font-extrabold about-h1">
//           CONTACT <span className="text-orange-500">ME</span>
//         </h1>
//         <span className="absolute w-full h-1 top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
//       </div>

//       {/* FORM WRAPPER */}
//       <div className="flex justify-center">
//         <form
//           onSubmit={handleMessage}
//           className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-6 md:p-10 shadow-lg space-y-6"
//         >

//           {/* NAME */}
//           <div className="space-y-2">
//             <Label className="text-white">Your Name</Label>
//             <Input
//               value={senderName}
//               onChange={(e) => setSenderName(e.target.value)}
//               placeholder="Enter your name"
//               className="bg-black/30 border-orange-400/20 text-white focus:border-orange-500"
//             />
//           </div>

//           {/* SUBJECT */}
//           <div className="space-y-2">
//             <Label className="text-white">Subject</Label>
//             <Input
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               placeholder="Enter subject"
//               className="bg-black/30 border-orange-400/20 text-white focus:border-orange-500"
//             />
//           </div>

//           {/* MESSAGE */}
//           <div className="space-y-2">
//             <Label className="text-white">Message</Label>
//             <Input
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Write your message"
//               className="bg-black/30 border-orange-400/20 text-white focus:border-orange-500"
//             />
//           </div>

//           {/* 3D BUTTON */}
//           <div className="pt-2">
//             {!loading ? (
//               <button
//                 type="submit"
//                 className="w-full py-3 font-bold text-white rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-[0_6px_0_#c2410c] active:translate-y-1 active:shadow-none transition-all duration-150 hover:scale-[1.02]"
//               >
//                 Send Message ✉
//               </button>
//             ) : (
//               <button
//                 disabled
//                 className="w-full py-3 font-bold text-white rounded-xl bg-gray-500 cursor-not-allowed"
//               >
//                 Sending...
//               </button>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* ANIMATION */}
//       <style>
//         {`
//           @keyframes pop {
//             0% { transform: scale(0.5); opacity: 0; }
//             100% { transform: scale(1); opacity: 1; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { 
  Mail, 
  ThumbsUp, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Video,
  PenTool
} from "lucide-react";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post(
        "https://backend-beta-ruby-13.vercel.app/api/v1/message/send",
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        // Keep your original toast logic
        if (typeof toast !== 'undefined' && toast.success) {
            toast.success(res.data.message);
        }
        setSenderName("");
        setSubject("");
        setMessage("");
        setLoading(false);

        // success animation
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => {
        if (typeof toast !== 'undefined' && toast.error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen w-screen relative overflow-hidden text-white font-sans px-6 py-8 md:px-10 md:py-12">
      <div className="absolute inset-0 -z-10 backdrop-blur-lg" />
      
      
      


      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-blue-600/90 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl shadow-2xl animate-[bounce_1s_ease-in-out_infinite] z-50 font-medium flex items-center gap-3">
          <div className="bg-white/20 p-1 rounded-full">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          Message Sent Successfully!
        </div>
      )}

      {/* MAIN CONTENT FULL WIDTH */}
      <div className="relative z-10 w-full">
        <div className="mb-10 max-w-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-blue-500 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 font-medium max-w-4xl">
            If you have any inquiries or just want to say hi, please use the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">
          <div className="w-full flex flex-col justify-between gap-10">
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-white mb-4">Let's build something together.</p>
              <p className="text-base md:text-lg text-blue-100/90 leading-relaxed">
                Send your message and I will get back to you as soon as possible. This layout is full width, not centered in a narrow card.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-white font-medium hover:text-blue-300 transition-colors w-fit cursor-pointer">
                <Mail className="w-5 h-5" />
                <span className="border-b border-white/30 pb-0.5">muslimnoori666@gmail.com</span>
              </div>

              <div className="flex items-center gap-5 text-white">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="w-full">
            <form onSubmit={handleMessage} className="space-y-10 w-full">
              
              {/* Top Row: Name and Subject in one line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-blue-200">First Name</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white/40 text-white px-1 py-2 focus:outline-none focus:border-white transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-blue-200">Subject</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white/40 text-white px-1 py-2 focus:outline-none focus:border-white transition-all"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1 relative pt-4">
              <label className="text-sm font-medium text-blue-200 absolute top-0 left-0">Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-transparent border-b-2 border-white/40 text-white px-1 py-2 focus:outline-none focus:border-white transition-all resize-none rounded-none mt-2"
              />
            </div>

            {/* Submit Button aligned to right */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`px-12 py-3.5 font-bold tracking-wide transition-all duration-300 rounded-lg ${
                  loading 
                    ? "bg-blue-500/30 text-white cursor-not-allowed" 
                    : "bg-blue-500 text-blue-900 hover:bg-blue-50 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                }`}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>

          </form>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Contact;