/* dependencies */
import React from 'react'
import assert from 'assert'
/* utils */
import {isObject} from '../utils'

type FlagState = [number, React.Dispatch<React.SetStateAction<number>>]

export default class Controller {
  private flagState?: FlagState
  private state?: any

  /* state management */
  getState() {
    return this.state
  }

  setState(newState: any) {
    assert(isObject(newState), 'initialState should be either object or array.') /* guard */
    this.state = this.parseState(newState)
    return this
  }

  /* flag management */
  getFlagState() {
    return this.flagState
  }

  setFlagState(newFlagState: FlagState) {
    this.flagState = newFlagState
    return this;
  }

  parseState(state: any) {
    /* converting children to proxy object */
    Object.entries(state).forEach(([key, value]) => {
      if (!isObject(value)) return /* guard */
      state[key] = this.convertToProxy(value as object)
      this.parseState(value)
    })
    /* finally, converting parent object to proxy */
    return this.convertToProxy(state)
  }

  convertToProxy(element: object) {
    return new Proxy(element, {
      get: (target: any, name: string) => {
        return target[name]
      },
      set: (obj, prop, newVal) => {
        /* if old value and new value are same, should not update */
        if (obj[prop] === newVal) return true /* guard */
        obj[prop] = newVal
        this.update()
        return true
      }
    })
  }

  update() {
    assert(this.flagState !== undefined, 'FlagState should be defined') /* guard */
    const [_, setFlag] = this.flagState
    setFlag(prev => prev * -1)
  }
}
