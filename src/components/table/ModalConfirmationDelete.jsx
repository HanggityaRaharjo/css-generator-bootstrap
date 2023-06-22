import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Grid from "../layout/Grid";
import Col from "../layout/Col";

const ModalConfirmationDelete = ({
  company,
  code,
  templateName,
  templateImage,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ width: "100px" }}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete this data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Col column={2}>Company</Col>
            <Col column={1}>: </Col>
            <Col column={8}>{company}</Col>
          </Grid>
          <Grid>
            <Col column={2}>Code</Col>
            <Col column={1}>: </Col>
            <Col column={8}>{code}</Col>
          </Grid>
          <Grid>
            <Col column={2}>Template</Col>
            <Col column={1}>: </Col>
            <Col column={8}>{templateName}</Col>
          </Grid>
          <Grid>
            <Col column={2}></Col>
            <Col column={1}></Col>
            <Col column={8}>
              <img src={templateImage} width={"100px"} alt={templateName} />
            </Col>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirmationDelete;
