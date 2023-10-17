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
            ? `        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam
        temporibus cupiditate doloremque, voluptatum saepe dolorem
        necessitatibus, nihil voluptate nisi similique consectetur alias a
        placeat qui odit ullam exercitationem dignissimos itaque. Voluptates
        quia minima et ut nesciunt rem blanditiis a!`
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
