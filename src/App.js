import React from "react";
import authors from "./data";

//Components
import Sidebar from "./Sidebar";
import AuthorCard from "./AuthorCard";
import AuthorList from "./AuthorList";

function App() {

  return (
    <div id="app" className="container-fluid">
      <div className="row">
      < Sidebar />
        <div className="content col-10">
          <div className="authors">
            <h3>Authors</h3>
            
            <AuthorList authors={authors} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
