import axios, {AxiosInstance, AxiosResponse} from 'axios'

export default class Api {
  private readonly axiosInstance: AxiosInstance

  constructor(path: string) {
    this.axiosInstance = axios.create({baseURL: path})
    this.axiosInstance.interceptors.response.use((res: AxiosResponse) => res?.data)
  }

  get(path: string, params?: any): Promise<any> {
    return this.axiosInstance.get(path, params)
  }

  post(path: string, data?: any): Promise<any> {
    return this.axiosInstance.post(path, data)
  }

  delete(path: string, data?: any): Promise<any> {
    return this.axiosInstance.delete(path, data)
  }
}