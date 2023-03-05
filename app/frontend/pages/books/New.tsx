import React, { FC, useState } from 'react'
import { Book } from '../../type';

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialPageData: {
    book: Book
  };
}

export const BooksNewPage: FC<Props> = ({ csrfParam, csrfToken, initialPageData: { book } }) => {
  const [form, setForm] = useState({ title: book.title, price: book.price, description: book.description });

  const handleChange = (input) => e => {
    setForm({ ...form, [input] : e.target.value });
  };

  return (
    <>
      <h1>New book</h1>

      <form action={`/books`} method="post">
        <input type="hidden" name="_method" value="post" />
        <input type="hidden" name={csrfParam} value={csrfToken} />

        <div>
          <label style={{ display: 'block' }}>Title</label>
          <input type="text" name="book[title]" value={form.title} onChange={handleChange('title')} />
        </div>

        <div>
          <label style={{ display: 'block' }}>Price</label>
          <input type="number" name="book[price]" value={form.price} onChange={handleChange('price')} />
        </div>

        <div>
          <label style={{ display: 'block' }}>Description</label>
          <textarea name="book[description]" value={form.description} onChange={handleChange('description')}></textarea>
        </div>

        <div>
          <input type="submit" value="Create book" />
        </div>
      </form>

      <br />

      <div>
        <a href="/books">Back to books</a>
      </div>
    </>
  );
}
