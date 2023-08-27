import { useEffect, useState } from "react";
import "./ImageList.css";
import axios from "axios";
import ImageViewer from "../Image/ImageViewer";

function ImageList() {
  const DEFAULT_URL="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
  const [imageList, setImageList] = useState([]);

  const [imageUrl,setImageUrl]=useState(DEFAULT_URL)
 

  async function downloadImages() {
    const response = await axios.get(imageUrl?imageUrl:DEFAULT_URL);
    // console.log(response.data);
    // console.log(response.data.photos);

    const imageResults = response.data.photos; //array of photos
    // console.log(imageResults);

    // const imagePromise=imageResults.map((image)=> axios.get(image.url))
    // console.log(imagePromise)

    // const imageListData= await axios.all(imagePromise)
    // console.log(imageListData)

    // const imageFinalList= imageListData.map(imageData =>{
    //     const image= imageData.data
    //     console.log(image)
    //     return{
    //         url:ima
    //     }

    // })

    const imageFinalList = imageResults.map((imageinfo) => {
      const image = imageinfo;
      // console.log(image)
      return {
        id: image.id,
        description: image.description,
        title: image.title,
        url: image.url,
      };
    });
    setImageList(imageFinalList);
    // console.log(imageFinalList);
  }

  useEffect(() => {
    downloadImages();
  }, [imageUrl]);

  return (
    <div className="image-list-wrapper">
      {/* <div>image List</div> */}
     <div className="image-list">{
    imageList.map((image)=>(<ImageViewer url={image.url} key={image.id} title={image.title}/>))
   } </div>
   
    </div>
  );
}

export default ImageList;
