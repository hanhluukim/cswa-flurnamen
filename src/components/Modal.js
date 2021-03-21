import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import {MDBBtn} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import GetService from '../components/apis/get.service';

function Display(objectID) {

    


    //const resp = GetService.getInfoDetails(objectID.value);
    //console.log(resp);
    var resp="";
    var title="tessssssssssss";

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState("");

    const handleClose = () => setShow(false);
    /*
    const handleShow = () => {
      
      console.log(objectID);
      GetService.getInfoDetails(objectID.value).then((details)=>{
        resp=details;
      });
      console.log("Response Details aus GETSERVICE");
      console.log(resp);
      console.log(mResp);
      //title = resp.mycoreoject.metadata[0]["def.title"][0].title[0]["_"] 
      console.log(title);
      
      setShow(true);
    };
    */

    useEffect(() => {
      //setLoading(true);
      GetService.getInfoDetails(objectID.value).then((res)=>{
        console.log("Test");
        console.log(res);
        setDetails(res);
          //res.metadata[0]["def.title"][0].title[0]["_"]);
        //console.log(res.metadata);
      });
      //setLoading(false);
    }, []);

    

    return (
      <>
        
        <MDBBtn className="btn-anzeige" class="btn btn-success" onClick={()=>setShow(true)}>
          Anzeige
        </MDBBtn>

        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {details}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="3">
                    "key"
                  </MDBCol>
                  <MDBCol md="6">
                    "test"
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
          </Modal.Body>
          <Modal.Footer>
            <Button id="btn-details-close" variant="dark" class="btn btn-dark" onClick={handleClose}>
              Schließen
            </Button>
        </Modal.Footer>
        </Modal>
      </>
    );
  }

const RowDetails=(props)=>(
    <p>
    testen
    </p>
);
export default Display;

