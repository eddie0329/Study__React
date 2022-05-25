import React from 'react';
class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      modals: [],
    };
  }

  // TODO: Need Install
  componentDidMount() {
    if (!window) return;
    window._modalContainer = this;
  }

  getModal(id) {
    return this.state.modals.find(modal => modal.id === id);
  }

  close(id) {
    this.setState({ modals: this.state.modals.filter(modalInfo => modalInfo.id !== id ) })
  }

  resolve(id, result) {
    this.getModal(id).resolve(result);
    this.close(id);
  }

  reject(id, result) {
    this.getModal(id).reject(result);
    this.close(id);
  }

  push(modalComponent, options = {}) {
    return new Promise((resolve, reject) => {
      this.setState({ modals: [{ Component: modalComponent, resolve, reject, options, id: this.state.id, }, ...this.state.modals ]})
      this.setState({ id: this.state.id + 1 });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.modals.map(({Component, id, options}) => 
            <Component 
              key={id}
              options={options}
              resolve={(result) => this.resolve(id, result)}
              reject={(result) => this.reject(id, result)}
              close={() => this.close(id)}
            />)
        }
      </div>
    );
  }
}

export default ModalContainer;