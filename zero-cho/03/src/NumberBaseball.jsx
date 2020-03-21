import React from 'react';
import Try from './Try';

export default class NumberBaseball extends React.Component {
  state = {
    result: '',
    value: '',
    answer: this.getNumbers(),
    tries: []
  };

  getNumbers() {
    const numbers = new Array();

    while (numbers.length < 4) {
      const number = Math.ceil(Math.random() * 9);
      const isNumberIncluded = numbers.includes(number);
      if (!isNumberIncluded) {
        numbers.push(number);
      }
    }
    return numbers;
  }
  onSubmitForm = e => {
    e.preventDefault();
    const { value, tries, answer } = this.state;
    let balls = 0;
    let strikes = 0;

    for (let i = 0; i < answer.length; i++) {
      if (parseInt(value[i]) === answer[i]) {
        strikes++;
      } else if (answer.includes(parseInt(value[i]))) {
        balls++;
      }
    }

    if (strikes === 4) {
      this.setState({ result: 'Homerun!!' });
    } else {
      this.setState({ result: `Strikes: ${strikes}, Balls: ${balls}` });
      tries.push(value);
    }

    this.setState({ value: '' });
    this.input.focus();
  };

  onChangeInput = e => {
    this.setState({ value: e.target.value });
  };

  input;

  createRefInput = c => {
    this.input = c;
  };

  render() {
    return (
      <div>
        <h1>{this.state.answer}</h1>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.createRefInput}
            type="number"
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button type="submit">Enter</button>
        </form>
        <div>tries: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((try1, index) => {
            return <Try try1={try1} key={index} />;
          })}
        </ul>
      </div>
    );
  }
}
