// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
 
// remove the token from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
}
 
// set the token and from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
}
