const Auth = {};

Auth.isAuthenticated = function() {
  return !!this.getToken();
};

Auth.setToken = function(token) {
  localStorage.setItem('token', token);
};

Auth.getToken = function() {
  return localStorage.getItem('token');
};

Auth.removeToken = function() {
  localStorage.removeItem('token');
};

// Decodes the token and gets values which were stored on it
Auth.getPayload = function() {
  const token = this.getToken();
  console.log(token);
  if(token){
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }else{
    return {};
  }
};

Auth.currentUsername = function() {
  return this.getPayload().username;
};

Auth.currentUserId = function() {
  console.log(this.getPayload().sub);
  return this.getPayload().sub;
};

Auth.bearerHeader = function() {
  return {
    headers: {
      // request headers
      authorization: `Bearer ${Auth.getToken()}`
    }
  };

};


export default Auth;
