import React, {useContext} from "react";
import { UserContext } from "../context/UserProvider";
import IssueForm from 'IssueForm'

function Profile() {
    
    return (
        <div className="profile">
            <h1>Welcome {username}</h1>
        </div>
    )
}

export default Profile