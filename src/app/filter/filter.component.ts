import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  dataArr = [
    { id: 1, name: 'John', gender: 'Male' },
    { id: 2, name: 'Alice', gender: 'Female' },
    { id: 3, name: 'Bob', gender: 'Male' },
    { id: 4, name: 'Eva', gender: 'Female' },
    { id: 5, name: 'Mike', gender: 'Male' },
    { id: 6, name: 'Sarah', gender: 'Female' },
    { id: 7, name: 'David', gender: 'Male' },
    { id: 8, name: 'Emily', gender: 'Female' },
    { id: 9, name: 'Tom', gender: 'Male' },
    { id: 10, name: 'Olivia', gender: 'Female' },
    { id: 11, name: 'Sam', gender: 'Male' },
    { id: 12, name: 'Grace', gender: 'Female' },
    { id: 13, name: 'Alex', gender: 'Male' },
    { id: 14, name: 'Sophia', gender: 'Female' },
    { id: 15, name: 'Ryan', gender: 'Male' },
    { id: 16, name: 'Lily', gender: 'Female' },
    { id: 17, name: 'Daniel', gender: 'Male' },
    { id: 18, name: 'Chloe', gender: 'Female' },
    { id: 19, name: 'William', gender: 'Male' },
    { id: 20, name: 'Emma', gender: 'Female' },
  ];
  data!: any;
  data2!: any;
  data3!: any;

  constructor() {}

  ngOnInit(): void {
    const source = from(this.dataArr);

    //Ex - 01 (Filter by Length)
    source
      .pipe(
        filter((member) => member.name.length > 5),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });

    //Ex - 02 (Filter by Gender)
    source
      .pipe(
        filter((member) => member.gender == "Male"),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });

      //Ex - 03 (Filter by nth item)
    source
    .pipe(
      filter((member) => member.id <= 6),
      toArray()
    )
    .subscribe((res) => {
      this.data3 = res;
    });  
  }
}
