import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import axios from 'axios';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/articles')
      .then(res => setArticles(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Latest IT News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
