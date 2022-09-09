import Api from '../Api'

export default class BasicService {
  protected readonly api: Api

  constructor(path: string) {
    this.api = new Api(path)
  }
}