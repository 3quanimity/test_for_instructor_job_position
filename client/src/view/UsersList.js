import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { FaPlusSquare, FaBaby } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Components
import SearchBar from '../components/SearchBar';
import UserHolder from '../components/UserHolder';
import AddUserModal from '../components/AddUserModal';

//  API on mockable
const usersAPI =
  'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';

class UserList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      searchText: '',
      searchResult: [],
      userList: [],
      show: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.returnUserList = this.returnUserList.bind(this);
  }

  // UserList Logic

  handleSearch(searchText) {
    this.setState({ searchResult: [], searchText: searchText });
    this.state.userList.map(user => {
      if (searchUser(user, searchText)) {
        this.setState(prevState => ({
          searchResult: [...prevState.searchResult, user]
        }));
      }
    });
  }

  componentWillMount() {
    let init = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(usersAPI, init)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          userList: [...data.contacts]
        }))
      );
  }

  returnUserList() {
    return this.state.searchText
      ? this.state.searchResult
      : this.state.userList;
  }

  //  UI Logic
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        {/* fluid Grid */}
        <Container fluid>
          <Row>
            <Col sm={{ size: 8, offset: 2 }}>
              {/* Search bar*/}
              <SearchBar onSearch={this.handleSearch} />
            </Col>
            <Col sm={{ size: 1 }}>
              <Button onClick={this.handleShow}>
                <FaPlusSquare />
              </Button>
            </Col>
          </Row>

          <Row>
            <Col sm={{ size: 8, offset: 2 }}>
              {/* Modal window hidden by default*/}
              <AddUserModal show={this.state.show} onClose={this.handleClose} />

              {/* User list*/}
              <h1>Users List</h1>
              <ListGroup>
                {this.returnUserList().map(user => (
                  <ListGroupItem key={user.email} className='list-group-item'>
                    <UserHolder user={user} />
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 8, offset: 3 }}>
              <Link to='/changeMeToDynamicID'>
                <Button>
                  <FaBaby />
                  {
                    " I'm not supposed to be here but click me for now to go to an awesome gallery viewer with a modal"
                  }
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// Search User Logic
const searchUser = (user, searchText) =>
  user.name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  user.surName.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  user.birthPlace.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
  user.birthYear.toString().search(searchText) !== -1;

export default UserList;
