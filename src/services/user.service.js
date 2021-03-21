

const m_account = {id:1, username:"Hanh", password:"hanhhanh", email:"hanh@gmail.com",roles:['ROLE_USER']}

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

const getPublicContent = () => {
  return "Hallo Public Content"
};

const getUserBoard = () => {
  return resp.data
};

export default {
  getPublicContent,
  getUserBoard
};