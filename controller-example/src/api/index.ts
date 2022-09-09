import TodoService from './modules/TodoService';

class ServiceManager {
  private serviceMap = new Map()

  getService(serviceName: string, service: any) {
    if (!this.serviceMap.get(serviceName)) this.serviceMap.set(serviceName, service)
    return this.serviceMap.get(serviceName)
  }

  get todo() {
    return this.getService('todo', new TodoService())
  }
}

/* SingleTon */
const service = new ServiceManager()

export default service