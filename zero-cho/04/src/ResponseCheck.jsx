// import React, { Component } from 'react';

// export default class ResponseCheck extends Component {
//   state = {
//     state: 'waiting',
//     message: 'Click to Start',
//     result: []
//   };

//   timeout;
//   startTime;
//   endTime;

//   onClickScreen = () => {
//     const { state, message, result } = this.state;

//     if (state === 'waiting') {
//       this.setState({
//         state: 'ready',
//         message: 'Click When Green Appears'
//       });
//       this.timeout = setTimeout(() => {
//         this.setState({
//           state: 'now',
//           message: 'CLICK!!!!'
//         });
//         this.startTime = new Date();
//       }, Math.ceil(Math.random() * 1000 + 2000));
//     } else if (state === 'ready') {
//       this.setState({
//         state: 'waiting',
//         message: 'Too Early'
//       });
//       clearTimeout(this.timeout);
//     } else if (state === 'now') {
//       this.endTime = new Date();
//       this.setState(prevState => {
//         return {
//           state: 'waiting',
//           message: 'Click When Green Appears',
//           result: [...prevState.result, this.endTime - this.startTime]
//         };
//       });
//     }
//   };

//   renderAverage = () => {
//     const { result } = this.state;
//     return result.length === 0 ? null : (
//       <div>
//         Average time:
//         {this.state.result.reduce((a, c) => a + c) / this.state.result.length}
//         ms
//       </div>
//     );
//   };

//   render() {
//     const { state, message } = this.state;

//     return (
//       <>
//         <div id="screen" className={state} onClick={this.onClickScreen}>
//           {message}
//         </div>
//         {this.renderAverage()}
//       </>
//     );
//   }
// }

import React, { useState, useRef, createRef } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('Click');
  const [result, setResult] = useState([]);
  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <div>
        Average time:
        {result.reduce((a, c) => a + c) / result.length}
        ms
      </div>
    );
  };

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('Click When Green Appears');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('CLICK!!!');
        startTime.current = new Date();
      }, Math.ceil(Math.random() * 1000 + 2000));
    } else if (state === 'ready') {
      setState('waiting');
      setMessage('Too Early');
      clearTimeout(timeout);
    } else if (state === 'now') {
      endTime.current = new Date();
      setState('waiting');
      setMessage('Click');
      console.log('start: ' + startTime);
      console.log(endTime);
      setResult(prevResult => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
