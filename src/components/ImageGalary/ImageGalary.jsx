import ImageList from '../ImageList/ImageList'
import Search from '../Search/Search'
import './ImageGalary.css'
function ImageGalary(){
    return (
        <div className='image-galary-wrapper'>
            <h1>
                ImageGalary
            </h1>
            <Search/>
            <ImageList/>
        </div>
    )

}

export default ImageGalary