import React from "react";
import { render } from "react-dom";
import Accordion from "./Accordion";


class Flurnamen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  render() {
    /**/
    return (
      <div className="flurnamen-accordion"
      style={{
      }}>
        <Accordion
          className="accordion"
          selectedIndex={this.state.selectedIndex}
          onChange={(index, expanded, selectedIndex) => console.log(`#${index} ${expanded ? 'expanded' : 'collapsed'} (selectedIndex: ${selectedIndex})`)}
        >
          <div
            data-header="Allgemein"
            className="accordion-item"
          >
            <p>
            Flurnamen sind Bezeichnungen unbewohnter Örtlichkeiten und von Geländegegebenheiten,
            an denen sich Menschen in der Landschaft orientieren.
            Dies umfasst u.a. Berge und Täler, Bäche, Flüsse, Teiche und Seen, Wälder und Felder.
            Eingeschlossen werden davon auch Namen, die heute infolge der Einbeziehung
            ihrer Bezugsobjekte zu Bezeichnungen von Straßen, Gassen und Plätzen innerhalb einer Ortschaft geworden sind.
            Nach dem Benennungsmotiv, also dem namengebenden Objekt oder der namengebenden Ursache, werden Flurnamen in Natur- und Kulturnamen unterteilt.
            </p>
          </div>
          <div data-header="Naturflurnamen" className="accordion-item">
            <p>
            Naturnamen weisen auf die natürliche Beschaffenheit der unkultivierten Landschaft hin. Sie nehmen Bezug auf Gegebenheiten wie Berg und Tal, Wasser, Wald, Pflanzen, Tiere, Bodenbeschaffenheit usw. Hierher gehören beispielsweise Flurnamen, deren Motivation in der Ausdehnung und Begrenzung der von ihnen bezeichneten Flächen zu finden ist.
Dazu zählen Allgemeinbezeichnungen für Geländeteile (In den Talländern), für die allgemeine Gestalt der Grundstücke (Gehren, Haken) oder für ihre natürliche Lage (Im Himmelreich). Auch die Morphologie, also die Geländebeschaffenheit, spielt eine Rolle. Dies betrifft die Gruppe der Berge, Hügel, Bergteile und Hänge, ebene Flächen, Täler und Senken: Auf dem Berge, Am Hange, Auf dem Plane, Im Loche.
Bei den geologisch motivierten Namen werden Art und Beschaffenheit des Bodens thematisiert: Auf dem Melm, In den Kieswiesen. Gewässerbezeichnungen und Sumpfland-Benennungen wären zum Beispiel Borngarten und Strut.
Eine große Rolle spielt die Bodenbedeckung. Bildungen mit dem Kollektivsuffix ‑icht fallen oftmals in den Motivationsbereich Wald, Busch und Bäume: Weidicht, Erlicht, Tännigt. Als Bezeichnung für Grasland sind häufig Zusammensetzungen mit ‑wiese zu finden. Auch Tierbezeichnungen spiegeln sich häufig in Flurnamen (Fuchslöcher, Wolfsgrube).
            </p>
          </div>
          <div
            data-header="Kulturflurnamen"
            className="accordion-item"
          >
            <p>
            Die Kulturnamen weisen im Gegensatz zu den Naturnamen auf die kultivierende oder zivilisatorische Tätigkeit des Menschen hin. Hierher gehören beispielsweise die Namen von Landrodungen (Rodeländer, Bernsroda), die Bezeichnungen von Nutzland (In den kurzen Äckern, Auf der Trift) oder Flurnamen, welche die besondere Nutzung des Flurstücks, etwa durch den Anbau einer bestimmten Pflanze oder die Viehzucht, beinhalten (Flachsäcker, Am Lämmerberge, Am Weinberge).
Viele Flurnamen sind mit Zahlen oder Maßeinheiten kombiniert (In den dreizehn Gelengen, Auf der Hufe) oder benennen Sonderland (Gemeindeanger).
Durch den Zusatz von Vor- oder Familiennamen oder Hinweise auf den Nutzer lassen sich gleiche oder ähnliche Flurnamen unterscheiden (Auf der Pfarrwiese, Helbings Weingarten); Siedlungsnamen zeigen die Nähe oder die Zugehörigkeit zur betreffenden Siedlung an (Löberschützer Schläge, Im Orlamünder Ratsholz).
In den Motivationsbereich „Bauwerke und technische Anlagen“ fallen Flurstücke, die nach ihrer Nutzung durch den Menschen, ihrer Zugehörigkeit oder nach einer baulichen Anlage benannt wurden (Im Kalkofen, Am Friedhof). In entsprechend genutzten Regionen weisen Flurnamen auf den Abbau von Bodenschätzen hin: In den Silbergruben, Am Steinbruch.
Bezeichnungen für Verkehrswege und Grenzen werden ebenso in die Benennungen aufgenommen (An der Straße, Über der Bahn, Hinter der Grenze), wie solche für Bauwerke und Plätze, die mit der Verteidigung des Landes im Zusammenhang stehen (Wartberg, Auf der Burg).
Ältere Rechtsverhältnisse (Am alten Gericht, Galgenberg) sowie Religion und Kirche (Am Frauenholze, Im Pfaffenborn) stellen weitere Benennungsmotive dar. Einige Flurnamen weisen einen Bezug zu vor- und frühgeschichtlichen Fundplätzen auf oder sind mit Sagen und Erzählungen verknüpft. Hier ist eine genaue Überprüfung der Befunde und Belege notwendig, da es sonst schnell zu Fehletymologien kommen kann.
            </p>
            
          </div>
          <div
            data-header="An der Flurnamenforschung beteiligte Diziplinen"
            className="accordion-item"
          >
            <p>
            Flurnamen sind geschichtliche Denkmäler, die ein Bild der früheren Natur- und Kulturlandschaft sowie der Lebensweise der Menschen vermitteln. Sie können u.a. von der Archäologie und der Siedlungsgeschichte herangezogen werden, um ältere, heute verborgene Flurgliederungen aufzudecken oder um Wüstungen zu lokalisieren. Viele Flurnamen weisen auf den Landesausbau und eine frühere Rodungstätigkeit hin.
Auch über die Kontakte mit einer anderssprachigen Bevölkerung geben sie Auskunft, im südlichen und westlichen deutschen Sprachraum im Hinblick auf die romanisch-deutsche bzw. galloromanisch-deutsche Sprachberührung, an der Ostgrenze des deutschen Sprachraums hinsichtlich des slawisch-deutschen Sprachkontakts. So lassen sich etwa im Osten und in der Mitte Thüringens zahlreiche Flurnamen als Slavica identifizieren und dienen damit gemeinsam mit slawischen Ortsnamen und archäologischen Funden als Zeugnisse slawischer Ansiedlung. Auch im weiteren deutsch-slawischen Kontaktgebiet besitzen die slawischen Flurnamen Aussagekraft hinsichtlich des Verhältnisses der verschiedenen Ethnien zueinander.
Die Wirtschafts- und die Sozialgeschichte nutzen die Flurnamenforschung, um z.B. Aussagen zu örtlichen Bodenschätzen, zur vorherrschenden Nutzung des Landes oder zum Anbau von Sonderkulturen machen zu können. Die Heimatforschung und die Volkskunde greifen schon seit Langem auf sprachwissenschaftliche Untersuchungen von Flurnamen zurück, da sie wertvolle Hinweise zu lokalen Dialekten, zur heimatlichen Siedlungs-, Wirtschafts- und Sozialgeschichte, zur Wüstungsforschung oder zur lokalen Urgeschichte geben können. Auch die Rechtsgeschichte, Kirchen- und Personengeschichte arbeiten mit namenkundlichen Methoden. Die Namenkunde wird deshalb von der gesamthistorischen Forschung als eine Art „Hilfswissenschaft“ betrachtet.


            </p>
            
          </div>
        </Accordion>
      </div>
    );
  }
}
export default Flurnamen;
