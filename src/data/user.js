export const users = [
  {
    "name": "Test",
    "password": "Test",
    "admin": true
  }
];
  
export function isRegistered(username, password) {
  const user = users.find(user => user.name === username && user.password === password);
  return Boolean(user);
}