import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../logo.png';
import * as actions from '../../actions/auth';

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state;
      const { isAuthenticated, logout } = this.props;

      return (
          <Menu>
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
            Browse Events
                  </Menu.Item>

                  <Menu.Item
                      name='create-events'
                      color='orange'
                      active={activeItem === 'create-events'}
                      onClick={this.handleItemClick}
                      href='/event/new'
                  >
            Create Event
                  </Menu.Item>
                  { isAuthenticated?
                      <Menu.Item
                          name='logout'
                          color='orange'
                          onClick={() => logout()}
                      >
                  Logout
                      </Menu.Item>
                      :
                      <Menu.Item
                          name='login'
                          color='orange'
                          active={activeItem === 'login'}
                          onClick={this.handleItemClick}
                          href='/login'
                      >
                  Login
                      </Menu.Item>
                  }
              </Menu.Menu>
          </Menu>
      );
  }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.auth_token
    };
}; 

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout: actions.logout })(Header);