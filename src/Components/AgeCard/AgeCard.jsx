import { useSelector } from "react-redux";

const AgeCard = ({ card }) => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <div className={`${lang === "en" ? "age-card" : "age-card-reverse"}`}>
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
        >
          Browse Books
        </button>
      </div>
      <div>
        <img src={card.img} alt="age group" />
      </div>
    </div>
  );
};

export default AgeCard;
