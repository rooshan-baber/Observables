import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from '../Services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnDestroy {
  constructor(private service : DesignUtilityService) {}
  msg: any;
  videoSubscription: Subscription | undefined;
  broadCastVideos = interval(1000);
  // broadCastVideos = timer(4000,1000);
  ngOnInit(): void {
    this.startVideoSubscription();
  }

  startVideoSubscription() {
    this.videoSubscription = this.broadCastVideos.subscribe(res => {
      this.msg = 'Video ' + res;
      this.service.print(this.msg,'elContainer');
      this.service.print(this.msg,'elContainer1');
      this.service.print(this.msg,'elContainer2');
      if (res >= 5) {
        this.stopVideoSubscription();
      }
    });
  }

  stopVideoSubscription() {
    if (this.videoSubscription) {
      this.videoSubscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.stopVideoSubscription();
  }
}
