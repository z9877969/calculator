import React from "react";
import * as b from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

class Modal extends React.Component {
//   modal = React.createRef(null);

  instance = b.create(`
      <img
        src="https://katun24.ru/sites/default/files/styles/news_full/public/images/c778e4dfad8fec6bbd1d749204e449a6.jpg?itok=3TzfxhpY"
        alt=""
      />
    `);

//   elem = this.instance.element();

  showModal = () => {
    // this.modal.current = this.elem;
    // this.instance.show();
  };

  closeModal = () => {
    this.props.getIsModal(false);
  };

  componentDidMount() {
    this.instance.show();
  }

  componentWillUnmount(){
      this.instance.close();
  }

  render() {
    return <div className="foo" style={{height: "800px"}} onClick={this.closeModal}></div>;
  }
}
export default Modal;
