export interface User {
  name: string;
  picture: string;
  admin: boolean;
  iss: string;
  aud: string;
  auth_time: number;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
}


// {
//   "name": "Jane Q. User",
//   "picture": "https://example.com/jane-q-user/profile.jpg",
//   "admin": true,
//   "iss": "https://securetoken.google.com/banmpam-webapp2020",
//   "aud": "banmpam-webapp2020",
//   "auth_time": 1599259703,
//   "user_id": "OkjiW7OSTrh9XOknS1ZtQxAjNwa2",
//   "sub": "OkjiW7OSTrh9XOknS1ZtQxAjNwa2",
//   "iat": 1599259703,
//   "exp": 1599263303,
//   "email": "carteasy@gmail.com",
//   "email_verified": false,
// }