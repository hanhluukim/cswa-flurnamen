import Modal from 'react-bootstrap/Modal';
import React, { useState} from "react";
//import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import {MDBBtn, MDBIcon} from 'mdbreact';
import {MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import Spinner from 'react-bootstrap/Spinner';

import GetService from '../components/apis/get.service';

//const global_details = [{}]
function Display(objectID) {

    //const resp = GetService.getInfoDetails(objectID.value);
    //console.log(resp);
    //var resp="";
    //var title="tessssssssssss";

    const [show, setShow] = useState(false); //first state fur variable show
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState([]);
    
    console.log("first"+show);


    let n = 0;
    const handleClose = () => {
      console.log("handleClose")
      setShow(false);
      
      console.log(show)
    };
    //GET DETAILS RESPONSE
    


    const handleClick = () => {
      console.log(objectID);

      setLoading(true);
      
      console.log("get Click");
      var detailsL=[]
      console.log(show);
      var rep = GetService.getInfoDetails(objectID.value[1]);
      console.log("content aus SERVICE will be here transported");
      console.log(rep);
      const getRes = rep.then((res)=>{
        var a = res;
        setDetails(a[0]);
        detailsL= a;
        console.log("in function");
        console.log(detailsL);
        console.log(details);
        setLoading(false);
      });
      
      setShow(true);
    };
    
    const Flurname=(props)=>{
     
      console.log("Flurname COMPONENTEN AUFRUFEN");
      console.log(props['value']);
      
      const res = props['value'];
      console.log(show);
      return (
      <tr>
        <td>{res['title']}</td>
        <td>{res['area']}</td>
        <td>{res['evidence']}</td>
        <td>{res['note']}</td>
        {/*<td>{res['parent']}</td>*/}
        {/*<td><Example></Example></td>*/}
      </tr> 
      );

    };

    return (
      <>
        
        <MDBBtn className="btn-anzeige" class="btn btn-success"onClick={handleClick} >
          Anzeige
        </MDBBtn>
        {/*POP UP Fenster wird geöffet*/}
        <Modal
          size="lg"
          show={show}
          //dialogClassName="modal-1000w"
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {objectID.value[0]}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {loading ? (
            <Spinner animation="border" variant="success" />
          ):(
            <MDBTable id="detail-results" className="table-detail-result">
            <MDBTableHead>
              <tr>
                <th>Flurname</th>
                <th>Area</th>
                <th>Beleg</th>
                <th>Note</th>
                {/*<th>Bild</th>*/}
              </tr>
            </MDBTableHead>
            <MDBTableBody>
                {details.map((item, index)=><Flurname key={index} value={item}/>)}
                
            </MDBTableBody>
            </MDBTable>
          )}
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

  function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        <MDBIcon icon="eye" />
        </Button>
  
        
        
    <Modal
      show={show} onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
    </Modal>

      </>
    );
  }
export default Display;

