import Activity from "../../Components/Activity/Activity";
import "./activities.css";

const Activities = () => {
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
      ar: "عضو اتحاد الناشرين الأماراتيين",
      en: "Member of the Emirates Publishers Union",
    },
    {
      ar: "عضو ملتقي ناشري كتب الأطفال",
      en: "Member of the Children's Book Publishers Forum",
    },
    {
      ar: "خدمة النشر والتوزيع",
      en: "Publishing and Distribution Service",
    },
    {
      ar: "خدمة التدقيق اللغوى",
      en: "Linguistic Proofreading Service",
    },
    {
      ar: "خدمة تقييم الأعمال الأدبية",
      en: "Literary Works Evaluation Service",
    },
    {
      ar: "نخبة من أنجح المؤلفين و الرسامين في الوطن العربي",
      en: "An Elite Group of the Most Successful Authors and Painters in the Arab World",
    },
  ];

  return (
    <section className="activities">
      {activites.map((activity) => (
        <Activity activity={activity} />
      ))}
    </section>
  );
};

export default Activities;
