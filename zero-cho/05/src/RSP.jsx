const rspCoords = {
  rock: '0',
  scissor: '-142px',
  paper: '-284px'
};

const scores = {
  scissor: 1,
  rock: 0,
  paper: -1
};

const computerChoice = imgCoord => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};
import React, { useState, useRef, useEffect } from 'react';

const RSP = () => {
  const [imgCoord, setImgCoord] = useState('0');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      if (imgCoord === rspCoords.rock) {
        setImgCoord(rspCoords.scissor);
      } else if (imgCoord === rspCoords.scissor) {
        setImgCoord(rspCoords.paper);
      } else if (imgCoord === rspCoords.paper) {
        setImgCoord(rspCoords.rock);
        console.log(3);
      }
    }, 100);

    return () => {
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const onClickBtn = choice => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('draw');
    } else if ([-1, 2].includes(diff)) {
      setResult('win');
      setScore(prevState => {
        return prevState + 1;
      });
    } else {
      setResult('lose');
      setScore(prevState => {
        return prevState - 1;
      });
    }
    setTimeout(() => {
      interval.current = setInterval(() => {
        if (imgCoord === rspCoords.rock) {
          setImgCoord(rspCoords.scissor);
        } else if (imgCoord === rspCoords.scissor) {
          setImgCoord(rspCoords.paper);
        } else if (imgCoord === rspCoords.paper) {
          setImgCoord(rspCoords.rock);
        }
      }, 100);
    }, 1000);
  };

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`
        }}
      ></div>
      <div>
        <button id="rock" className="btn" onClick={() => onClickBtn('rock')}>
          Rock
        </button>
        <button
          id="scissor"
          className="btn"
          onClick={() => onClickBtn('scissor')}
        >
          Scissor
        </button>
        <button id="paper" className="btn" onClick={() => onClickBtn('paper')}>
          Paper
        </button>
        <div>{result}</div>
        <div>Score: {score}</div>
      </div>
    </>
  );
};

export default RSP;

// import React, { Component } from 'react';

// const computerChoice = imgCoord => {
//   return Object.entries(rspCoords).find(function(v) {
//     return v[1] === imgCoord;
//   })[0];
// };

// class RSP extends Component {
//   state = {
//     imgCoord: '0',
//     result: '',
//     score: 0
//   };

//   interval;

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       const { imgCoord } = this.state;
//       if (imgCoord === rspCoords.rock) {
//         this.setState({ imgCoord: rspCoords.scissor });
//       } else if (imgCoord === rspCoords.scissor) {
//         this.setState({ imgCoord: rspCoords.paper });
//       } else if (imgCoord === rspCoords.paper) {
//         this.setState({ imgCoord: rspCoords.rock });
//       }
//     }, 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   onClickBtn = choice => {
//     clearInterval(this.interval);
//     const { imgCoord } = this.state;
//     const myScore = scores[choice];
//     const cpuScore = scores[computerChoice(imgCoord)];
//     const diff = myScore - cpuScore;
//     if (diff === 0) {
//       this.setState({
//         result: 'draw'
//       });
//     } else if ([-1, 2].includes(diff)) {
//       this.setState(prevState => {
//         return {
//           result: 'win',
//           score: prevState.score + 1
//         };
//       });
//     } else {
//       this.setState(prevState => {
//         return {
//           result: 'lose',
//           score: prevState.score - 1
//         };
//       });
//     }
//     setTimeout(() => {
//       this.interval = setInterval(() => {
//         const { imgCoord } = this.state;
//         if (imgCoord === rspCoords.rock) {
//           this.setState({ imgCoord: rspCoords.scissor });
//         } else if (imgCoord === rspCoords.scissor) {
//           this.setState({ imgCoord: rspCoords.paper });
//         } else if (imgCoord === rspCoords.paper) {
//           this.setState({ imgCoord: rspCoords.rock });
//         }
//       }, 100);
//     }, 1000);
//   };

//   onClickHello = msg => {
//     console.log(msg);
//   };

//   render() {
//     const { imgCoord, result, score } = this.state;
//     return (
//       <>
//         <div
//           id="computer"
//           style={{
//             background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`
//           }}
//         ></div>
//         <div>
//           <button
//             id="rock"
//             className="btn"
//             onClick={() => this.onClickBtn('rock')}
//           >
//             Rock
//           </button>
//           <button
//             id="scissor"
//             className="btn"
//             onClick={() => this.onClickBtn('scissor')}
//           >
//             Scissor
//           </button>
//           <button
//             id="paper"
//             className="btn"
//             onClick={() => this.onClickBtn('paper')}
//           >
//             Paper
//           </button>
//           <div>{result}</div>
//           <div>Score: {score}</div>
//         </div>
//         <button onClick={() => this.onClickHello('hello')}>hello</button>
//       </>
//     );
//   }
// }

// export default RSP;
