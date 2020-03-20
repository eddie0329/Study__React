const React = require('react');
const { Component } = React;

// class WordRelay extends Component {
//   state = {
//     word1: 'hello',
//     word2: ''
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     if (this.state.word1[this.state.word1.length - 1] === this.state.word2[0]) {
//       this.input.focus();
//       this.setState({ word1: this.state.word2 });
//       this.setState({ word2: '' });
//     } else {
//       this.setState({ word2: '' });
//       this.input.focus();
//     }
//   };

//   onChangeInput = e => {
//     this.setState({ word2: e.target.value });
//   };

//   input;

//   onRefInput = c => {
//     this.input = c;
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.word1}</h1>
//         <form onSubmit={this.onSubmit}>
//           <input
//             ref={this.onRefInput}
//             type="text"
//             value={this.state.word2}
//             onChange={this.onChangeInput}
//           />
//           <button type="submit">Enter</button>
//         </form>
//       </>
//     );
//   }
// }

// react hooks
const { useState, createRef } = React;

const WordRelay = () => {
  const [word1, setWord1] = useState('hello');
  const [word2, setWord2] = useState('');
  const inputRef = createRef();

  const onSubmit = e => {
    e.preventDefault();
    if (word1[word1.length - 1] === word2[0]) {
      setWord1(word2);
      setWord2('');
      inputRef.current.focus();
    } else {
      setWord2('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = e => {
    setWord2(e.target.value);
  };

  return (
    <>
      <h1>{word1}</h1>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={word2}
          onChange={onChangeInput}
        />
        <button type="submit">Enter</button>
      </form>
    </>
  );
};

module.exports = WordRelay;
