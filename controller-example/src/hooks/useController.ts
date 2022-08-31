import {useState} from 'react'
import Controller from '../controllers/Controller';

export const useController = <T>(initialState: any) => {
  const flagState = useState<number>(1)
  const [controller] = useState<Controller>(new Controller(initialState).setFlagState(flagState))
  return {
    state: controller.getState() as T,
  }
}