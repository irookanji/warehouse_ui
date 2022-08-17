export type Product = {
  id: string
  name: string
  articles: Article[]
}

export type Article = {
  id: string
  name?: string
  amountRequired?: number
  amountInStock?: number
}
