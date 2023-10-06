import { Component } from '@angular/core';
import { DesignUtilityService } from '../Services/design-utility.service';
import { Subscription, from, interval, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent {
  constructor(private service: DesignUtilityService) {}
  source = interval(1000);
  obs1! : Subscription;
  obs2! : Subscription;
  obs3! : Subscription;
  Names = ['Rooshan', 'Baber', 'Ahmed', 'Ali', 'Aneeq', 'Basit','Fasih',"Haroon"];
  ngOnInit(): void {
     const nameSource = from(this.Names);
    //Ex - 01
    this.obs1 = nameSource
    .pipe(take(4))
    .subscribe(res=>{
      this.service.print(res,'elContainer')
    });

    //Ex - 02
    this.obs2 = nameSource
    .pipe(takeLast(4))
    .subscribe(res=>{
      this.service.print(res,'elContainer2')
    });

    //Ex - 03
    this.obs3 = this.source
    .pipe(takeUntil(timer(6000)))
    .subscribe(res=>{
      this.service.print(res,'elContainer3')
    });
  }
}
