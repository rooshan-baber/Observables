import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(count:any,Id:any){
    let el = document.createElement('li');
    el.innerText= count;
    document.getElementById(Id)?.appendChild(el);
  };
}
