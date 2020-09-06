import React, { Component } from "react";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import Customer from "./Customer";
class App extends Component{
    render(){
      return <div>
           <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              React JS CRUD with Laravel API
            </a>
          </div>
        </div>
        <div className="ui main container">
            <MyForm />
            <CustomerList />
            <Customer />
        </div>
      </div>;
    }
  }
  export default App;
  