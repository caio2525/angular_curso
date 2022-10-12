import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animais: Array<Animal>, animail: Animal)
  {
    return animais.filter(an => an.name !== animail.name);
  }
  
}
