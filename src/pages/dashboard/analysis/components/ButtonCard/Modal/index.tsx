import { Modal, Button } from 'antd';
import React from "react";

export type ModalProps = {
  description: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

class CardModal extends React.Component<ModalProps> {

  state = {
    modalVisible: false,
  };

  setModalVisible(modalVisible: boolean) {
    this.setState({ modalVisible });
  }

  render() {
    const { description, icon, children } = this.props;
    return (
      <>
        <Button type="default" shape="round" icon={icon} block onClick={() => this.setModalVisible(true)}>
          {description}
        </Button>
        <Modal
          title="modal dialog"
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          {children}
        </Modal>
      </>
    );
  }
}

export default CardModal;
