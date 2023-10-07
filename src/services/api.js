import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=32395796-06911cceb0b80396a7d5298f8';

export const perPage = 12;

export async function fetchQuery(searchQuery, page) {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: perPage,
    safesearch: true,
  });

  try {
    const response = await axios.get(
      `${BASE_URL}?${API_KEY}&q=${searchQuery}&page=${page}&${searchParams}`
    );

    const images = response.data.hits.map(
      ({ id, webformatURL, largeImageURL, tags }) => {
        return {
          id,
          webformatURL,
          largeImageURL,
          tags,
        };
      }
    );
    return { images, totalImages: response.data.totalHits };

    // return response.data;
  } catch (error) {
    console.log(error);
  }
}