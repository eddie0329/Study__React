import React from 'react'
import assert from 'assert'

type FlagState = [number, React.Dispatch<React.SetStateAction<number>>]

export default class Controller {
  private flagState?: FlagState
  private state?: any

  constructor(initialState: any) {
    this.state = new Proxy(initialState, {
      get: (target: any, name: string) => {
        return target[name]
      },
      set: (obj, prop, newVal) => {
        obj[prop] = newVal
        this.update()
        return true
      }
    })
  }

  /* state management */
  getState() {return this.state}
  setState(newState: any) {
    this.state = newState
    return this
  }

  /* flag management */
  getFlagState() {return this.flagState}
  setFlagState(newFlagState: FlagState) {
    this.flagState = newFlagState
    return this;
  }

  update() {
    assert(this.flagState !== undefined, 'FlagState should be defined') /* guard */
    const [_, setFlag] = this.flagState
    setFlag(prev => prev * -1)
  }
}