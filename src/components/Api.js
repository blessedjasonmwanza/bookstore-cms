const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pzdiAKBgMPMqrFpIlyDU/books';

const addNewBook = async (book) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
  });

  return result.status === 201;
};

const fetchBooks = async () => {
  const request = await fetch(url);
  const books = await request.json();
  return books;
};

const deleteBook = async (bookId) => {
  const result = await fetch(`${url}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
    }),
  });

  return result === 'Book deleted successfully';
};

export { addNewBook, fetchBooks, deleteBook };
