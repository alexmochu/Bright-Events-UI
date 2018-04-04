import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          position='left'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          href='/'
        >
          <img src="http://pngimg.com/uploads/letter_b/letter_b_PNG13.png" alt="Home"/>
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
          >
            Create Events
          </Menu.Item>

          <Menu.Item
            name='sing-in'
            color='orange'
            active={activeItem === 'sing-in'}
            onClick={this.handleItemClick}
          >
            Sign In
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;