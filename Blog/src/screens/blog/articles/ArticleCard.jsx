import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, image_url, price, created_date }) => {
  return (
    <div key={id} className="card mx-2 mb-3" style={{ width: '24rem' }}>
      <img src={image_url} className="card-img-top" alt="Product" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="text-muted">
          <small>Дата создания:</small> {created_date}
        </p>
        <p className="card-text">
          <strong>Цена:</strong> {price}$
        </p>
        <Link to={`${id}`} className="btn btn-danger">
          Посмотреть
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
