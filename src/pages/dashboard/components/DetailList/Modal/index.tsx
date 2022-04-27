import { Modal, Button } from 'antd';
import React from 'react';

export type ModalProps = {
  description: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
};

class LinkModal extends React.Component<ModalProps> {
  state = {
    modalVisible: false,
  };

  setModalVisible(modalVisible: boolean) {
    this.setState({ modalVisible });
  }

  render() {
    const { description, title, children } = this.props;
    return (
      <>
        <Button type="link" onClick={() => this.setModalVisible(true)}>
          {description}
        </Button>
        <Modal
          title={title}
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

export default LinkModal;
