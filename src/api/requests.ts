import axios from 'axios'

const url = 'http://localhost:7000'

type CreateSaleResponse = {
  id: string
  createdAt: string
  productId: string
  amountSold: number
}

type CreateSaleRequest = {
  productId: string
  amountSold: number
}

export async function getAllProducts() {
  const response = await axios.get(`${url}/products/`)
  return response.data
}

export async function getAllArticles() {
  const response = await axios.get(`${url}/articles`)
  return response.data
}

export async function addNewSale(data: CreateSaleRequest): Promise<CreateSaleResponse> {
  const response = await axios.post(`${url}/sales`, data)
  return response.data
}
