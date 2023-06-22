import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Flex from "../layout/Flex";
import axios from "axios";
const CreateModal = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setModalShow(false);
    axios
      .post("http://localhost:8000/api/create-company-template", {
        company_name: e.target[0].value,
        template: e.target[1].value,
      })
      .then(function (response) {
        axios
          .get("http://localhost:8000/api/get-all-company-template")
          .then(function ({ data }) {
            props.setData(data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onHide = () => {
    setModalShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create
      </Button>

      <Modal
        show={modalShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="company"
                aria-describedby="emailHelp/"
                placeholder="Input your company"
              />
            </div>
            <div className="mb-4">
              <select
                defaultValue={"DEFAULT"}
                className="custom-select"
                id="inputGroupSelect01"
              >
                <option value={"DEFAULT"} disabled>
                  Choose Template...
                </option>
                <option value="smartadmin">Smart Admin</option>
                <option value="sbadmin">SB Admin</option>
              </select>
            </div>

            <Flex content={"end"} className={"gap-5"}>
              <Button onClick={() => onHide()}>Close</Button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Flex>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateModal;
