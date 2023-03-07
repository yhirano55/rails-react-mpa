import React, { FC } from 'react'
import { HomeIndexPage } from './home/Index';
import { BooksIndexPage } from './books/Index';
import { BooksShowPage } from './books/Show';
import { BooksNewPage } from './books/New';
import { BooksEditPage } from './books/Edit';

interface Props {
  actionName: string;
  controllerPath: string;
  csrfParam: string;
  csrfToken: string;
  initialData: Object;
}

const createPageId = (controllerPath: string, actionName: string): string => {
  return `${controllerPath}-${actionName}`;
};

const pages = {
  [createPageId("home", "index")]: HomeIndexPage,
  [createPageId("books", "index")]: BooksIndexPage,
  [createPageId("books", "show")]: BooksShowPage,
  [createPageId("books", "new")]: BooksNewPage,
  [createPageId("books", "edit")]: BooksEditPage,
} as const;

const findPage = (
  controllerPath: string,
  actionName: string,
) => {
  const pageId = createPageId(controllerPath, actionName);
  // TODO: TypeScript determines that `pages[pageId]` always returns a value.
  if (pages.hasOwnProperty(pageId) === false) {
    throw new Error(
      `A page for "${controllerPath}#${actionName}" is not defined.`
    );
  }
  return pages[pageId];
};

export const CurrentPage: FC<Props> = ({
  controllerPath,
  actionName,
  csrfParam,
  csrfToken,
  initialData,
}) => {
  const page = findPage(controllerPath, actionName);
  return React.createElement(page, { csrfParam, csrfToken, initialData });
};
