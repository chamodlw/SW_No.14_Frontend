import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from './cropImage';

const ImageCropComponent = ({ imageSrc }) => {
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = async (crop) => {
    if (crop.width && crop.height) {
      const croppedImage = await getCroppedImg(imageSrc, crop);
      console.log(croppedImage);
      setCroppedImage(croppedImage);
    }
  };

  return (
    <ReactCrop
      src={imageSrc}
      crop={crop}
      onChange={(newCrop) => setCrop(newCrop)}
      onComplete={onCropComplete}
    />
  );
};

export default ImageCropComponent;
