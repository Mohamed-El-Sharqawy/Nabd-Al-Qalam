import Marquee from "react-fast-marquee";
import useDisplayBooks from "../../hooks/useDisplayBooks";
import { ClipLoader } from "react-spinners";
import "./popular.css";
import { useSelector } from "react-redux";
const MostPopular = () => {
  const { displayPopularBooks, isLoading } = useDisplayBooks();
  const { lang } = useSelector((state) => state.lang);

  return (
    <div>
      <h1 className="popular-heading">{lang == "en" ? "Most Popular": "الأكثر مبيعاً"}</h1>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 343,
          }}
        >
          <ClipLoader size={100} color="#36d7b7" />
        </div>
      ) : (
        <Marquee
          speed={window.innerWidth >= 1024 ? 50 : 100}
          className="popular"
        >
          {displayPopularBooks()}
        </Marquee>
      )}
    </div>
  );
};

export default MostPopular;
