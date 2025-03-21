import "../styles/image.css";

function Image({ width = "50px", height = "50px", borderRadius = "8px", src }) {
  return (
    <img src={src}  style={{ width, height, borderRadius }}></img>
  );
}
export default Image;
