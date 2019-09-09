import React from 'react';
import './App.css';
import { addTodo } from './action';
import { connect } from 'react-redux';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{JSON.stringify(this.props.todos)}</p>
          <Button add={ this.props.add } />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    add: text => {
      dispatch(addTodo(text));
    },
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;