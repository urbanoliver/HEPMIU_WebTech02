import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { WeaponDTO } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<WeaponDTO[]>('/api/weapon');    
  }

  getOne(id: number) {
    return this.http.get<WeaponDTO>('/api/weapon/' + id);    
  }

  create(weapon: WeaponDTO) {
    return this.http.post<WeaponDTO>('/api/weapon', weapon);
  }

  update(weapon: WeaponDTO) {
    return this.http.put<WeaponDTO>('/api/weapon', weapon);
  }

  delete(id: number) {
    return this.http.delete('/api/weapon/' + id); 
  }
}