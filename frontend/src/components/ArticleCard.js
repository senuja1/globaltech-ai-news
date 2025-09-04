import React from 'react';

function ArticleCard({ article }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{article.title}</h3>
      <p className="text-gray-700 mt-2">{article.summary || article.content.slice(0, 100) + '...'}</p>
    </div>
  );
}

export default ArticleCard;
