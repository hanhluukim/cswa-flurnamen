import React, { useState, useEffect, Component } from "react";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import UserService from "../services/user.service";

const Home = () => {
  /*
  const [content, setContent] = useState("");

  useEffect(() => {
   
    var getcontent=UserService.getPublicContent();
    console.log(getcontent.data);
    setContent(getcontent);

  }, []);
  */

  return (
    /*
    die Seite (als ein Row) wird zu 2 Teile zerlegt: project-card und other-cards
    project-card erhält nur eine Karte
    other-cards erhält 4 Spalte. Diese 4 Spalte wird aber weiter so in 2 Zeile verteilt.
    */
    <div class="d-flex justify-content-center" className="homepage-cards">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3">
                  <MDBCard
                    >
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                          <h5 className='green-text'>
                            <MDBIcon icon='database' /> Datenbank
                          </h5>
                          <a className="card-link" href="/suche">
                            <MDBBtn color='green'>
                              <MDBIcon icon='search' /> 
                              Datensuche
                            </MDBBtn>
                          </a>
                        </div>
                      </div>
                    </MDBCard>
          </MDBCol>
          <MDBCol md="6">
                  <MDBCard>
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='green-text'>
                <MDBIcon icon='archive' /> Projekt und Archiv
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Thüringische Flurnamen</strong>
              </MDBCardTitle>
              <p style={{textAlign:'justify'}}>
                Das Projekt befasst sich mit der Digitalisierung 
                und Aufbereitung der Belegsammlung des 
                Thüringischen Flurnamenarchivs der 
                Friedrich-Schiller-Universität Jena. 
                Dabei werden die Belegzettel des 
                Archivs digitalisiert und die den Fluren
                übergeordneten Orte mit der zugehörigen
                Orts-ID der Gemeinsamen Normdatei (GND) 
                der Deutschen Nationalbibliothek verknüpft.
                Das Datenmaterial präsentiert die Gemarkungen 
                in OpenStreetMap. Durch die Digitalisierung 
                des Thüringischen Flurnamenarchivs und die 
                Verknüpfung mit GND-Daten wird eine weitere 
                Befassung mit den Flurnamen Thüringens möglich, 
                sowohl für Laien als auch Wissenschaftler 
                verschiedenster Bereiche.
              </p>
              <a className="card-link" href="/projekt">
                <MDBBtn color='green'>
                  <MDBIcon icon='clone left' /> 
                  Mehr erfahren
                </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
          </MDBCol>
          <MDBCol md="3">
                  <MDBCard>
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                          <h5 className='green-text'>
                            <MDBIcon icon='chart-pie' /> Flurnamen
                          </h5>
                          
                          <a className="card-link" href="/flurnamen">
                              <MDBBtn color='green'>
                                <MDBIcon icon='clone left' /> 
                                Mehr erfahren
                              </MDBBtn>
                            </a>
                        </div>
                      </div>
                  </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    {/*
     <MDBRow center>
      <MDBCol md='5' className="project-card">
        <MDBCard>
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='green-text'>
                <MDBIcon icon='archive' /> Projekt und Archiv
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Thüringische Flurnamen</strong>
              </MDBCardTitle>
              <p style={{textAlign:'justify'}}>
                Das Projekt befasst sich mit der Digitalisierung 
                und Aufbereitung der Belegsammlung des 
                Thüringischen Flurnamenarchivs der 
                Friedrich-Schiller-Universität Jena. 
                Dabei werden die Belegzettel des 
                Archivs digitalisiert und die den Fluren
                übergeordneten Orte mit der zugehörigen
                Orts-ID der Gemeinsamen Normdatei (GND) 
                der Deutschen Nationalbibliothek verknüpft.
                Das Datenmaterial präsentiert die Gemarkungen 
                in OpenStreetMap. Durch die Digitalisierung 
                des Thüringischen Flurnamenarchivs und die 
                Verknüpfung mit GND-Daten wird eine weitere 
                Befassung mit den Flurnamen Thüringens möglich, 
                sowohl für Laien als auch Wissenschaftler 
                verschiedenster Bereiche.
              </p>
              <a className="card-link" href="/projekt">
              <MDBBtn color='green'>
                <MDBIcon icon='clone left' /> 
                Mehr erfahren
              </MDBBtn>
              </a>
            </div>
          </div>
        </MDBCard>
      </MDBCol>


      <MDBCol md='5' className="other-cards">    
          <MDBRow center>
            {/*}
                  <MDBCol md='5'>
                    <MDBCard
                    >
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                          <h5 className='green-text'>
                            <MDBIcon icon='archive' /> Flurnamenarchiv
                          </h5>
                          <MDBCardTitle tag='h3' className='pt-2'>
                            <strong>Das Archiv</strong>
                          </MDBCardTitle>
                          <p style={{textAlign:'justify'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                            officia accusamus minus error nisi architecto nulla ipsum
                            dignissimos. Odit sed qui, dolorum!
                          </p>
                          <MDBBtn color='green'>
                            <MDBIcon icon='clone left' /> Mehr erfahren
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
  
                  <MDBCol md='5'>
                    <MDBCard
                    >
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                          <h5 className='green-text'>
                            <MDBIcon icon='database' /> Datenbank
                          </h5>
                          {/*
                          <MDBCardTitle tag='h3' className='pt-2'>
                            <strong>Grundlagen</strong>
                          </MDBCardTitle>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                            officia accusamus minus error nisi architecto nulla ipsum
                            dignissimos. Odit sed qui, dolorum!
                          </p>
                          
                          <MDBBtn color='green'>
                            <MDBIcon icon='search' /> Datensuche
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
                  
                  <MDBCol md='5'>
                    <MDBCard
                      
                    >
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                          <h5 className='green-text'>
                            <MDBIcon icon='images' /> Galerien
                          </h5>
                          <MDBBtn color='green'>
                            <MDBIcon icon='clone left' /> Mehr erfahren
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
                  
                  <MDBCol md='5'>
                    <MDBCard
                      
                    >
                      <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                          <h5 className='green-text'>
                            <MDBIcon icon='chart-pie' /> Kontakte und Partner
                          </h5>
                          
                          <MDBBtn color='green'>
                            <MDBIcon icon='clone left' /> Mehr erfahren
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
  
          </MDBRow>
      </MDBCol>
          
     </MDBRow> 
               
    */}
    </div>
  )
};

export default Home;

