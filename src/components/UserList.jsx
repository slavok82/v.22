import React, { Component } from "react";
import { UserCard } from "./UserCard.jsx";
import { users }  from "../data/users.js";


export class UserList extends Component {
    constructor() {
        super();

        this.state = {
            users: users.data
        }
    }

    render() {
        return (
            <div className="users">
                {this.state.users.map(elem => (
                    <UserCard elem={elem} />
                ))}
            </div>
        )
    }
};