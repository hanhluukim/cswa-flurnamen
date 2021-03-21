import { render } from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';



import { MDBCol, MDBBtn, MDBIcon} from "mdbreact";
import GetService from '../components/apis/get.service';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Display from './Modal';

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
        });
      })
      .catch((error)=>{
        console.log(error);
      });
      console.log("First Call for Suggestions: loaded");
  }



//metadata[0]["def.title"][0].title[0]["_"]  
  handleInputChange = () => {
    
      this.setState({
      query: this.search.value,
      //based on query will rall results be filtered
      filterBestand:this.state.results.filter((bestand)=>bestand['title'].toLowerCase().includes(this.state.query.toLowerCase()))
      })

  }

  getResultsForQuery =(event) =>{
    const title = this.state.query;
    console.log(title);
    GetService.searchInfoQuery(title).then((result)=>{
      console.log(result);
      this.setState({
        resultsForQuery:result,
        isLoadedForQuery:true
      });

    });
    console.log("results for query loaded");
  }

  render() {
    //adding number of results
    var isFound = this.state.filterBestand.length;
    var all = this.state.all;
    var isLoaded = this.state.isLoadedForQuery;

    let suggestResults;
    let showResults;

    if(isFound>1){
      suggestResults=<h6>Beispiele {all} Objekten </h6>

    }
    else{
      suggestResults=<h6>Beispiel von {all} Objekten</h6>
    }

    var isFoundForQuery = this.state.resultsForQuery.length;
    if(isLoaded==false){
    }
    else{
        if(isFoundForQuery!==0){
        showResults=<h3 class="text-success">{isFoundForQuery} Ergebnisse gefunden</h3>
      }
      else{
        showResults=<h3 style={{textAlign:'justify'}}class="text-danger">Keine Ergebnisse gefunden!</h3>
      }
    }

    //render HTML
    return (
      <div className="Search">
        
        <MDBCol>
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                <span className="input-group-text green lighten-3" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                </span>
                </div>
                  
                    <input className="form-control my-0 py-1" 
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                        //onKeyPress={event=>event.key=="Enter" &&this.getResultsForQuery}
                        type="text" 
                        placeholder="Flurname eingeben und Button drücken" 
                        aria-label="Search" />
                    <MDBBtn color="green" onClick={this.getResultsForQuery}>Suchen</MDBBtn>
                 
            </div>
        </MDBCol>
        
        {/*{suggestResults}*/}
        {this.state.filterBestand.slice(0,5).map((item, index) => <SuggestList key={index} {...item} />)}
        
        {showResults}
        
        <MDBTable className="table-result">
          <MDBTableHead>
            <tr>
              <th>Title</th>
              <th>GND</th>
              <th>Typ</th>
              <th>Untergeordnete</th>
              <th>Details</th> 
            </tr>
          </MDBTableHead>
          <MDBTableBody>
              {this.state.resultsForQuery.map((item, index) => <ResultsList key={index} {...item} />)}
          </MDBTableBody>

        </MDBTable> 
      </div>
    );
  }  
}

const ResultsList=(props)=>{
  console.log(props);
  console.log(props.place);
  const objectID=props.id;
  let childs = props.link;
  let len = 0
  if (childs!=undefined){
    len = childs.length
  }

  return (
  <tr>
    <td>{props['title']}</td>
    <td>{props['place']}</td>
    <td>{props['facetObjectType']}</td>
    <td>{len}</td>
    <td><Display value={objectID}/></td>
  </tr> 
  );
};

const SuggestList=(props)=>(
    <p>
    {props['title']}
    </p>
);



export default Search;