import React from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import { FaFileImage, FaEdit, FaBomb } from 'react-icons/fa';

const UserHolder = ({ user }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={'auto'}>
          <span> {user.name}</span>
        </Col>
        <Col xs={'auto'}>
          <span> {user.surName}</span>
        </Col>
        <Col xs={'auto'}>
          <span> {user.birthYear}</span>
        </Col>
        <Col xs={'auto'}>
          <span> {user.birthPlace}</span>
        </Col>

        <Col xs={'auto'}>
          <Button color='default'>
            <FaFileImage />
          </Button>
          <Button color='default'>
            <FaEdit />
          </Button>
          <Button color='default'>
            <FaBomb />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserHolder;
