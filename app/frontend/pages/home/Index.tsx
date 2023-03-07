import React, { FC } from 'react'

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialData: {
    name: string,
  };
}

export const HomeIndexPage: FC<Props> = ({ initialData: { name } }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <a href="/books">Go Crud Sample</a>
    </div>
  );
}
