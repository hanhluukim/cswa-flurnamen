import axios from "axios";

//Infornation von APIs
const token="cmVzdGFwaS1yZWFkOmRlMjgxMjMyOGIzYTZmODc1NDIyYjM4NzZlMDJiZTM3"
const authHeader={'Authorization': `Basic ${token}`}
const API_URL='https://collections.thulb.uni-jena.de/api/v1'


const keys=[
  'title',
  'area',
  'evidence',
  'note',
  'parent'
]
/*
Aus der Daten werden nur folgende Funktionen eines Ergebnises gespeichert.
*/
const getResultsList = (data)=>{
  const foundObjects=[]
  for (var i = 0; i < data.length; i++)
        {
            var len=0
            if(data[i]['link']!=null){
              len=data[i]['link'].length
            }
            var new_data={
                'id':data[i]['id'],
                'title':data[i]['title'][0],
                'place':data[i]['place'][0],
                'gnd':data[i]['gnd'],
                'link':data[i]['link'],
                'len':len,
                'facetObjectType':data[i]['facetObjectType'],
                "search_result_link_text":data[i]["search_result_link_text"],
                'ArchFile_class_001_Label':data[i]['ArchFile_class_001_Label'][1],
                
            }
            foundObjects.push(new_data)
        }
    return foundObjects
};


/*
Funktion zum Aufrufen der Daten mit dem gegebenen Title.
Return bereits in JSON
Ergebnisse für gesuchten Title werden an Search Komponent gesendet
*/
const searchInfoQuery  = (title) => {
      var req = API_URL+ '/search?wt=json&q=+cbuUnitTypes.actual:(33.0 33.1) AND objectType:"cbu" AND title:'+title;
      return axios.get(req, {headers:authHeader}).then((response)=>{
        
          const data = response.data.response.docs; //docs is a list
          const resp_in_list= getResultsList(data);
          return resp_in_list;
      });      
};

/*
- Eine Gemarkung hat eine Sammlung von untergeordneten Flurnamen als children
- Es gibt eine Liste der children der Gemarkung
- Für jedes Element (flurname) wird ein GET-Request mit ID gesendet
- Nur einige Merkmale wurden gespeichert
*/

const getChilden= async (childList)=>{
  //console.log("RUFEN CHILDREN");
  var childInfos=[]

  for(var i in childList.slice(0,15)){
      var childID = childList[i].$["xlink:title"];
      var childReq = API_URL+'/objects/'+childID;
      var childRes = {};
      await axios.get(childReq, {headers:authHeader}).then(function (response) {
        var xml2js = require('react-native-xml2js');
        var parser = new xml2js.Parser();
        var dataJS='';
        parser.parseString(response.data, function (err, detailJSON) {
            dataJS = detailJSON.mycoreobject;
            //console.log("content");
            //console.log(content);
            //dataJS = content;
          });
          
        var content={
          title:' ',
          area:' ',
          evidence:' ',
          note:' ',
          parent:' ',
        };
        
          try{
            //metadata[0]["def.title"][0].title[0]._
            var title = dataJS.metadata[0]["def.title"][0].title[0]._;
            content.title=title;
          }catch{}
        
          try{
            var area = dataJS.metadata[0]["def.area"][0].area[0]._;
            content.area=area;
          }catch{}
          try{
            var evidence = dataJS.metadata[0]["def.evidence"][0].evidence[0]._;
            content.evidence=evidence;
          }catch{}
          try{
            var note = dataJS.metadata[0]["def.note"][0].note[0]._;
            content.note=note;
          }catch{}
        
          try{
            var parent = dataJS.structure[0].parents[0].parent[0].$["xlink:href"];
            content.parent=parent;
          }catch{}
          //return resJ;
          //console.log('content');
          //console.log(content);
          childRes = content;
          //console.log('chilRes in function');
          //console.log(childRes);
          
        });
      
        console.log("children");
          console.log(childRes);
          childInfos.push(childRes);
      }
      
  return childInfos
}

/*
response von einer Gemarkung beinhaltet mehrere children
information von children wird mit der funktion getChildren gefunden und gespeichert
*/
const contentDetailGemarkung= async (dataJS)=>{
  var content={
      'title':dataJS.metadata[0]["def.title"][0].title[0]["_"],
     
      'children': []
  }
  var childINfos = null;
 
 
  await getChilden(dataJS.structure[0].children[0].child).then(function (result){
    console.log(result);
    childINfos = result;
  });
  
  content.children = childINfos;

  var result = []
  result.push(childINfos);
  return result;
};

/*
Informationen eines Flurnamen wird gefiltert und gespeichert

*/
const contentDetailFlurname=(dataJS)=>{

  //console.log(dataJS);
  //console.log("SERVER RESPONSE");
  
  const details=[[]];
  const content={
    title:' ',
    area:' ',
    evidence:' ',
    note:' ',
    parent:' ',
  };
  
  try{
    //metadata[0]["def.title"][0].title[0]._
    var title = dataJS.metadata[0]["def.title"][0].title[0]._;
    content.title=title;
  }catch{

  }

  try{
    var area = dataJS.metadata[0]["def.area"][0].area[0]._;
    content.area=area;
  }catch{

  }

  try{
    var evidence = dataJS.metadata[0]["def.evidence"][0].evidence[0]._;
    content.evidence=evidence;
  }catch{

  }

  try{
    var note = dataJS.metadata[0]["def.note"][0].note[0]._;
    content.note=note;
  }catch{

  }

  try{
    var parent = dataJS.structure[0].parents[0].parent[0].$["xlink:href"];
    content.parent=parent;
  }catch{

  }
  details[0].push(content);
  return details;
};

const getInfoDetails = (objectID) => {
  var req = API_URL+'/objects/'+objectID;
  return axios.get(req, {headers:authHeader}).then((response)=>{
        
        var xml2js = require('react-native-xml2js');
        var parser = new xml2js.Parser();
        var dataJS='';
        parser.parseString(response.data, function (err, detailJSON) {
            dataJS = detailJSON.mycoreobject;
        });
        //console.log("ALL KEYS");
        //console.log(dataJS);
        //console.log(Object.keys(dataJS.structure));
        //console.log(dataJS.structure['0']);
        
        var keys = Object.keys(dataJS.structure['0']);

        if(keys.includes('children')){
            var contentG = contentDetailGemarkung(dataJS);
            //console.log("RUECKWERTE");
            //console.log(contentG);
            return contentG
        }
        else{
          //Flurname
            
            var contentF = contentDetailFlurname(dataJS);
            return contentF
        }
        //console.log(dataJS);
        //var content = contentDetails(dataJS)
      
  });
};

export default {
  searchInfoQuery,
  getInfoDetails
};