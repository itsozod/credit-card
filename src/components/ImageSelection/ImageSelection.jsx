import { useImageChange } from "../../hooks/UseImageChange";
import styles from "./ImageSelection.module.css";

const ImageSelection = () => {
  const imageOptions = ["image1.webp", "image2.webp", "image3.webp"];
  const [cardImage, handleCardImage] = useImageChange();
  return (
    <>
      <div>
        <label style={{ color: "#fff" }}>Images: {cardImage}</label>
      </div>
      <div className={styles.image_container}>
        {imageOptions.map((img) => (
          <img
            className={styles.new_img}
            key={img}
            src={img}
            alt="Image"
            onClick={() => handleCardImage(img)}
          ></img>
        ))}
      </div>
    </>
  );
};

export default ImageSelection;
