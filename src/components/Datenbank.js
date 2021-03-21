import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";


const DBGrundlagen = () => {
  const style_button = { width: '200px' }
    return (
        <MDBContainer>
        <MDBRow
        style={{margin:'auto', marginTop:'100px'}}>
            <MDBCol
            md="8" 
            style={{
            //width:'25%'
            border: '2px solid rgb(80, 139, 95',
            textAlign:'justify',
            }}>
            <h5>Grundlagen für die Datenbank</h5>

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
            <MDBCol md="4"> 
                <MDBCol md="6"></MDBCol>
                <MDBCol md="6"></MDBCol>
                <MDBCol md="6"></MDBCol>
                
                <div className="button-datenbank" style={{marin:'auto'}}>
                <MDBBtn style={style_button} color="green">Daten suchen </MDBBtn>
            </div>
                <MDBCol md="6"></MDBCol>
                <MDBCol md="6"></MDBCol>
                <MDBCol md="6"></MDBCol>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        );
}

export default DBGrundlagen;