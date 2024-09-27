import { motion } from "framer-motion";

const MobileSection = () => {
  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/vid.mp4"
        autoPlay
        loop
        muted
      ></video>
    </motion.div>
  );
};

export default MobileSection;
