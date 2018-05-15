import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../logo.png';
import * as actions from '../../actions/auth';
import './Header.css';
import client from '../../client';


class Header extends Component {
  state = {
      currentUser: {}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {
      client.get('/current-user')
          .then(res => {
              this.setState({ currentUser: {...res.data.user} });
              console.log('NAME', this.state.currentUser);
          });
  }

  render() {
      const { activeItem, currentUser } = this.state;
      const { isAuthenticated, logout, currentUserId } = this.props;
      let userId = currentUserId?currentUserId:''; 

      return (
          <Menu fixed='top'>
              <Menu.Item
                  name='home'
                  position='left'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                  href='/'
              >
                  <img src={logo} alt="Home"/>
              </Menu.Item>

              <Menu.Menu position='right'>
                  <Menu.Item
                      name='browse-events'
                      color='orange'
                      active={activeItem === 'browse-events'}
                      onClick={this.handleItemClick}
                      href='/events'
                  >
            browse events
                  </Menu.Item>

                  <Menu.Item
                      name='create-events'
                      color='orange'
                      active={activeItem === 'create-events'}
                      onClick={this.handleItemClick}
                      href='/event/new'
                  >
            create event
                  </Menu.Item>
                  { isAuthenticated?
                      <Dropdown item text={currentUser.user_name}>
                          <Dropdown.Menu>
                              <Menu.Item
                                  name='my-events'
                                  color='orange'
                                  active={activeItem === 'my-events'}
                                  onClick={this.handleItemClick}
                                  href={`/user/${userId}/events`}
                              >
                            MY EVENTS
                              </Menu.Item>
                              <Menu.Item
                                  name='rsvp'
                                  color='orange'
                                  active={activeItem === 'rsvp'}
                                  onClick={this.handleItemClick}
                                  href='/rsvp'
                              >
                            RSVP'D EVENTS
                              </Menu.Item>
                              <Menu.Item
                                  name='reset-password'
                                  color='orange'
                                  active={activeItem === 'reset-password'}
                                  onClick={this.handleItemClick}
                                  href='/reset-password'
                              >
                            RESET PASSWORD
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
                      href={'/search/events'}
                  >
                search events
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
                          href='/login'
                      >
                  login
                      </Menu.Item>
                  }
              </Menu.Menu>
          </Menu>
      );
  }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.auth_token,
        currentUserId: state.auth.user.sub
    };
}; 

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    currentUserId: PropTypes.number.isRequired
};

export default connect(mapStateToProps, { logout: actions.logout })(Header);