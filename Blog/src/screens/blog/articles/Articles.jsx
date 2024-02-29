import React from 'react';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard';
import FilterArticles from './FilterArticles';




class Articles extends React.Component {
  render() {
    const articles = FilterArticles(this.props.articles, this.props.filters);
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {articles.map(article => <div key={article.id}><ArticleCard {...article}/></div>)}
        </div>
    )   
  }
}

const mapStateToProps = (state) => state.articles

export default connect(mapStateToProps, null)(Articles);
