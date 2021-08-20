import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfSelect extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        actionToSelectShelf: PropTypes.func.isRequired,
    }

    state ={
        valueOfSelect: this.props.shelf
    }

    handleSelect = (event)=>{
        const value = event.target.value
        this.setState((prevState)=>{
            return(
                {valueOfSelect: value}
            )
        })
        this.props.actionToSelectShelf(value);
    }

    render() {
        // const {shelf} = this.props
        return (
            <div>
                <div className="book-shelf-changer">
                    <select value={this.state.valueOfSelect} onChange={(e)=>{this.handleSelect(e)}} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default ShelfSelect;
