import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // dummy books or fetch from /api/books/
    setBooks([
      { id: 1, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", cover: "/covers/wings.jpg" },
      // ...
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map(b => <BookCard key={b.id} book={b} />)}
    </div>
  );
}
