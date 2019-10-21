import React from 'react';
import ImageGallery from 'react-image-gallery'; 
import "react-image-gallery/styles/css/image-gallery.css";



class Gallery extends React.Component {
  
  render() {
    const images = [
      {
        original: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/01cake.jpg?raw=true',
        thumbnail: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/01cake%20copy.jpg?raw=true',
      },
      {
        original: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/02FirstMembers1930.jpg?raw=true',
        thumbnail: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/02FirstMembers1930%20copy.jpg?raw=true'
      },
      {
        original: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/03MeClaireJoancake.jpg?raw=true',
        thumbnail: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/03MeClaireJoancake%20copy.jpg?raw=true'
      }
    ]

    return (
      <div id="img-gallery-div">  
        <ImageGallery items={images} />
      </div>
    )
  }
}
export default Gallery;