import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import { Menu , Segment } from 'semantic-ui-react'


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: 'home'};

        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(e, {name}){
        
        this.setState({ activeItem: name });
        console.log(`your pagename is ${this.state.activeItem}`);
    }

  render() {
    const { activeItem } = this.state;

    return (
        <div>
            <Menu inverted fixed='top' >
                
                    <Menu.Item 
                        as={Link} to='/'
                        name='home' 
                        active={activeItem === 'home'} 
                        onClick={this.handleItemClick} 
                    />
                
                
                    <Menu.Item 
                        as={Link} to='/about'
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    />
                
                <Menu.Item
                    name='photos'
                    active={activeItem === 'photos'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='portfolio'
                    active={activeItem === 'portfolio'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='services'
                    active={activeItem === 'services'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                />
            </Menu>

            {this.props.children}

        </div>
    )
  }
}
