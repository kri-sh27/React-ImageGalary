import { useEffect, useState } from "react";
import "./ImageDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ImageDetails() {
  const { id } = useParams();
  const IMAGE_DEATIL_URL =
    "https://api.slingacademy.com/v1/sample-data/photos/";
  const [photo, setPhoto] = useState(null);

  async function downloadImage() {
    try {
      const response = await axios.get(IMAGE_DEATIL_URL + id);
      const photoData = response.data.photo;

      setPhoto({
        description: photoData.description,
        title: photoData.title,
        url: photoData.url,
      });
    } catch (error) {
      console.error("Error fetching image details:", error);
    }
  }

  useEffect(() => {
    downloadImage();
  }, []);
  return (
    photo && (
      <div className="container">
        <div className="card">
          <div>
            <img className="card-image" src={photo.url} alt={photo.title} />
          </div>
          <div className="card-content">
            <div className="card-title">{photo.title}</div>
            <div className="card-description"> {photo.description}</div>
          </div>
        </div>
      </div>
    )
  );
}
export default ImageDetails;
