import { Inject, Injectable } from '@angular/core';

import { BROWSER_STORAGE } from './storage';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { KnownDataService } from './known-data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private knownDataService: KnownDataService) { }

    public getToken(): string {
      return this.storage.getItem('known-token');
    }
    public saveToken(token: string): void {
      this.storage.setItem('known-token', token);
    }
    //Adding the two methods to wrap login and register. 
    //So in all three methods to get a JWT, save it, read it and delete it.
    public  login(user: User): Promise<any> {
     return this.knownDataService.login(user)
       .then ((authResp: AuthResponse) => this.saveToken(authResp.token));
    }
    
    public register(user: User): Promise<any> {
      return this.knownDataService.register(user)
        .then((AuthResp: AuthResponse) => this.saveToken(AuthResp.token));
    }

    public logout(): void {
      this.storage.removeItem('known-token');
    }

    //Method to check the log in status. 
    public isLoggedIn(): boolean {
      const token: string = this.getToken();
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload.exp > (Date.now() / 1000);
        } else {
          return false;
        }
    }

    //Method to get user info from JWT 
    public getCurrentUser(): User {
      if (this.isLoggedIn()) {
        const token: string = this.getToken();
        const { email, name } = JSON.parse(atob(token.split('.')[1]));
        return { email, name } as User;
      }
    }
}
