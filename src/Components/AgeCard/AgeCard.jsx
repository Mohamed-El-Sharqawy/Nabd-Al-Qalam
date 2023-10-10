import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";

const AgeCard = ({ card }) => {
  const { lang } = useSelector((state) => state.lang);
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = (href) => {
    navigate("books");
    setSearchParams((prev) => {
      prev.set("group", href);
      return prev;
    });

    // window.history.pushState(null, null, href);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.75, delay: 0.4 * (card.id - 1) },
      }}
      className={`${lang === "en" ? "age-card" : "age-card-reverse"}`}
    >
      <div className="content">
        <p dir={lang === "en" ? "ltr" : "rtl"}>
          {lang === "en"
            ? "Books appropriate for every class"
            : "كتب مناسبة لكل فئة"}
        </p>
        <h3 dir={lang === "en" ? "ltr" : "rtl"}>
          {lang === "en" ? card.enAge : card.arAge}
        </h3>
        <button
          style={
            lang === "en" ? { marginRight: "auto" } : { marginLeft: "auto" }
          }
          dir={lang === "en" ? "ltr" : "rtl"}
          onClick={() => handleClick(card?.enAge)}
        >
          Browse Books
        </button>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: { duration: 1, delay: 0.5 * card.id - 1 },
        }}
      >
        <img src={card.img} alt="age group" />
      </motion.div>
    </motion.div>
  );
};

export default AgeCard;
