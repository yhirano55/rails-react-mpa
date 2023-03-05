import React, { FC } from 'react'
import { Book } from '../../type';

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialPageData: {
    book: Book
  };
}

export const BooksShowPage: FC<Props> = ({ csrfParam, csrfToken, initialPageData: { book } }) => {
  return (
    <>
      <div>
        <p>
          <strong>Title:</strong>
          {book.title}
        </p>
        <p>
          <strong>Price:</strong>
          {book.price}
        </p>
        <p>
          <strong>Description:</strong>
          {book.description}
        </p>
      </div>
      <div>
        <a href={`/books/${book.id}/edit`}>Edit this book</a> | <a href={`/books`}>Back to books</a>

        <form action={`/books/${book.id}/`} method="post" data-turbo="false">
          <input type="hidden" name="_method" value="delete" />
          <input type="hidden" name={csrfParam} value={csrfToken} />
          <input type="submit" value="Destroy this book" />
        </form>
      </div>
    </>
  );
}
