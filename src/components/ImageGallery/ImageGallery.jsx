import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ images, getModalImage }) => {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          getModalImage={getModalImage}
        />
      ))}
    </GalleryList>
  );
};
