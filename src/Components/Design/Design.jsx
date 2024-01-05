import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./design.css";

const Design = () => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <>
      <div className="design">
        <div className="overlayDesign"></div>
        <div className="containerDesgin">
          <p dir={lang === "en" ? "ltr" : "rtl"}>
            {lang === "en"
              ? `The most important feature of Nabd Al-Qalam Publishing House is the artistic specialization in children’s literature and culture, and it deals with an elite group of academic competencies who specialize in authors and illustrators of children’s books, design and artistic direction, and the purposeful and innovative content in the books it publishes.`
              : `أهم ما تتميز به دار نبض القلم للنشر هو التخصص الفنى بأدب وثقافة الطفل وتتعامل مع نخبة من الكفاءات الأكاديمية المتخصصين من المؤلفين والرسامين لكتب الأطفال والتصميم و الاخراج الفنى,والمضمون الهادف والمبتكر فى الكتب الصادرة عنها`}
          </p>
          <Link to="/books">
            {lang === "en" ? "Shop Collection" : "تسوق المجموعة"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Design;
