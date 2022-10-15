import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove(animais: Array<Animal>, animail: Animal)
  {
    return animais.filter(an => an.name !== animail.name);
  }

  getAll(): Observable<Array<Animal>>
  {
    return this.http.get<Animal[]>(this.apiUrl)
  }
  
}
