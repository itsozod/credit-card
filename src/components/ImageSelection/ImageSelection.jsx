import styles from "./ImageSelection.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CHANGE_IMAGE } from "../../store/actions/cardHolderAction";

const ImageSelection = () => {
  const cardImage = useSelector((state) => state.changeImageReducer.img);
  const imageOptions = ["image1.webp", "image2.webp", "image3.webp"];
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.image_container}>
        {imageOptions.map((img) => (
          <img
            style={{ border: cardImage === img ? "1px solid red" : "" }}
            className={styles.new_img}
            key={img}
            src={img}
            onClick={() => dispatch({ type: CHANGE_IMAGE, payload: img })}
          ></img>
        ))}
        <p
          className={styles.clear}
          onClick={() => dispatch({ type: CHANGE_IMAGE, payload: "" })}
        >
          Clear
        </p>
      </div>
    </>
  );
};

export default ImageSelection;
