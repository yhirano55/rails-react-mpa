import React, { FC } from 'react'

interface Props {
  csrfParam: string;
  csrfToken: string;
  initialPageData: {
    name: string,
  };
}

export const HomeIndexPage: FC<Props> = ({ initialPageData: { name } }) => {
  return <div>Hello {name}!</div>;
}
