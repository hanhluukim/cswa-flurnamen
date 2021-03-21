import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView
} from "mdbreact";

class Gallery extends Component {
  render() {
    return (
      <MDBContainer style ={{margin:'auto'}}>
        <MDBRow>
          <MDBCol lg="6">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(1)2-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(7)-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Gallery;