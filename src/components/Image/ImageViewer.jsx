import "./ImageViewer.css";
import { Link } from "react-router-dom";

function ImageViewer(props) {
  const url = props;
  const IMAGE_URL = url.url;
  const TITLE = url.title;
  const id = props.id;
  console.log(url.url);
  return (
    <Link to={`/photos/${id}`} className="imageviewer-wrapper">
      <div className="imageviewer">
        {/* <div>{TITLE}</div> */}

        <div>
          <img className="imageviewer-image" src={IMAGE_URL} alt="Image" />
        </div>
      </div>
    </Link>
  );
}

export default ImageViewer;
