import { Component } from '@angular/core';
import { Subscription, from, interval, take, toArray } from 'rxjs';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent {
  constructor(private service : DesignUtilityService) {}
  users = [
    {name:'Rooshan', skill:'Angular'},
    {name:'Umer', skill:'Dotnet'},
    {name:'Hamza', skill:'Full Stack'},
  ]
  obsmsg : any
  sourceSub: Subscription | undefined;
  ngOnInit(): void {
    //Ex - 01
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5),toArray()).subscribe((res) => {
      this.service.print(res,'elContainer');
    });

    //Ex - 02
    const source2 = from(this.users);
    source2.pipe(toArray())
    .subscribe(res =>{
      this.obsmsg = res;
    })
  }
}
