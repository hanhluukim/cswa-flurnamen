import React from 'react';
import {Link} from 'react-router-dom';
import { MDBInputGroup, MDBInput } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";


export default class Erfassung extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
            erstellt: false
        }
    }
    
    //set true wenn submitted
    handleCreate = (event) => {
        event.preventDefault();
        
        this.setState({
            erstellt: true
        });

    }
    //wenn false, das Formular zum Eingeben zu sehen
    handleAgain = (ev) =>{
        this.setState({
            erstellt: false
        });
    }

    
    render() {
        //wenn der neue Eintrag hinzugefügt wurde
        if (this.state.erstellt == true) {

            return (
                <div style={{margin:'auto', width:'50%'}} className="card">
                <p style={{textAlign:'justify'}}>Der neue Eintrag ist bei uns eingegangen.Vielen Dank für den Beitrag!</p>
                <button name="btn-continue-add" className="button" class="btn btn-success" onClick={this.handleAgain}>Weiter hinzufügen</button>
                <button name="btn-back"
                        type="button"
                        class="btn btn-danger"
                        >
                        <Link
                            style={{ color: '#FFF' }}
                            id="link-back"
                            name="link-back" 
                            to="/">
                            Abbrechen &#8594; Home</Link>
                </button>
                </div>
            )
        } else {
    
            return (

            <div id="datenerfassung-area" className="grid-container-x small callout content-background">
                 <MDBRow>
                    <MDBCol id="card-db" md="4" className="card-db" style={{margin:'auto'}}>
                            <h5><strong>Grundlagen für die Datenbank</strong></h5>
                
                            <p> 
                            Idealerweise sollen von jedem Flurnamen folgende Punkte bekannt sein:
                            <ul>
                                    <li>die amtliche Namenform (aus ALK, Flurkarten und ‑büchern)</li>
                                    <li>die mundartliche Lautung des Namens</li>
                                    <li>historische (möglichst weit zurückreichende) Belege (z.B. aus historischen Karten, Lehnbriefen, Grenzbeschreibungen oder Gerichtsbüchern)</li>
                                    <li>die exakte Lage im Gelände (früher verbal beschrieben, heute mit Hilfe von GPS-Daten und den Karten des Thür. Landesvermessungsamtes exakter möglich),</li>
                                    <li>eine genaue Beschreibung des benannten Objektes (z.B. feuchte Wiese, steiniges Feld o.ä.),</li>
                                    <li>überlieferte Hinweise hinsichtlich des Namenursprungs (z.B. Sagen, Erzählungen),</li>
                                    <li>GND-Nummer der Gemarkung</li>
                            </ul>
                            Diese Angaben liefert das Thüringische Flurnamenarchiv jedoch nur in Teilen, so dass weiterer Erhebungsbedarf besteht.
                            </p>
        
                    </MDBCol>
                    <MDBCol md="6"> 
            
                    <h5><strong>Neue Flurnamen hinzufügen</strong></h5>

                    <form id="form-datenerfassung" onSubmit={this.handleCreate}>
                        <div className="form-group">
                            <div>
                                <label htmlFor="formGroupExampleInput">Flurname</label>
                                <input
                                    name="input-flurname"
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Flurname, den Sie hinzufügen möchten"
                                    required="required"
                                />
                            </div>
                            <div>
                                <label htmlFor="formGroupExampleInput">Gemarkung</label>
                                <input
                                    name="input-gemarkung"
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Gemarkung des Flurnames"
                                    required="required"
                                />
                            </div>
                            <div>
                                <label htmlFor="formGroupExampleInput">Beleg des Names</label>
                                <input
                                    name="input-beleg"
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="formGroupExampleInput">Mundart</label>
                                <input
                                    name="input-mundart"
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="formGroupExampleInput">Lage und Information</label>
                                <input
                                    name="input-lage"
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                
                                <MDBInput id="input-extra" name="input-area-extra" type="textarea" label="Weitere Hinweise?" background />
                            </div>
                        </div>
                            
                        
                            <MDBInputGroup
                                    inputs={
                                        <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile01"
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                                            Datei hochladen
                                        </label>
                                        </div>
                                    }
                                    containerClassName="mb-3"
                                    />

                                <div className="text-right">
                                    <div className="grid-x grid-padding-x">
                                        <div className="cell medium-3">
                                            <button tabIndex="7" className="button large expanded" class="btn btn-success" name="btn-submit">Hinzufügen</button>
                                            
                                            

                                            <button name="btn-back"
                                                    type="button"
                                                    class="btn btn-danger"
                                                    >
                                                    <Link
                                                        style={{ color: '#FFF' }}
                                                        id="link-back"
                                                        name="link-back" 
                                                        to="/">
                                                        Abbrechen &#8594; Home</Link>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                   
                    </MDBCol>
                    </MDBRow>
                </div>
            )
        }
    }
}
