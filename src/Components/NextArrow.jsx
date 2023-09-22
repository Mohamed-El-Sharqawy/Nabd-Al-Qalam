import { BsChevronRight } from "react-icons/Bs";

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ all: "unset" }}>
      <BsChevronRight style={{ color: "#c0114c", fontSize: "24px" }} />
    </button>
  );
};

export default NextArrow;
