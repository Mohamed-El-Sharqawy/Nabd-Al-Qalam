import { ClipLoader } from "react-spinners";
import useDisplayBooks from "../hooks/useDisplayBooks";
import Popup from "../Components/Popup/Popup";

export default function Popular() {
  const { displayPopularBooks, isLoading, popup, setPopup, chosenBook } = useDisplayBooks();

  return (
    <section>
      <div className="cards">
        {isLoading ? (
          <ClipLoader size={100} color="#36d7b7" />
        ) : (
          displayPopularBooks()
        )}
      </div>

      <Popup chosenBook={chosenBook} popup={popup} setPopup={setPopup} />
    </section>
  );
}
