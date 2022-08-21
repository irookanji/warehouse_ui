import { getAllArticles, getAllProducts } from '../api/requests'
import { Product, Article } from '../types'

export const getAllProductsFromAPI = async (): Promise<Product[]> => {
  const products = await getAllProducts()
  const articles = await getAllArticles()

  const copyProducts = JSON.parse(JSON.stringify(products))
  const copyArticles = JSON.parse(JSON.stringify(articles))

  for (let i = 0; i < copyProducts.length; i++) {
    const updatedArticlesInProducts = copyProducts[i].articles.map((item: Article) => {
      const foundArticle = copyArticles.find((article: Article) => article.id === item.id)
      return { ...item, name: foundArticle?.name, amountInStock: foundArticle?.amountInStock }
    })
    copyProducts[i].articles = updatedArticlesInProducts
  }
  for (let i = 0; i < copyProducts.length; i++) {
    const amountArticleStockToRequiredArray: number[] = []

    copyProducts[i].articles.forEach((item: Article) => {
      const amountArticleStockToRequired = Math.floor(item?.amountInStock / item?.amountRequired)

      amountArticleStockToRequiredArray.push(amountArticleStockToRequired)
    })

    const amountProductInStock = Math.min(...amountArticleStockToRequiredArray)
    copyProducts[i].amountInStock = amountProductInStock
  }

  return copyProducts
}
