import axios, {AxiosInstance} from 'axios'
import assert from 'assert'

class Api {
  private readonly axiosInstance?: AxiosInstance

  constructor(path: string) {
    this.axiosInstance = axios.create({baseURL: path})
  }

  get(path: string, params: any): Promise<any> {
    assert(this.axiosInstance !== undefined)
    return this.axiosInstance.get(path, params)
  }
}