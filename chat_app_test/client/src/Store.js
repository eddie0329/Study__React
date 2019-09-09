import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();



const initState = {
    general: [
        {from: 'eddie', msg: 'hi'},
        {from: 'john', msg: 'hi'},
        {from: 'sam', msg: 'hi'},
    ],
    topic2: [
        {from: 'jerald', msg: 'hi'},
        {from: 'daniel', msg: 'hi'},
        {from: 'roy', msg: 'hi'},
    ]

}

function reducer(state, action) {
    const { from, msg, topic } = action.payload; 

  switch (action.type) {
    case 'RECIEVE_MESSAGE':
      return {
            ...state,
            [topic]: [
                ...state[topic],
                {
                    from: from,
                    msg: msg
                }
            ]

            
      };
    default:
        return state;
  }
}
let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}

export default function Store(props) {
    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if(!socket) {
        socket = io("http://localhost:5002");
        socket.on('chat message', function(msg){
            dispatch({type: "RECIEVE_MESSAGE", payload: msg});
        });
    }

    const user = 'eddie' + Math.random(100). toFixed(2);


  return <CTX.Provider value={{allChats, sendChatAction, user}}>{props.children}</CTX.Provider>;
}
