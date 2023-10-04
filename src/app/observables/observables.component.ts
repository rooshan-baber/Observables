import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  Navigate(path: string) {
    this.router.navigate([path]);
  }
}
