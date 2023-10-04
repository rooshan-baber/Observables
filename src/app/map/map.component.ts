import { Component  } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  sub1!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;
  msg1!: string;
  msg2!: number;
  msg3!: string;
  constructor(private service : DesignUtilityService) {}

  ngOnInit(): void {
    //Ex -01
    const BroadcastVideos = interval(1000);

    this.sub1 = BroadcastVideos.pipe(
      map(data => "Video " + data)
    )
    .subscribe(res => {
      this.msg1 = res;
    });
    
    setTimeout(() => {
      this.sub1.unsubscribe();
      this.sub2.unsubscribe();
    }, 10000);

    //Ex - 02
    this.sub2 = BroadcastVideos.pipe(
      map(data => data + 10)
    ).subscribe(res =>{
      this.msg2 = res;
    });

    //Ex - 03
    const members = from([
      {id:1 , name:"Rooshan", age:25},
      {id:2 , name:"Baber", age:60},
      {id:3 , name:"Ali", age:30},
      {id:4 , name:"Ahmed", age:35},
      {id:5 , name:"Hamza", age:23},
      {id:6 , name:"Aneeq", age:18},
      {id:7 , name:"Mujtaba", age:24},
    ]);

    members.pipe(
      map(data => data.name)
    ).subscribe(res =>{
      this.service.print(res,'elContainer')
    });
  }

}
