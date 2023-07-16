import noImage from "../assets/no-image.webp"

const ImageCrop = (url :string) => {
    if(!url)
        return noImage
    else{
        const media = 'media/';
        const index = url.indexOf(media)+media.length;
        return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
    }
    
}

export default ImageCrop;