// src/components/NewsFeed.js
import React, { useEffect, useState } from 'react';
import newsService from '../services/newsService';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch news articles on component mount
    const fetchArticles = async () => {
      const newsData = await newsService.getNews();
      setArticles(newsData);
    };
    fetchArticles();
  }, []);

  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      {articles.length ? (
        articles.map((article, index) => (
          <div key={index} className="news-article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <small>{new Date(article.publishedAt).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>No news articles available at the moment.</p>
      )}
    </div>
  );
};

export default NewsFeed;
