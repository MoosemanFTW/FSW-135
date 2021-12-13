import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import IssueList from "./IssueList";
import IssueForm from './IssueForm'

function Issues(){
    const {user: {username}, addIssue, Issues } = useContext(UserContext)
    return(
        <>
            <h1>Issues</h1>
            <IssueForm  addIssue={addIssue}/>
            <h3>All Issues</h3>
            <IssueList issues={issues}/>
        </>
    )
}

export default Issues