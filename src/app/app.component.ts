import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent, ListemployeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
