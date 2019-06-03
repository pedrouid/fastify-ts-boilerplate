import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'https://example.com/',
  timeout: 30000, // 30 secs
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export async function apiGetFile (fileName: string) {
  const url = `/file/${fileName}`
  const result = await api.get(url)
  return result
}

export async function apiPostFile (fileName: string, data: any) {
  const url = `/file/${fileName}`
  const result = await api.post(url, { data })
  return result
}
