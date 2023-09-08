import { useContext } from "react";
import booksContext from "../context/books";

function useBooksContext() {
  return useContext(booksContext);
}

export default useBooksContext;