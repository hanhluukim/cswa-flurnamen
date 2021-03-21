//others requests to get more information about objects
var infoDetails=[]
for(var i in finalIDs){
    var infos;

    var objID = finalIDs[i]['id'];
    var getInfo={
        method: 'get',
        url: 'https://collections.thulb.uni-jena.de/api/v1/objects/'+objID,
        headers: { 
        'Authorization': 'Basic cmVzdGFwaS1yZWFkOmRlMjgxMjMyOGIzYTZmODc1NDIyYjM4NzZlMDJiZTM3'
        }
    }
    await axios(getInfo).then((response)=>{

        var xml2js = require('react-native-xml2js');
        xml2js.parseString(response.data, (err, result) => {
          if(err) {
              throw err;
          }

          infos = result.mycoreobject;
        });
     })
      .catch((error)=>{
        console.log(error);
      });
    //add retrieved information in to list sof infoDetails
    infoDetails.push(infos);
}
this.setState({
  results:infoDetails //update state results
});