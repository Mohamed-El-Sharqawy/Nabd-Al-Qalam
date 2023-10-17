import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Activity = ({ activity }) => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1.5 },
      }}
      viewport={{ once: true }}
      className="activity"
    >
      <h4>{lang === "en" ? activity?.en : activity?.ar}</h4>
      <Link to="/books">{lang === "en" ? "Shop Now" : "تسوق الأن"}</Link>
    </motion.div>
  );
};

export default Activity;
