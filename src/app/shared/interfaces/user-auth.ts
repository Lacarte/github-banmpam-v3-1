export interface userAuth {
  meta: Meta;
  response: Response;
}
export interface Meta {
  code: number;
}
export interface Response {
  authUser: AuthUser;
}
export interface AuthUser {
  userName: string;
  bearerToken: string;
  userPermissions: UserPermissions;
}
export interface UserPermissions {
  isAuthenticated: boolean;
  canAccessProcess: boolean;
  canAccessSettings: boolean;
}
