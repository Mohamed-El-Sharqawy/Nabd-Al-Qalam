import { useSelector } from "react-redux";

import "./termsConditions.css";
import { Link } from "react-router-dom";

export default function TermsConditions() {
  const { lang } = useSelector((state) => state.lang);

  return (
    <section className="terms-conditions" dir={lang === "en" ? "ltr" : "rtl"}>
      {lang == "en" ? `` : ``}
      <h1>{lang == "en" ? "Return and exchange :" : "الإرجاع والاستبدال :"}</h1>
      <p>
        {lang == "en"
          ? `To benefit from return, exchange and warranty services, the original invoice must be brought. Return and exchange includes all items except books and prepaid cards unless there is a manufacturing defect according to the following conditions:`
          : `للإستفادة من خدمات الإرجاع والاستبدال والضمان يجب إحضار الفاتورة
        الأصلية. . يشمل الإرجاع والاستبدال جميع الأصناف باستثناء الكتب والبطاقات
        المسبقة الدفع إلا إذا وجد عيب مصنعي حسب الشروط التالية :`}
      </p>

      {/* Snippet */}
      {lang == "en" ? `` : ``}

      <ul>
        <li>
          {lang == "en"
            ? `The item must be in the same condition as when purchased and in its original packaging.`
            : `أن يكون الصنف بنفس حالتة عند الشراء ومغلفاً بالغلاف الأصلي`}
        </li>
        <li>
          {lang == "en"
            ? `Return within 3 days and exchange within 7 days from the date of purchase`
            : `الإرجاع خلال 3 أيام والاستبدال خلال 7 أيام من تاريخ الشراء`}
        </li>
        <li>
          {lang == "en"
            ? `The promotion associated with the returned item can be returned if it is in its original condition or the value of the promotion will be deducted.`
            : `يمكن إرجاع العرض الترويجي المرتبط بالصنف المرتجع إذا كان بحالتة
          الأصلية أو سيتم خصم قيمة العرض الترويجي`}
        </li>
        <li>
          {lang == "en"
            ? `Refunds of collection amounts to other companies are subject to the terms and conditions of the service provider. The customer must bring the payment receipt with the invoice in order to be able to return the amount if the terms and conditions of the service provider allow it.`
            : `إرجاع مبالغ التحصيل للشركات الأخرى يخضع للشروط والأحكام الخاصة بمزود
          الخدمة . ويجب العميل احضار إيصال الدفع على مع الفاتورة لكي يتمكن من
          إرجاع المبلغ في حال سمحت الشروط والأحكام الخاصة بمزود الخدمة`}
        </li>
        <li>
          {lang == "en"
            ? `Return, exchange and warranty services extend within the geographical boundaries of the country from which the product was purchased.`
            : `خدمات الإرجاع والاستبدال والضمان تمتد ضمن الحدود الجغرافية للبلد الذي
          تم شراء المنتج منه`}
        </li>
        <li>
          {lang == "en"
            ? `Receiving the shipment from the shipping company is considered an acknowledgment from the customer that the carton shipment is intact and in good condition and has not been opened before receipt.`
            : `استلام الشحنة من شركة الشحن يعتبر إقرارا من العميل أن الشحنة الكرتون
          سليم وبحالة جيدة ولم يتم فتحه قبل الإستلام`}
        </li>
        <li>
          {lang == "en"
            ? `The return and exchange period is calculated from the date of receipt.`
            : `يتم احتساب فترة الإرجاع والإستبدال من تاريخ الإستلام`}
        </li>
      </ul>

      <p>
        {lang == "en"
          ? `In case of return, please contact us on the number`
          : `وفي حاله الترجيع يرجى التواصل معنا على الرقم`}
        <Link to={"tel:+9710551886228"} className="contact-number">
          +971 0551886228
        </Link>
        {lang == "en"
          ? `A representative from the shipping company will come to receive the shipment. Nabd Al Qalam House will replace the manufacturing defect within 3 days from the date of purchase according to the following conditions:`
          : `وسيحضر مندوب شركة الشحن لإستلام الشحنة. تقوم دار نبض القلم بإستبدال
        العيب المصنعي خلال 3 أيام من تاريخ الشراء حسب الشروط التالية:`}
      </p>

      <ul>
        <li>
          {lang == "en"
            ? `The book must be free from any scratches or misuse.`
            : `أن يكون الكتاب خالياً من أي خدوش أو سوء استخدام`}
        </li>
        <li>
          {lang == "en"
            ? `Bring the original book with all accessories if any.`
            : `إحضار الكتاب الأصلي مع جميع الملحقات إذا وجد`}
        </li>
      </ul>
    </section>
  );
}
