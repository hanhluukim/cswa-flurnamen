import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import {MDBBtn} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

import GetService from '../components/apis/get.service';

//const global_details = [{}]
function Display(objectID) {

    //const resp = GetService.getInfoDetails(objectID.value);
    //console.log(resp);
    //var resp="";
    //var title="tessssssssssss";

    const [show, setShow] = useState(false); //first state fur variable show
    //const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState([{}]);

    const handleClose = () => setShow(false);
   
    const handleClick = () => {
      
      GetService.getInfoDetails(objectID.value).then((detailsL)=>{
        console.log("TESTENTESTEN");
        console.log(detailsL);
        setDetails(detailsL);
        
        console.log(details);
        console.log("=====");
      });
      setShow(true)
      
    }
    console.log("state details");
    console.log(details);
    console.log("test show modal");
    console.log(show);
    return (
      <>
        
        <MDBBtn className="btn-anzeige" class="btn btn-success"onClick={handleClick} >
          Anzeige
        </MDBBtn>
        {/*POP UP Fenster wird geöffet*/}
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Detailsanzeige
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
                      {details.map((item, index)=><Flurname key={index} value={item}/>)}
                      {/*aRow*/}
                     
                  </MDBTableBody>
                  </MDBTable>

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

const Flurname=(props)=>{
  console.log("Flurname");
  console.log(props['value']);
  console.log("check title");
  console.log(props['value'].title);

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

export default Display;

