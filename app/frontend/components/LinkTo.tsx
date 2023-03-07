import React, { FC } from 'react'

interface Props {
  url: string;
  text: string;
}

export const LinkTo: FC<Props> = ({ url, text }) => {
  return <a href={url} data-turbo="true">{text}</a>;
}
