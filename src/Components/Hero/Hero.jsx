import { Link } from "react-router-dom";
import "./hero.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <section className="hero">
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="container"
      >
        <div className="content">
          <h1
            className={`${lang === "ar" ? "ar" : ""}`}
            dir={lang === "en" ? "ltr" : "rtl"}
          >
            {lang === "en"
              ? "Welcome to Nabdu Al-Qalam"
              : "اهلا بك في نبض القلم"}
          </h1>
          <p
            className={`${lang === "ar" ? "ar" : "en"}`}
            dir={lang === "en" ? "ltr" : "rtl"}
          >
            {lang === "en"
              ? `institution
              A cultural organization specializing in the manufacture and publication of books according to international standards. Dar started
              Pulse of the Pen, its journey at the beginning of 2018 in the Capital of Culture, “Sharjah”
              An approved, systematic plan to advance children’s culture and literature in the world
              Arab League to keep pace with the global trend in this field.`
              : `مؤسسة
  ثقافية متخصصة بصناعة ونشر الكتاب وفق المعايير العالمية. بدأت دار
  نبض القلم مســيرتها في بداية عام 2018 بعاصمة الثقافة " الشــارقة "
  معتمدة خطــة ممنهجة للنهوض بواقع ثقافة وأدب الأطفال فــي العالم
  العربي ليواكب الركب العالمي في هذا المضمار.`}
          </p>
          <Link
            style={
              lang === "en" ? { marginRight: "auto" } : { marginLeft: "auto" }
            }
            to="books"
          >
            {lang === "en" ? "Shop Now" : "تسوق الأن"}
          </Link>
        </div>
        <div className="image-container">
          <img
            src={
              "https://res.cloudinary.com/dxfphp6to/image/upload/v1705702288/nabdu_al_qalam/hero_okolhr_ruo8dl.webp"
            }
            width={600}
            height={800}
            style={{ objectFit: "cover" }}
            alt="little-girl-reading-a-book"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
