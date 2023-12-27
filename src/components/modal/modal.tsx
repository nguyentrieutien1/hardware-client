import { ReactElement } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface AppModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
  title: string;
  content: ReactElement
}
export function AppModal(props: AppModalProps) {
  const { modalIsOpen, closeModal, title, content, onConfirm } = props;
  return (
    <>
      <Modal show={modalIsOpen} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal()}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => onConfirm()}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
