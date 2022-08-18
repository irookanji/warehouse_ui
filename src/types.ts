export type Product = {
  id: string
  name: string
  articles: Article[]
  amountInStock?: number
}

export type Article = {
  id: string
  name?: string
  amountRequired: number
  amountInStock: number
}
