const articles = require("./data.js");


function filtrerArticles(articles, criteria) {
    return articles.filter(article => {
      if (criteria.minPrice !== undefined && article.price < criteria.minPrice) {
        return false;
      }
      if (criteria.maxPrice !== undefined && article.price > criteria.maxPrice) {
        return false;
      }
      if (criteria.category !== undefined && article.category !== criteria.category) {
        return false;
      }
      if (criteria.keyword !== undefined && !article.title.toLowerCase().includes(criteria.keyword.toLowerCase())) {
        return false;
      }
  
      return true;
    });
  }
  
// Exemple d'utilisation
const filters = {
    category: "Livre",
    minPrice: 13,
    keyword: "roman"
};

const results = filtrerArticles(articles, filters);

console.log(JSON.stringify(results, null, 2));

