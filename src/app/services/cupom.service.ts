import { cupomListValid, ICupom } from './../interfaces/ICupom';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  constructor() { }

  cupomIsValid(cupom: string) {
    return cupomListValid.find(c => c.code === cupom);
  }


}


