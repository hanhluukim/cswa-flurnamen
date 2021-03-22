//<div><Child age='21' /></div>)
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import {MDBBtn} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

import GetService from '../components/apis/get.service';

//const global_details = [{}]
class OtherDisplay extends Component {

    constructor(props){
        super(props);
        this.state ={
            show: false,
            objectTitle:this.props.objectTitle,
            objectID:this.props.objectID,
            details: [{}],
            
        }
        console.log("sind sie ihr reingekommen?");
        this.callDetails=this.callDetails.bind(this);
        //this.handleClick=this.handleClick.bind(this);
        //this.handleClose=this.handleClose.bind(this);
    }
    componentDidMount() {
        this.callDetails(this.state.objectID);

    }

    callDetails=(objectID)=>{
        console.log("asdadadasd");
        GetService.getInfoDetails(objectID).then((res)=>{
            console.log(res);
            this.setState({
                details: res,
                show:true
            });
            
        });
    }
    /*
    handleClick=()=>{
        console.log("muh");
        console.log(this.state.objectID);
        this.callDetails(this.state.objectID);
        //console.log(this.state.objectID);
        this.setState({
            show:true
        });
    }*/
    handleClose=()=>{
        
        this.setState({
            show:false
        });
    }
    render(){
        let table = null;
        if(this.state.show==true && this.state.details){
            table = this.state.details.map((item, index)=>{
                return(
                <tr key={index}>
                <td>{item['title']}</td>
                <td>{item['area']}</td>
                <td>{item['evidence']}</td>
                <td>{item['note']}</td>
                <td>{item['parent']}</td>
              </tr>
                )
            });
            console.log(table);
        }
        return(
        
        <>
        {/*<MDBBtn className="btn-anzeige" class="btn btn-success"onClick={this.handleClick} >
          Anzeige
        </MDBBtn>
        */}
        {/*POP UP Fenster wird geöffet*/}
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {this.state.objectTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

                <MDBTable id="detail-results" className="table-detail-result">
                  <MDBTableHead>
                    <tr>
                      <th>Flurname</th>
                      <th>Area</th>
                      <th>Beleg</th>
                      <th>Note</th>
                      <th>Obergeordnete</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                      {table}
                  </MDBTableBody>
                  </MDBTable>

          </Modal.Body>
          <Modal.Footer>
            <Button id="btn-details-close" variant="dark" class="btn btn-dark" onClick={this.handleClose}>
              Schließen
            </Button>
        </Modal.Footer>
        </Modal>
      </>
            
        );
    }
}
const Flurname=(props)=>{
     
    console.log("Flurname COMPONENTEN AUFRUFEN");
    console.log(props['value']);
    //console.log("check title");
    //console.log(props['value'].title);
  
    const res = props['value'];
    
    return (
    <tr>
      <td>{res['title']}</td>
      <td>{res['area']}</td>
      <td>{res['evidence']}</td>
      <td>{res['note']}</td>
      <td>{res['parent']}</td>
    </tr> 
    );

  };
export default OtherDisplay;



