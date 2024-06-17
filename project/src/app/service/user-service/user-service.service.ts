import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserDTO } from '../../../../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<UserDTO[]>('/api/user');
  }

  getOne(id: number) {
    return this.http.get<UserDTO>('/api/user/' + id);
  }

  create(user: UserDTO) {
    return this.http.post<UserDTO>('/api/user', user);
  }

}
