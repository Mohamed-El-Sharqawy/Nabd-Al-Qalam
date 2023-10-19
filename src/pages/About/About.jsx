import { useSelector } from "react-redux";
import "./about.css";
import { about } from "../../assets/images";

const About = () => {
  const { lang } = useSelector((state) => state.lang);

  const enAbout = `It is a cultural institution specialized in making and publishing
  the book according to international standards. Nabdu Al-Qalam
  started its march at the beginning of 2018 in the Culture Capital
  SHARJAH, adopting a systematic plan to advance the reality of
  children’s culture and literature in the Arab world, to keep pace
  with the global community in this regard * Member of the Emirates
  Publishers Association * Member of the Arab Forum for Children’s
  Book Publishers So far Nabdu Al-Qalam Publishing House has
  published many books, children’s stories and methodological books
  for kindergartens, teenagers, and adult books, and it is now in
  the process of preparing new publications. The most important
  feature of Nabdu Al-Qalam Publishing House is the artistic and
  scientific specialization of children’s literature and culture,
  and it deals with a group of specialized academic competencies
  from authors and illustrators for children’s books, design and
  artistic direction, and the purposeful and innovative content in
  the books issued by it Nabdu Al-Qalam Publishing House carries out
  activities with government agencies, cultural institutions and the
  Ministry of Education, in addition to the interest in encouraging
  and consolidating the love of reading and knowledge for children
  and young people through its holding of book fairs in state
  schools, universities and all cultural platforms, despite its
  active presence in the United Arab Emirates, it has remarkable
  activities in several countries from all over the Arab world.
  Nabdu Al-Qalam participates in all Arab and international book
  fairs, believing in the authenticity of the book in spreading
  culture and advancing peoples. It is working hard to spread new
  treasures of knowledge to present it to the noble reader.`;

  const arAbout = `هي مؤسسة
  ثقافية متخصصة بصناعة ونشر الكتاب وفق المعايير العالمية. بدأت دار
  نبض القلم مســيرتها في بداية عام 2018 بعاصمة الثقافة " الشــارقة "
  معتمدة خطــة ممنهجة للنهوض بواقع ثقافة وأدب الأطفال فــي العالم
  العربي ليواكب الركب العالمي في هذا المضمار. عضو إتحاد الناشرين
  الاماراتيين. عضو الملتقى العربي لناشري كتب الأطفال. صــدر عــن دار
  نبــض القلم للنشــر حتــى الأن الكثير مــن الكتــب و قصص الأطفــال
  وكتب منهجية لرياض الأطفال والناشئةوكتب الكبار وهي الأن في صدد إعداد
  إصدارات جديدة. أهم ما تتميز به دار نبض القلم للنشــر هو التخصص
  الفني والعلمي بأدب وثقافة الطفل وتتعامل مع نخبة من الكفاءات
  الأكاديمية المتخصصين من المؤلفين و الرسامين لكتب الأطفال والتصميم
  والاخراج الفني، والمضمون الهادف والمبتكر في الكتب الصادرة عنها. تقوم
  دار نبض القلم للنشــر بفاعليــات مع الهيئات الحكوميــة والمؤسســات
  الثقافيــة و وزارة التربيــة والتعليم بالاضافة إلى الاهتمام بالتشجيع
  وترسيخ حب القراءة والمعرفة للاطفال و الناشــئة من خلال إقامتهــا
  لمعــارض الكتــاب داخل مــدارس الدولة و الجامعات وكل منابر
  الثقافة. رغم تواجدهــا الفاعل في الامارات العربية المتحدة إلا أن
  لديهــا نشــاطات ملحوظة في عــدة دول من مختلف أنحاء العالم العربي
  وتشــارك نبــض القلم فــي جميع معــارض الكتاب العربيــة
  والعالميــة إيماناً منها بأصالــة الكتاب في ُ نشــر الثقافــة
  ورقــي الشــعوب . جاهــدة في نشــر الجديد من كنوز المعرفة لتقدمه للقارىء الكريم `;

  return (
    <section className="container-about">
      <h1 dir={lang === "en" ? "ltr" : "rtl"}>
        {lang === "en" ? "About Us" : "من نحن"}
      </h1>
      <div
        style={
          lang === "en"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        }
        className="About"
      >
        <div className="left-about">
          <h3 style={lang === "ar" ? { fontSize: "22px" } : {}}>
            {lang === "en"
              ? "Nabdu Al- Qalam for Publishing and Distribution"
              : "نبض القلم للنشر والتوزيع"}
          </h3>
          <p
            style={
              lang === "en"
                ? { textAlign: "left", fontSize: "14px" }
                : { textAlign: "right", fontSize: "17px" }
            }
          >
            {lang === "en" ? enAbout : arAbout}
          </p>
        </div>
        <div className="right-about">
          <img src={about} alt="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
