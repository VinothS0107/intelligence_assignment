import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import "./Gallery.css"


const GalleryData=[{
    id:1,
    imageUrl:"./assets/gallery1.avif"
},{
    id:2,
    imageUrl:"./assets/gallery8.jfif"
},
{
    id:3,
    imageUrl:"./assets/gallery3.avif"
},{
    id:4,
    imageUrl:"./assets/gallery4.avif"
},
{
    id:5,
    imageUrl:"./assets/gallery5.avif"
},{
    id:6,
    imageUrl:"./assets/gallery6.avif"
},
]
function Gallery(){
    return (
      <div className="gallery-container">
        <div className="gallery-total-add-photo">
          <h1 className="gallery-count">
            Gallery <span>{`(${GalleryData.length})`}</span>
          </h1>
          <div className="add-photo">
            <MdOutlineAddPhotoAlternate className="add-icon" />
            <p>add photo</p>
          </div>
        </div>
        <ul className="gallery-ul">
            {
                GalleryData.map((eachGalley)=>(
                    <li key={eachGalley.id} className="gallery-data">
                        <img src={eachGalley.imageUrl} alt={`gallery_${eachGalley.id}`} className="individual-gallery" />
                    </li>
                ))
            }
        </ul > 

      </div>
    );
}
export default Gallery