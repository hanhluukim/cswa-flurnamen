import axios from "axios";

const m_account = {id:1, username:"Hanh", password:"hanhhanh", email:"hanh@gmail.com",roles:['ROLE_USER']}


const register = (username, email, password) => {
  if (username!=="Hanh"){

      var test_response={
        // `data` is the response that was provided by the server
        data: 
          {auth: 
            {id:2, username:username, email:email}, 
            message: 'erfolgreich registeriert'
          }
        ,
      
        // `status` is the HTTP status code from the server response
        status: 200,
      
        // `statusText` is the HTTP status message from the server response
        statusText: 'OK',
      
        // `headers` the headers that the server responded with
        // All header names are lower cased
        headers: {'Content-Type': 'text/json'},
      
        // `config` is the config that was provided to `axios` for the request
        config: {},
      
        // `request` is the request that generated this response
        // It is the last ClientRequest instance in node.js (in redirects)
        // and an XMLHttpRequest instance the browser
        request: {}
      };
      
      console.log("auth.service:");
      console.log(test_response);
      
      return test_response;
    }
    else{

      var error={
        // `data` is the response that was provided by the server
        data: 
          {auth: {id:2, username:username, email:email}, message: 'Nutzer existiert bereits'}
        ,
      
        // `status` is the HTTP status code from the server response
        status: 406,
      
        // `statusText` is the HTTP status message from the server response
        statusText: 'Not accepted',
      
        // `headers` the headers that the server responded with
        // All header names are lower cased
        headers: {'Content-Type': 'text/json'},
      
        // `config` is the config that was provided to `axios` for the request
        config: {},
      
        // `request` is the request that generated this response
        // It is the last ClientRequest instance in node.js (in redirects)
        // and an XMLHttpRequest instance the browser
        request: {}
      };
      
      return error;

    }
      /*
      return axios.post(API_URL + "signup", {
        username,
        email,
        password,
      });
      */
      
};

const login = (username, password) => {

  if (username==m_account.username && password== m_account.password){
    var resp={
      data:{
        auth:{
          user:{
            id:m_account.id, 
            username: m_account.username, 
            email: m_account.email, 
            roles:m_account.roles
          }
        },
        message:"success"
      }
    }
    localStorage.setItem("user", JSON.stringify(resp.data.auth.user));
    return resp
  }
  else{
    var error={
      data:{
        auth:{
          user:{}
        }, 
          message:"Nutzername oder Password nicht korrekt"}
      }
    return error
  }
  /*
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
    */
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};