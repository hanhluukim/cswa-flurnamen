import React from "react";
//import { render } from "react-dom";
import Accordion from "./Accordion";
import Table from 'react-bootstrap/Table'

class Project extends React.Component {
  /*
  state zum speichern, welche Index ausgewählt wurde.
  Index=0 (erste Accordion) immer geöffnet
  */

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  render() {
    /**/
    return (
      <div className="flurnamen-accordion">
        <Accordion
          id="accordion-project"
          className="accordion"
          selectedIndex={this.state.selectedIndex}
          onChange={(index, expanded, selectedIndex) => console.log(`#${index} ${expanded ? 'expanded' : 'collapsed'} (selectedIndex: ${selectedIndex})`)}
        >
          <div data-header="Vorstellung des Projekts" className="accordion-item">
                <p>
                Das Projekt befasst sich mit der Digitalisierung und Aufbereitung der Belegsammlung des  
                <strong>Thüringischen Flurnamenarchivs</strong> der Friedrich-Schiller-Universität Jena. Dabei werden die 
                Belegzettel des Archivs digitalisiert und die den Fluren übergeordneten Orte mit der 
                zugehörigen Orts-ID der Gemeinsamen Normdatei (GND) der Deutschen Nationalbibliothek verknüpft. 
                Das Datenmaterial präsentiert die Gemarkungen in OpenStreetMap. Durch die Digitalisierung des 
                Thüringischen Flurnamenarchivs und die Verknüpfung mit GND-Daten wird eine weitere Befassung mit den 
                Flurnamen Thüringens möglich, sowohl für Laien als auch Wissenschaftler verschiedenster Bereiche.
                
                Das Projekt wurde im Juni 2019 begonnen und wird voraussichtlich 2021 abgeschlossen. 
                Die Datenbank wird stetig aktualisiert, befindet sich aber noch im Aufbau.
                </p>
          </div>
          <div data-header="Thüringisches Flurnamenarchiv" className="accordion-item">
                <p>
                    Das Thüringische Flurnamenarchiv wurde 1933 an der 
                    Friedrich-Schiller-Universität Jena im Rahmen der thüringischen Landesstelle 
                    für Volkskunde gegründet. Ab 1953 wuchs der Bestand rasch an, so dass sich 
                    heute für das Gebiet des Freistaats Thüringen knapp 126.000 Namenbelege finden. 
                    Diese sind aber bei Weitem nicht die Gesamtmenge an thüringischen Flurnamen, 
                    die Schätzungen zufolge bei über 300.000 Namen liegt. Insgesamt wurden im 
                    Flurnamenarchiv rund 150.000 Flurnamen erfasst, da man sich am thüringischen 
                    Sprachraum und nicht an der politischen Gliederung orientierte. 
                    Das Erfassungsgebiet umfasst somit auch Teile des südlichen Sachsen-Anhalts. 
                    Seit 1982 stagnierte die Arbeit am Thüringischen Flurnamenarchiv. 
                    Dies änderte sich mit der Übernahme der Professur für Geschichte 
                    der deutschen Sprache durch Prof. Dr. Eckhard Meineke im Jahr 1994, 
                    unter dessen Betreuung zahlreiche flurnamenkundliche Abschlussarbeiten 
                    verfasst wurden. Das im Flurnamenarchiv lagernde Material ist derzeit 
                    weder für die Wissenschaft noch für die interessierte Öffentlichkeit 
                    gut nutzbar – es ist vom Zerfall bedroht und befindet sich in Zettelkästen 
                    in der Obhut von Frau Dr. Barbara Aehnlich, die seit 2004 die 
                    Flurnamenforschung in Jena weiter vorantreibt. Die Belegsammlung 
                    des Thüringischen Flurnamenarchivs bildet den Grundstock für 
                    eine flächendeckende Sammlung und Auswertung der Thüringer Flurnamenlandschaft. 
                    Von dieser ist Aufschluss zu erwarten über die Herkunft und die Motivation der 
                    Namen sowie über die dialektgebundene Sprachgeschichte des ostmitteldeutschen Raumes. 
                    Ausgehend von diesem Grundstock, dessen Digitalisierung im Projekt vorgenommen wird, 
                    soll auch der übrige Flurnamenbestand des Freistaates erfasst und nach vorgegebenen 
                    Kriterien geordnet werden.
                </p>
          </div>
            <div data-header="Partner" className="accordion-item">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Partner</th>
                        <th>Beteiligte Arbeit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        <td>Thüringer Universitäts- und Landesbibliothek</td>
                        <td>Entwicklung Datenbank und Portal</td>
                       
                        </tr>
                        <tr>
                       
                        <td>Historische Kommission für Thüringen</td>
                        <td>wissenschaftliche Beratung hinsichtlich Thüringer Regionalgeschichte</td>
                       
                        </tr>
                        <tr>
                        
                        <td>Gemeinsamer Bibliotheksverbund (GBV)</td>
                        <td></td>
                        
                        </tr>
                        <tr>
                        <td>Landesvermessungsamt Thüringen</td>
                        <td>Bereitstellung des digitalen Kartenmaterials</td>
                        </tr>
                        <tr>
                        <td>Heimatbund Thüringen e.V.</td>
                        <td>Bereitstellung der Sammlungen ehrenamtlicher Mitarbeiter im Projekt <strong>Flurnamen und Regionalgeschichte</strong></td>
                        </tr> 

                        <tr>
                        <td>Thüringer Landesamt für Archäologie</td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>digiCULT Verbund eG</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>DHnet | Jena</td>
                        <td>Beratung bei DH-relevanten Fragen</td>
                        </tr>
                        <tr> 
                        <td>Michael Stifel Center Jena</td>
                        <td>Beratung bei informationstechnologischen Fragestellungen</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
          <div data-header="Kontakt" className="accordion-item" id="acc-read-contact">
            <p>
            Dr. Barbara Aehnlich <br></br>
            Friedrich-Schiller-Universität Jena <br></br>
            Institut für Germanistische Sprachwissenschaft <br></br>
            Fürstengraben 30<br></br>
            07743 Jena 
            </p>
          </div>
        </Accordion>
      </div>
    );
  }
}
export default Project;
