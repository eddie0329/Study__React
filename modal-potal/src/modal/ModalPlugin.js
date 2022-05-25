class ModalPlugin {
  modalRoot;

  setModalRoot() {
    const root = document.createElement('div');
    root.id = 'modal-root';
    document.body.append(root);
    this.modalRoot = root;
  }

  getModalRoot() {
    if (!this.modalRoot) this.setModalRoot();
    return this.modalRoot;
  }

  setModalContainer(temp) {
    console.log(temp);
  }
}

const modalPlugin = new ModalPlugin();

export default modalPlugin;
