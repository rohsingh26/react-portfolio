import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const emailSubject = "Collaboration Inquiry";
  const emailBody = "Hi Rohit, I’d like to discuss...";

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      
      <div className="text-center my-6">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-6 text-sm tracking-tighter text-neutral-400">
          I’m excited to connect with like-minded professionals and explore new opportunities. Let’s chat and see what we can create together!
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
            emailSubject
          )}&body=${encodeURIComponent(emailBody)}`}
          className="mb-10 inline-block px-6 py-3 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-800 transition-colors"
        >
          Send Message
        </a>
      </div>
      
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;