import {useState, useEffect} from 'react'
import Controller from '../controllers/Controller';

export const usePromiseController = <T>(promiseFunc: () => Promise<T>) => {
  const flagState = useState<number>(1)
  const [controller] = useState<Controller>(new Controller().setFlagState(flagState))
  const [loading, setLoading] = useState<boolean>(false)

  const fetch = async () => {
    setLoading(true)
    const state = await promiseFunc()
    controller?.setState(state)
    setLoading(false)
  }

  useEffect(() => {
    fetch().then(_ => _)
  }, [])

  return {
    reFetch: fetch,
    loading,
    state: controller?.getState() as T,
  }
}

export const useBasicController = <T>(initialState: T) => {
  const flagState = useState<number>(1)
  const [controller] = useState<Controller>(new Controller().setState(initialState).setFlagState(flagState))
  return {
    state: controller.getState() as T,
  }
}