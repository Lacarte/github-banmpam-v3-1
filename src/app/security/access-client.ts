import { userAuth } from "../shared/interfaces/user-auth";

/*
 * To verify the what kind of permission the user has.
 */

export class AccessClient {

  static hasAccess(element: string): boolean {
    const user:userAuth = JSON.parse(sessionStorage.getItem('AUTH_DATA'));
    let permissions: string[];
    let found: string;

    if (user) {
    // permissions = user.permissions;
    }

    if (permissions) {
      if (permissions.length > 0) {
        found = permissions.filter(p => p.toUpperCase() === element)[0];
        if (found) {
          return found.toUpperCase() === element;
        }
      }
    }
    return false;
  }
}
