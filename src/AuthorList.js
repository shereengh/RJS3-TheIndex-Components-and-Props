import React from "react"

//Components
import AuthorCard from "./AuthorCard"

function AuthorList(props){

    const authorRows = props.authors.map(author => <AuthorCard author={author} key={author.first_name}/>)
    return (
        <div className="row">
     {authorRows}
    </div>
    )
}
export default AuthorList;