// src/components/BookCard.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
      onClick={() => navigate(`/book/${book.id}`)}
    >
      <img src={book.cover} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
      </div>
    </motion.div>
  );
}
