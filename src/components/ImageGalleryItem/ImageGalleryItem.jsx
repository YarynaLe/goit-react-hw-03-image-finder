import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  getModalImage,
}) => {
  return (
    <GalleryItem key={id}>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => {
          getModalImage(largeImageURL);
        }}
      />
    </GalleryItem>
  );
};
