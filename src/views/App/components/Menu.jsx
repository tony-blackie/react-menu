import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItemNames: ['First', 'Second', 'Third']
        };

        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }

    handleMenuItemClick(event) {
        // this.setState({ menuItemNames: ['Third', 'Fourth', 'Fifth'] });
        let id = parseInt(event.target.id);
        let newArray = this.state.menuItemNames;
        newArray[id] = 'clicked';
        this.setState({ menuItemNames: newArray })
    }

    render() {
        return (
            <div>
                <MenuItem text={this.state.menuItemNames[0]} handleClick={this.handleMenuItemClick} id={0} />
                <MenuItem text={this.state.menuItemNames[1]} handleClick={this.handleMenuItemClick} id={1} />
                <MenuItem text={this.state.menuItemNames[2]} handleClick={this.handleMenuItemClick} id={2} />
            </div>
        );
    }
}
