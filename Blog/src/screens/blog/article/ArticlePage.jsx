import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Article from './Layout';
import ArticleNotFound from './NotFoundLayout';

const ArticlePage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id, 10));

  return (
    <div className="container mt-5">
      {article ? <Article {...article}/>: <ArticleNotFound/>}
    </div>
  );
};

const mapStateToProps = state => state.articles;

export default connect(mapStateToProps)(ArticlePage);
