import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  constructor(private service:DesignUtilityService) { }
  techStatus : any;
  techStatus2 : any;
  subs2:Subscription | undefined;
  name:any;
  nameStatus:any;
  ngOnInit(): void{
    //Ex - 01(Manual)
    const customObs1 = Observable.create((observer:any) =>{
      setTimeout(()=>{
        observer.next('Angular')
      },1000);
      setTimeout(()=>{
        observer.next('Typescript')
      },2000);
      setTimeout(()=>{
        observer.next('Javascript')
        // observer.error();
      },3000);
      setTimeout(()=>{
        observer.next('Html') 
        observer.complete();
      },4000);
    });

    customObs1.subscribe((res:any)=>{
      this.service.print(res,'elContainer')
    },(err:any)=>{
       this.techStatus = 'error' 
    },()=>{
      this.techStatus = 'completed'
    });

    //Ex - 02 (Custom Interval)
    const Array2 = ['Angular','Typescript','Javascript','Html','Css'];
    const customObs2 = Observable.create((observer:any)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(Array2[count]);
        if (count >= 3){
          observer.error('Error Emitted')
        }
        if (count >= 5){
          observer.complete()
        }
        count++;
      },1000);
    });

    this.subs2 = customObs2.subscribe((res:any)=>{
      this.service.print(res,'elContainer2');
    },(err:any)=>{
      this.techStatus2 = 'error' 
   },()=>{
     this.techStatus2 = 'completed'
   });

   //Ex - 03 (Random Names)
   const Array3 = ['Rooshan','Baber','Arsalan','Hamza','Umer'];
    const customObs3 = Observable.create((observer:any)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(Array3[count]);
        if (count >= 2){
          // observer.error('Error Emitted')
        }
        if (count >= 4){
          observer.complete()
        }
        count++;
      },1000);
    });
    
    customObs3.subscribe((res:any)=>{
      this.name = res ;
    },(err:any)=>{
      this.nameStatus = 'error' 
   },()=>{
     this.nameStatus = 'completed'
   });
  }

  ngOnDestroy():void{
    this.subs2?.unsubscribe();
  }
}
