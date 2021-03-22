//import { MDBContainer } from "mdbreact";
import { Component } from "react";
import GetService from './apis/get.service';
//import {MDBBtn} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

class DisplayPage extends Component{
    constructor(props){
        super(props);
        this.state={
            //title: props.title,
            objectID: props.match.params.objectID.replace(':','')
        };
        //console.log(this.props.match.params.objectID);
        //console.log(this.state.objectID);
        this.callDetails=this.callDetails.bind(this);
    }

    componentDidMount() {
        this.callDetails(this.state.objectID);

    }

    callDetails=(objectID)=>{
        console.log("asdadadasd");
        var resp = GetService.getInfoDetails(objectID).then((res)=>{
            console.log(res);
            this.setState({
                details: res,
                show:true
            });
            
        });
    }

    render(){
        let table = null;
        
        if(this.state.show==true && this.state.details){
            console.log("DETAILS DISPLAY PAGE");
            console.log(this.state.details);
            console.log(this.state.details[0]);
            console.log(this.state.details[0].children);
            var mList= this.state.details[0].children;
            var list = [1,3];
            table = mList.map((item, index)=> <Flurname key={index} {... item}/>);
            //table = mList.map((item ) =>
            //{
            //return (<Flurname {item}/>)
        //});
            //console.log("IM IF FUNCTION");
            //console.log(table);
            //console.log("END IF FUNCTION");
        }

        return(
        
            <MDBTable id="detail-results" className="table-detail-result">
                <MDBTableHead>
                    <tr>
                      <th>Flurname</th>
                      <th>Area</th>
                      <th>Beleg</th>
                      <th>Note</th>
                      <th>Obergeordnete</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                
                    {table}
               
                </MDBTableBody>
            </MDBTable>
        );
    }
}
const Flurname=(props)=>{
     
    console.log("Flurname COMPONENTEN AUFRUFEN");
    //console.log(props['value']);
    //console.log("check title");
    console.log(props);
  
    const res = props//['value'];
    
    return (
    <tr>
      <td>{res['title']}</td>
      <td>{res['area']}</td>
      <td>{res['evidence']}</td>
      <td>{res['note']}</td>
      <td>{res['parent']}</td>
    </tr> 
    );

  };
export default DisplayPage;