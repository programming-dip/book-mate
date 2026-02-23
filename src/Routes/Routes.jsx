import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Pages/Root/Root';
import ErrorPage from '../Components/Pages/ErrorPage/ErrorPage';
import Home from '../Components/Pages/Home/Home';
import BookDetails from '../Components/Pages/BookDetails/BookDetails';
import ListedBooks from '../Components/Pages/ListedBooks/ListedBooks';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      index: true,
      loader: async () => fetch('/booksData.json'),
      Component: Home
    },
    {
      path: '/bookDetails/:id',
      loader: async()=> fetch('/booksData.json'),
      Component: BookDetails
    },
    {
      path: '/listedBooks',
      loader: async()=> fetch('/booksData.json'),
      Component:ListedBooks,
    }
  ]
  },
]);