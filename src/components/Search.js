import { render } from 'react-dom';
import React, { Component} from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
//import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { MDBCol, MDBBtn, MDBIcon, MDBRow} from "mdbreact";
import GetService from '../components/apis/get.service';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Display from './Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { useState } from 'react';


var foundObjects=[]


var requestGetIDs = {
    method: 'get',
    url: 'https://collections.thulb.uni-jena.de/api/v1/search?q=+cbuUnitTypes.actual:(33.0%2033.1)%20AND%20objectType:%22cbu%22&rows=50&wt=json',
    //'https://collections.thulb.uni-jena.de/api/v1/search?q=+cbuUnitTypes.actual:(33.0%20%20%20%20%20%20%20%20%20%2033.1)&wt=json',
    headers: { 
      'Authorization': 'Basic cmVzdGFwaS1yZWFkOmRlMjgxMjMyOGIzYTZmODc1NDIyYjM4NzZlMDJiZTM3'
    }
  };

class Search extends Component {

  //define the constructure of component Search

  constructor(props) {
    super(props);

    const default_query="";

    this.state = {
        query: default_query,
        idList: [],
        results: [],
        filterBestand:[],
        all: 0,
        //parameters for search of query
        isLoadedForQuery: false,
        resultsForQuery: [],
        filterSelect: "0",
        //isOpenImage:false
        //modal
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }

  async componentDidMount() {
    //first request to get all IDs
    await axios(requestGetIDs).then((response)=>{
        //get number of all results
        this.setState({
          all: response.data.response.numFound
        })

        const data = response.data.response.docs; //docs is a list
        
        for (var i = 0; i < data.length; i++)
        {
            var new_data={
                'id':data[i]['id'],
                'title':data[i]['title'][0],
                
                //'gnd':data[i]['gnd'],
                'link':data[i]['link'],
                //'facetObjectType':data[i]['facetObjectType'],
                //"search_result_link_text":data[i]["search_result_link_text"],
                //'ArchFile_class_001_Label':data[i]['ArchFile_class_001_Label'][1],
                
            }
            foundObjects.push(new_data)
        }
       
        this.setState({
            results:foundObjects
            //results: fakeResp
        });
      })
      .catch((error)=>{
        console.log(error);
      });
      console.log("First Call for Suggestions: loaded");
  }


  handleInputChange = () => {
      if(this.search.value!==''){
      this.setState({
      query: this.search.value,
      //based on query will rall results be filtered
      //suggestion durch der Title die Buchstaben aus dem Eingabe erhält
      filterBestand:this.state.results.filter((bestand)=>bestand['title'].toLowerCase().includes(this.state.query.toLowerCase()))
      })
    }
    else{
      this.setState({
        isLoadedForQuery:false
      })
    }

  }

  handelSelect = (e) =>{
    console.log("event" + e.target.value);
    this.setState({
      filterSelect: e.target.value
    });
    //console.log("choose" + this.state.filterSelect);
  }
  /*
  Daten für eingebene Anfrage aufrufen
  Response wird in dem State resultForQuery gespeichert
  */
  getResultsForQuery =(event) =>{
    const title = this.state.query;
    const filter = this.state.filterSelect;
    console.log(title);
    GetService.searchInfoQuery(title, filter).then((result)=>{
      console.log("query");
      console.log(this);
      console.log(result);
      this.setState({
        resultsForQuery:result,
        isLoadedForQuery:true,
      
      });
      //this.search.value="";

    });
    console.log("results for query loaded");
    
  }

  render() {
    //adding number of results
    var isFound = this.state.filterBestand.length;
    
    var isLoaded = this.state.isLoadedForQuery;

    let suggestResults;
    let showResults;
    let filterSearch;
    
    
   if(isFound && isLoaded==false){

     suggestResults=<div className="card" style={{margin:'auto', textAlign:'justify'}} id="list-suggests">
     {this.state.filterBestand.slice(0,5).map((item, index) => <SuggestList key={index} {...item} />)}
     </div>
   }
    var isFoundForQuery = this.state.resultsForQuery.length;
    if(isLoaded==true){
      if(isFoundForQuery!==0){
        showResults=<h3 id="id-number-results" class="text-success"><span>{isFoundForQuery}</span> Ergebnis gefunden</h3>
      }
      else{
        showResults=<h3 id="id-number-results" style={{textAlign:'justify'}}class="text-danger"><span>0</span> Ergebnis gefunden!</h3>
      }
    }

    filterSearch=<Form center>
    {['checkbox'].map((type) => (
      <div key={`default-${type}`} className="mb-3">
        <Form.Row center style={{marginLeft:'auto', marginRight:'auto'}}>
        <Form.Group as={Col} md="4">
          <Form.Check
            defaultChecked={true}
            type={type}
            id={`default-${type}`}
            label={'Flurname'}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Check
            //disabled
            defaultChecked={true}
            type={type}
            label={'Gemarkung'}
            id={`disabled-default-${type}`}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Check
            //disabled
            type={type}
            label={'Ort'}
            id={`disabled-default-${type}`}
          />
        </Form.Group>
        </Form.Row>
      </div>
    ))}
</Form>


    //render HTML
    return (
      <div className="Search">
        
        <MDBCol>
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">

                <span className="input-group-text green lighten-3" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                </span>
                <span className="input-group-text green lighten-3">
                  <select className="browser-default custom-select" onChange={this.handelSelect}>
                    <option select='selected' value="0">optionale Suche</option>
                    <option value="1">Flurkarte</option>
                    <option value="2">Gemarkung</option>
                    <option value="3">Ort</option>
                  </select>
                </span>
                </div>
                  
                    <input name="input-query"
                        className="form-control my-0 py-1" 
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                        //onKeyPress={event=>event.key=="Enter" &&this.getResultsForQuery}
                        type="text" 
                        placeholder="Suchbegriff eingeben und Button drücken" 
                        aria-label="Search" />
                    <MDBBtn id="id-btn-search" color="green" onClick={this.getResultsForQuery}>Suchen</MDBBtn>
                 
              </div>
        </MDBCol>

        {/*filterSearch*/}
        {/*Suggessions*/}        
        {suggestResults}
        

        {showResults}
        
        <MDBTable id="table-results" className="table-result">
          <MDBTableHead>
            <tr>
              <th>Title</th>
              <th>GND</th>
              <th>Typ</th>
              <th>Untergeordnete</th>
              
              <th>Details</th> 
              <th>Beispiel</th>
              <th>Kollektion</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
              {this.state.resultsForQuery.map((item, index) => <ResultsList key={index} {...item} />)}
              {/*{this.state.resultsForQuery.map((item, index) => <SearchResult key={index} item={item} />)*/}
          </MDBTableBody>

        </MDBTable> 
      </div>
    );
  }  
}


const ResultsList=(props)=>{
  //console.log(props);

  const [isOpen, setImage] = useState(false);
  
  const objectID=props.id;
  const title = props.title;


  console.log("result properties");
  console.log(props);

  //let childs = props.link;
  let isLink = null;
  if (props.img===""){
    isLink=false;
  }
  else{
    isLink=true;
  }

  //var detailsPage = "/details:"+objectID;
  //img[0].$["xlink:href"]

  return (
  <tr>
    <td>{props['title']}</td>
    <td>{props['place']}</td>
    <td>{props['facetObjectType']}</td>
    <td>{props['len']}</td>
    
    <td>
    <Display name="modalOpen" value={[title,objectID]}/>
    {/*
        <Link
        class="btn btn-success"
        to={detailsPage}
        >Anzeige</Link>
    */}
    </td> 
    <td>
      {isLink ? (
      <div>
        <img className="photo" src={props['img']} onClick={() => setImage(true)}/>
        
        {isOpen && (
        <Lightbox
            mainSrc={props['img']}
            onCloseRequest={() => setImage(false)}
          />
        )}
      </div>
      )
      :(<p></p>)
      }
    </td>
    <td>
      {isLink ? (
      <div>
       
        <a style={{margin:'auto', textAlign:'justify'}} href={props['collection']}><MDBIcon icon="eye"/></a>
        
      </div>
      )
      :(<p></p>)
      }
    </td>

  </tr> 
  );
};

const SuggestList=(props)=>(
    <p class="p-suggest">
    {props['title']}
    </p>
);



export default Search;

//
//<td name="details">
//<Display name="modalOpen" value={[title,objectID]}/>
//<Display 
//  objectTitle={props['title']} 
//  objectID={props.id}/>
//</td>
