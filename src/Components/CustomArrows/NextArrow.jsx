import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ all: "unset" }}>
      <ArrowForwardIosIcon style={{ color: "#c0114c", fontSize: "24px" }} />
    </button>
  );
};

export default NextArrow;
