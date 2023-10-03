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
          <h1 dir={lang === "en" ? "ltr" : "rtl"}>
            {lang === "en"
              ? "Welcome to Nabdu Al-Qalam"
              : "اهلا بك في نبض القلم"}
          </h1>
          <p dir={lang === "en" ? "ltr" : "rtl"}>
            {lang === "en"
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit, quaerat deserunt doloremque delectus voluptate sed rem temporibus pariatur, assumenda enim doloribus alias deleniti dolor consequuntur unde magni quae earum.`
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
            src="https://o.remove.bg/downloads/d206b238-d967-4ed4-92cd-4cf58876e75b/image-removebg-preview.png"
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
