import movies from '../movies.json';

const stringifiedMovies = JSON.stringify(movies);

console.log(typeof stringifiedMovies);

try {
    const parsedMovies = JSON.parse(stringifiedMovies);

    console.log('is valid', parsedMovies);
} catch (error) {
    console.error('is invalid', error)
}