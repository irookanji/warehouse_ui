import { getAllArticles, getAllProducts } from '../api/requests'
import { Product, Article } from '../types'

export const getAllProductsFromAPI = async (): Promise<Product[]> => {
  const products = await getAllProducts()
  const articles = await getAllArticles()

  // Getting merged array of object of Products and Articles for having all the data about Articles in one place
  for (let i = 0; i < products.length; i++) {
    const updatedArticlesInProducts = products[i].articles.map((item: Article) => {
      const foundArticle = articles.find((article: Article) => article.id === item.id)
      return { ...item, name: foundArticle?.name, amountInStock: foundArticle?.amountInStock }
    })
    products[i].articles = updatedArticlesInProducts
  }

  // Calculate amountProductInStock and set new property to products with this value
  for (let i = 0; i < products.length; i++) {
    const amountArticleStockToRequiredArray: number[] = []

    // Calculate for each article in Product how many articlesInStock devide to amountRequired in this Product
    products[i].articles.forEach((item: Article) => {
      const amountArticleStockToRequired = Math.floor(item?.amountInStock / item?.amountRequired)
      amountArticleStockToRequiredArray.push(amountArticleStockToRequired)
    })

    // Calculate minimum quantity of Product in stock by minimum qantity of Articles
    const amountProductInStock = Math.min(...amountArticleStockToRequiredArray)
    products[i].amountInStock = amountProductInStock
  }

  return products
}
