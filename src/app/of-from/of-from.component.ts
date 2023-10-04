import { Component,OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent {
  constructor(private service: DesignUtilityService) {}
  obsmsg: any ;
  ngOnInit(): void {
    
    //OF
    const obs1 = of('Rooshan','Baber','Arsalan');
    obs1.subscribe(res => {
      this.service.print(res,'elContainer');
    });

    const obs2 = of({a:'Rooshan',b:'Baber',c:'Arsalan'});
    obs2.subscribe(res => {
      this.obsmsg = res;
    });

    //FROM(Array)
    const obs3 = from(['Rooshan', 'Baber', 'Arsalan']);
    obs3.subscribe(res => {
      this.service.print(res,'elContainer3');
    });

    //FROM(Promise)
    const promise = new Promise(resolve => {
      setTimeout(()=>{
        resolve("Promise Resolved");
      },4000);
    });
    const obs4 = from(promise);
    obs4.subscribe(res => {
      this.service.print(res,'elContainer4');
    });

     //FROM(String)
    const obs5 = from('Rooshan Baber');
    obs5.subscribe(res => {
      this.service.print(res,'elContainer5');
    });
  }
}
