function FilterArticles(articles, {title, maxPrice, minPrice, publicationDate}){
    if (title != ''){
        articles = articles.filter(function (article) {
            return article.title.toLowerCase().includes(title.toLowerCase())
        });
      }
  
      if (minPrice != ''){
        articles = articles.filter(function (article) {
            return article.price >= minPrice
        });
      }
  
      if (maxPrice != ''){
        articles = articles.filter(function (article) {
          return article.price <= maxPrice
        });
      }

      if (publicationDate != ''){
        articles = articles.filter(function (article) {
            return publicationDate == article.created_date;
        });
      }
  
    return articles;
}

export default FilterArticles;
