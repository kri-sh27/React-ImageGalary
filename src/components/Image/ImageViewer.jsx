import "./ImageViewer.css";

function ImageViewer(props) {
  const url = props;
  const IMAGE_URL = url.url;
  const TITLE=url.title;
  console.log(url.url);
  return (
    <div className="imageviewer">
    {/* <div>{TITLE}</div> */}
      <div>
        <img className="imageviewer-image" src={IMAGE_URL} alt="Image" />
      </div>
    </div>
  );
}

export default ImageViewer;
