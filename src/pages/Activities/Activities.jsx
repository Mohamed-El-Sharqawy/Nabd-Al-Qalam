import Activity from "../../Components/Activity/Activity";
import "./activities.css";
import { useSelector } from "react-redux";
const Activities = () => {
  const { lang } = useSelector((state) => state.lang);
  const activites = [
    { ar: "ورش تعليمية", en: "Educational Workshops" },
    {
      ar: "ندوات ثقافية",
      en: "Cultural Seminars",
    },
    {
      ar: "معارض دولية و محلية",
      en: "International and Local Exhibitions",
    },
    {
      ar: "قصص للأطفال واليافعيين",
      en: "Stories for Children and Youth",
    },
    {
      ar: "نخبة من أنجح المؤلفين و الرسامين في الوطن العربي",
      en: "An Elite Group of the Most Successful Authors and Painters in the Arab World",
    },
  ];

  return (
    <section className="headingActivity">
      <h1>{lang === "en" ? "Activities" : "أنشطة الدار"} </h1>
      <div className="activities">
        {activites.map((activity) => (
          <Activity
            key={lang === "en" ? activity.en : activity.ar}
            activity={activity}
          />
        ))}
      </div>
    </section>
  );
};

export default Activities;
