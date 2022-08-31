import React, { useState, useEffect } from 'react';

class Controller {
  stater;
  trips = new Proxy({
    name: '목포',
    arrival: '2022-02-02',
  }, this.update);

  constructor() {
    return this;
  }

  setStater(stater) {
    this.stater = stater;
  }

  update() {
    if (!this.stater) return; /* guard */
    const [_, setFlag] = this.stater;
    setFlag(prev => prev * -1);
  }
}

const controller = new Controller();

export default function Form() {
  const flagStater = useState(1);
  useEffect(() => {
    controller.setStater(flagStater)
  }, [])
  return <form></form>;
}

// 웹 사이트 -> 회원 가입(네이버 회원 가입)
