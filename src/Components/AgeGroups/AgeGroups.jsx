import { useSelector } from "react-redux";
import AgeCard from "../AgeCard/AgeCard";
import "./ageGroups.css";

const AgeGroups = () => {
  const { lang } = useSelector((state) => state.lang);

  const cards = [
    // {
    //   id: 1,
    //   img: "https://res.cloudinary.com/dxfphp6to/image/upload/v1700853169/nabdu_al_qalam/3-6-removebg-preview_mafbf9.webp",
    //   arAge: "من 0 سنوات ل 3 سنوات",
    //   enAge: "From 0 years to 3 years",
    //   href: "0-3",
    // },
    {
      id: 2,
      img: "https://res.cloudinary.com/dxfphp6to/image/upload/v1700853169/nabdu_al_qalam/3-6-removebg-preview_mafbf9.webp",
      arAge: "من 3 سنوات ل 5 سنوات",
      enAge: "From 3 years to 5 years",
      href: "3-5",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dxfphp6to/image/upload/v1705703082/nabdu_al_qalam/6-9_fo2hjt_ei4hec.webp",
      arAge: "من 6 سنوات ل 9 سنوات",
      enAge: "From 6 years to 9 years",
      href: "6-9",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dxfphp6to/image/upload/v1705703081/nabdu_al_qalam/9-12_zmhwr0_ys8njd.webp",
      arAge: "من 9 سنوات ل 12 سنة",
      enAge: "From 9 years to 12 years",
      href: "9-12",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dxfphp6to/image/upload/v1700853253/nabdu_al_qalam/12-15-removebg-preview_hmlkpm.webp",
      arAge: "من 12 سنة ل 17 سنة",
      enAge: "From 12 years to 17 years",
      href: "12-17",
    },
  ];

  return (
    <div
      style={
        lang === "en"
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
      className="age-groups"
    >
      {cards.map((card) => (
        <AgeCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AgeGroups;
