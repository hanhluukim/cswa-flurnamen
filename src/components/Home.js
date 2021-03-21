import React, { useState, useEffect, Component } from "react";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import {Link} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import UserService from "../services/user.service";

const Home = () => {
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
                          
                            <MDBBtn color='green'>
                              <MDBIcon icon='search' />
                              <Link
                                    style={{ color: '#FFF' }}
                                    id="link-to-search"
                                    name="link-to-search" 
                                    to="/suche">
                                    Datensuche</Link>
                            </MDBBtn>
                         
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
              
                <MDBBtn color='green'>
                  <MDBIcon icon='clone left' id="btn-read-project" /> 
                  <Link
                        style={{ color: '#FFF' }}
                        id="link-to-project"
                        name="link-to-project" 
                        to="/projekt">
                        Mehr erfahren</Link>
                          
                </MDBBtn>
              
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
                          
                          
                              <MDBBtn color='green'>
                                <MDBIcon icon='clone left' /> 
                                <Link
                                    style={{ color: '#FFF' }}
                                    id="link-to-flurnamen"
                                    name="link-to-flurnamen" 
                                    to="/flurnamen">
                                    Mehr erfahren</Link>
                            
                              </MDBBtn>
                          
                        </div>
                      </div>
                  </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
};

export default Home;

