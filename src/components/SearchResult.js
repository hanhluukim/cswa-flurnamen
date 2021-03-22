import { render } from 'react-dom';
import React, { Component, useState } from 'react';
import OtherDisplay from './ClassModal';
import {MDBBtn} from 'mdbreact';

class SearchResult extends Component{
    constructor(props){
      super(props);
      this.state={
        item: props.item,
        show: false
      };
      console.log("Search Result Item");
      console.log(this.state.item);
    }
  
    
    clickShow=()=>{
      this.setState({
        show:true
      });
      console.log("item id");
      console.log(this.state.item.id)
    }
    render(){
    let display=null;

      if(this.state.show==true){
        //display details
        display =
          <OtherDisplay 
            
            objectID={this.state.item.id}
            objectTitle={this.state.item.title}
          />
      }
      return(
        <div>
          <tr>
            <td>{this.state.item['title']}</td>
            <td>{this.state.item['place']}</td>
            <td>{this.state.item['facetObjectType']}</td>
            <td>{this.state.item.len}</td>
            <td>
                <MDBBtn 
                    class="btn btn-success"
                    onClick={this.clickShow}>
                    Anzeige
                </MDBBtn>
                {display}
            </td>
            
            
          </tr>
        </div>
      );
    }
  }
export default SearchResult;

/*
<MDBBtn 
                    className="btn-anzeige" 
                    class="btn btn-success"
                    onClick={this.clickShow} >
                    Anzeige
                </MDBBtn>
*/