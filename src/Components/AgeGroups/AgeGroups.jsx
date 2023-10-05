import { img_12_15, img_3_6, img_6_9, img_9_12 } from "../../assets/images";
import AgeCard from "../AgeCard/AgeCard";
import "./AgeGroups.css";

const AgeGroups = () => {
  const cards = [
    {
      img: img_3_6,
      arAge: "من 3 سنوات ل 6 سنوات",
      enAge: "From 3 years to 6 years",
    },
    {
      img: img_6_9,
      arAge: "من 6 سنوات ل 9 سنوات",
      enAge: "From 6 years to 9 years",
    },
    {
      img: img_9_12,
      arAge: "من 9 سنوات ل 12 سنة",
      enAge: "From 9 years to 12 years",
    },
    {
      img: img_12_15,
      arAge: "من 12 سنة ل 15 سنة",
      enAge: "From 12 years to 15 years",
    },
  ];

  return (
    <section className="age-groups">
      {cards.map((card) => (
        <AgeCard card={card} />
      ))}
    </section>
  );
};

export default AgeGroups;
