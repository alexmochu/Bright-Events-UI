import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.png';
import './Header.css';


class Header extends Component {
    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state;
      const { isAuthenticated, logout, currentUserId, userName } = this.props;
      let userId = currentUserId?currentUserId:''; 

      return (
          <Menu fixed='top'>
              <NavLink to='/'exact>
                  <Menu.Item>
                      <img src={logo} alt='Home'/>
                  </Menu.Item>
              </NavLink>
              <Menu.Menu position='right'>
                  <Menu.Item
                      name='browse-events'
                      color='orange'
                      active={activeItem === 'browse-events'}
                      onClick={this.handleItemClick}
                  >
                      <NavLink to='/events'>
            browse events
                      </NavLink>
                  </Menu.Item>

                  <Menu.Item
                      name='create-events'
                      color='orange'
                      active={activeItem === 'create-events'}
                      onClick={this.handleItemClick}
                  >
                      <NavLink to='/event/new'>
            create event
                      </NavLink>
                  </Menu.Item>
                  { isAuthenticated?
                      <Dropdown item text={userName}>
                          <Dropdown.Menu>
                              <Menu.Item
                                  name='my-events'
                                  color='orange'
                                  active={activeItem === 'my-events'}
                                  onClick={this.handleItemClick}
                              >
                                  <NavLink to={`/user/${userId}/events`}>
                            MY EVENTS
                                  </NavLink>
                              </Menu.Item>
                              <Menu.Item
                                  name='rsvp'
                                  color='orange'
                                  active={activeItem === 'rsvp'}
                                  onClick={this.handleItemClick}
                              >
                                  <NavLink to='/rsvp'>
                            RSVP'D EVENTS
                                  </NavLink>
                              </Menu.Item>
                              <Menu.Item
                                  name='reset-password'
                                  color='orange'
                                  active={activeItem === 'reset-password'}
                                  onClick={this.handleItemClick}
                              >
                                  <NavLink to='/request-password-reset'>
                            RESET PASSWORD
                                  </NavLink>
                              </Menu.Item>
                          </Dropdown.Menu>
                      </Dropdown>:
                      ''
                  }
                  <Menu.Item
                      name='search-events'
                      color='orange'
                      active={activeItem === 'search-events'}
                      onClick={this.handleItemClick}
                  >
                      <NavLink to='/search/events'>
                search events
                      </NavLink>
                  </Menu.Item>
                  { isAuthenticated?
                      <Menu.Item
                          name='logout'
                          color='orange'
                          onClick={() => logout()}
                      >
                  logout
                      </Menu.Item>
                      :
                      <Menu.Item
                          name='login'
                          color='orange'
                          active={activeItem === 'login'}
                          onClick={this.handleItemClick}
                      >
                          <NavLink to='/login'>

                  login
                          </NavLink>
                      </Menu.Item>
                  }
              </Menu.Menu>
          </Menu>
      );
  }
}

// typechecking validation
Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    currentUserId: PropTypes.number,
    userName: PropTypes.string
};

export default Header;