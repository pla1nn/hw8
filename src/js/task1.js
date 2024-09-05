import book from '../book.json';

try {
    const bookObject = JSON.stringify(book);
    console.log('is valid', bookObject);
} catch (error) {
    console.log('invalid', error);
}