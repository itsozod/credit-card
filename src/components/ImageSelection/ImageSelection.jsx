import { useImageChange } from "../../hooks/UseImageChange";
import styles from "./ImageSelection.module.css";

const ImageSelection = () => {
  const imageOptions = ["image1.webp", "image2.webp", "image3.webp"];
  const [, handleCardImage] = useImageChange();
  return (
    <>
      <div className={styles.image_container}>
        {imageOptions.map((img) => (
          <img
            className={styles.new_img}
            key={img}
            src={img}
            onClick={() => handleCardImage(img)}
          ></img>
        ))}
        <p className={styles.clear} onClick={() => handleCardImage("")}>
          Clear
        </p>
      </div>
    </>
  );
};

export default ImageSelection;
