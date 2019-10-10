import {
  FormGroup,
  Form,
  Col,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import React from 'react';

const AddUserModal = props => {
  console.log(props);
  return (
    <Modal isOpen={props.show} toggle={props.onClose}>
      <ModalHeader toggle={props.onClose}>Add User</ModalHeader>

      <ModalBody>
        <Form>
          <FormGroup row>
            <Label sm={2}> Name </Label>
            <Col sm={10}>
              <Input type='text' placeholder='Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Surname</Label>

            <Col sm={10}>
              <Input type='text' placeholder='Surname' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Birth Year</Label>
            <Col sm={10}>
              <Input type='text' placeholder='Birth Year' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Birth Place</Label>
            <Col sm={10}>
              <Input type='text' placeholder='Birth Place' />
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color='success' type='submit'>
          Add
        </Button>

        <Button onClick={props.onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddUserModal;
