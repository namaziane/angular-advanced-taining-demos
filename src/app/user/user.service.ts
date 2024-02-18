import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  getUsers(): any {
    return this.httpClient.get('http://localhost:8080/users');
  }
}
