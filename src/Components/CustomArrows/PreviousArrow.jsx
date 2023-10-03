import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const PreviousArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ all: "unset" }}>
      <ArrowBackIosIcon style={{ color: "#c0114c", fontSize: "24px" }} />
    </button>
  );
};

export default PreviousArrow;
