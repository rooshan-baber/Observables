import { Component } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent {
  data!: any;
  data2!: any;
  constructor() {}

  users = [
    {
      name: 'Rooshan',
      skill: 'Angular',
      job: {
        title: 'Frontend Developer',
        experience: '4 months',
      },
    },
    {
      name: 'Aneeq',
      skill: 'Angular',
      job: {
        title: 'Frontend Developer',
        experience: '3 years',
      },
    },
    {
      name: 'Hamza',
      skill: 'Full Stack',
      job: {
        title: 'FullStack Developer',
        experience: '4 months',
      },
    },
    {
      name: 'Arshad',
      skill: 'DotNet',
      job: {
        title: 'Backend Developer',
        experience: '3 years',
      },
    },
    {
      name: 'Umer',
      skill: 'Full Stack',
      job: {
        title: 'Backend Developer',
        experience: '4 months',
      },
    },
  ];

  ngOnInit(): void {
    //Ex - 01
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    //Ex - 02
    from(this.users)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });
  }
}
