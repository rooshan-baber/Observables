import { Component,ElementRef,OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent {
  constructor(private service : DesignUtilityService) {}
  @ViewChild('addBtn') addBtn: ElementRef | undefined;
  
  ngOnInit():void {

  }
  
  ngAfterViewInit():void {
    
    let count = 1; 
    fromEvent(this.addBtn?.nativeElement,'click').subscribe(res => {
      let value = 'Video ' + count++ ;
      this.service.print(value,'elContainer');
    });
  };

}
