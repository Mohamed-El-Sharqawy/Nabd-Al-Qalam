import { BsChevronLeft } from "react-icons/Bs";

const PreviousArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ all: "unset" }}>
      <BsChevronLeft style={{ color: "#c0114c", fontSize: "24px" }} />
    </button>
  );
};

export default PreviousArrow;
