import { Component } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent {
  constructor(private service: DesignUtilityService) {}
  
  Arr = ['Rooshan', 'Baber', 'Ahmed', 'Ali', 'Aneeq', 'Basit','Fasih',"Haroon"];
  Colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Pink', 'Orange', 'Brown'];
  mycolor: any;
  source = interval(1000);
  ngOnInit(): void {
    //Ex - 01
    let obsSub: Subscription;
    obsSub = this.source
    .pipe(
      tap(res =>{
        if(res >= this.Arr.length){
          obsSub.unsubscribe();
        }
      })
      ,map(data => 
      this.Arr[data]
    ))
    .subscribe((res) => {
      this.service.print(res, 'elContainer');
    });

      //Ex - 02
      let obsSub2: Subscription;
      obsSub2 = this.source
      .pipe(
        tap(res =>{
          if(res >= this.Colors.length){
            obsSub2.unsubscribe();
          }
          this.mycolor = this.Colors[res];
        })
        ,map(data => 
        this.Colors[data]
      ))
      .subscribe((res) => {
        this.service.print(res, 'elContainer2');
      });
    }
  }
