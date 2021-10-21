import React from 'react'
import { Modal } from 'antd'

interface props {
  title: string;
  visible: boolean;
  okText?: string;
  cancelText?: string;
  onOk: () => void;
  onCancel: () => void;
}

const CustomerModal: React.FC<props> = ({ children, title,visible, okText, cancelText, onOk, onCancel }) => {
  return (
    <Modal
      title={title}
      visible={visible}
      okText={okText ?? '確定'}
      cancelText={cancelText ?? '取消'}
      onOk={onOk}
      onCancel={onCancel}
    >
      {children}
    </Modal>
  )
}

export default CustomerModal
