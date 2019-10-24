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
      },
      {
        original: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/04mesherrillcake.jpg?raw=true',
        thumbnail: 'https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/04mesherrillcake%20copy.jpg?raw=true'
      },
      {
        original: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/05MichelleRaelene.jpg?raw=true",
        thumbnail: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/05MichelleRaelene%20copy.jpg?raw=true"
      },
      {
        original: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/06Past-Provincial-President-Joan-Fenick.jpg?raw=true",
        thumbnail: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/06Past-Provincial-President-Joan-Fenick%20copy.jpg?raw=true"
      },
      {
        original: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/07ZoneCommander-Claire-Wylie.jpg?raw=true",
        thumbnail: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/07ZoneCommander-Claire-Wylie%20copy.jpg?raw=true"
      },
      {
        original: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/08DaveBubba.jpg?raw=true",
        thumbnail: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/08DaveBubba%20copy.jpg?raw=true"
      },
      {
        original: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/09Cadets.jpg?raw=true",
        thumbnail: "https://github.com/kylemcloughlin/the-legion-uxbridge/blob/master/src/srcPhotos/09Cadets%20copy.jpg?raw=true"
      }
    ]

    return (
     <div id="center-gallery">

     <div id="img-gallery-div">  
        <ImageGallery items={images} />
      </div>
     </div>
    )
  }
}
export default Gallery;