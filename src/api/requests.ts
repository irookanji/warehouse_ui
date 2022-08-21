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

type PatchArticlesRequest = { id: string; amountToSubtract: number }[]

type PatchArticlesResponse = { id: string; name: string; amountToSubtract: number }[]

export async function getAllProducts() {
  try {
    const retries = 3
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(`${url}/products`)
        return response.data
      } catch (error) {
        console.log('cannot fetch Products data')
      }
    }
  } catch (e) {
    console.log(e)
  }
}

export async function getAllArticles() {
  try {
    const retries = 3
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(`${url}/articles`)
        return response.data
      } catch (error) {
        console.log('cannot fetch Articles data')
      }
    }
  } catch (e) {
    console.log(e)
  }
}

export async function postSale(data: CreateSaleRequest): Promise<CreateSaleResponse | undefined> {
  try {
    const retries = 3
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.post(`${url}/sales`, data)
        return response.data
      } catch (error) {
        console.log('cannot post Sales data')
      }
    }
  } catch (e) {
    console.log(e)
  }
}

export async function patchBulkArticles(
  data: PatchArticlesRequest,
): Promise<PatchArticlesResponse> {
  const response = await axios.patch(`${url}/articles`, data)
  return response.data
}
