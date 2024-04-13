import axios from 'axios';

export let perPage = 15;

export async function getImages(paramsToSearch, page = 1) {

    const searchedImages = await axios(`https://pixabay.com/api/`, {
        params: {
            key: '43250270-1f98e5ae52bb69b689c51c131',
            q: paramsToSearch,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page,
            per_page: perPage,
        }
    });

    return searchedImages.data;
}