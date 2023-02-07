import React, {Component}  from 'react';


export class UserCard extends Component {
    render() {
        return (
            <div className='user'>
                <p>{this.props.elem.first_name}</p>
                <p>{this.props.elem.last_name}</p>
                <p>{this.props.elem.email}</p>
                <img src={this.props.elem.avatar} alt="avatar" />
            </div>
        )
    }
}