import { useSelector } from "react-redux";
import './activities.css'
import { Fragment } from "react";
const Activities = () => {
  const { lang } = useSelector((state) => state.lang);
  return (
    <>
      <div className="containerActive">
        <h1
          style={
            lang === "ar"
              ? { flexDirection: "row-reverse" }
              : { flexDirection: "row" }
          }
        >
          {lang == "en" ? "Activities" : "أنشطة الدار"}
        </h1>
        <div className="contentActive">
          {lang == "en" ? (
            <>
              <p className="paragraphActiveEn">
                Stories for children and young people
              </p>
              <p className="paragraphActiveEn">
                International and local exhibitions
              </p>
              <p className="paragraphActiveEn">Educational workshops</p>
              <p className="paragraphActiveEn">Cultural seminars</p>
              <p className="paragraphActiveEn">
                Member of the Emirates Publishers Union
              </p>
              <p className="paragraphActiveEn">
                Member of the Children's Book Publishers Forum
              </p>
              <p className="paragraphActiveEn">
                An elite group of the most successful authors and painters in
                the Arab world
              </p>
              <p className="paragraphActiveEn">
                Publishing and distribution service
              </p>
              <p className="paragraphActiveEn">Linguistic proofreading service</p>
              <p className="paragraphActiveEn">
                Literary works evaluation service
              </p>
            </>
          ) : (
            <div className="paragAR" dir={lang === 'en' ? 'ltr' : 'rtl'}>
              <p className="paragraphActiveAr">قصص للأطفال واليافعيين</p>
              <p className="paragraphActiveAr">معارض دولية و محلية</p>
              <p className="paragraphActiveAr">ورش تعليمية</p>
              <p className="paragraphActiveAr">ندوات ثقافية</p>
              <p className="paragraphActiveAr">عضو اتحاد الناشرين الأماراتيين</p>
              <p className="paragraphActiveAr">عضو ملتقي ناشري كتب الأطفال</p>
              <p className="paragraphActiveAr">
                نخبة من أنجح المؤلفين و الرسامين في الوطن العربي
              </p>
              <p className="paragraphActiveAr">خدمة النشر والتوزيع</p>
              <p className="paragraphActiveAr">خدمة التدقيق اللغوى</p>
              <p className="paragraphActiveAr">خدمة تقييم الأعمال الأدبية</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Activities;
