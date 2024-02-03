const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

const USERS_URL: string = `${BASE_URL}/users`;
const ALBUM_URL = (userId: string): string => `${BASE_URL}/users/${userId}/albums`;
const PHOTOS_URL = (albumId: string): string => `${BASE_URL}/albums/${albumId}/photos`;

export const getUsers = () => fetch(USERS_URL).then(response => response.json()).then(data => data);
export const getAlbums = (userId: string = '1') => fetch(ALBUM_URL(userId)).then(response => response.json()).then(data => data);
export const getPhotos = (albumId: string = '1') => fetch(PHOTOS_URL(albumId)).then(response => response.json()).then(data => data);