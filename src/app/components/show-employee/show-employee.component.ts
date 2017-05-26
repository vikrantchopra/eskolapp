import { Component, OnInit, Input, Output } from '@angular/core';
import { EmployeeService }  from '../../services/employee.service';

import { Employee } from '../../models';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css'],
  providers: [EmployeeService]
})
export class ShowEmployeeComponent implements OnInit {

  @Input() 
  items: any;
  @Input()
  employee: Employee;

  
  //constructor(private service: EmployeeService) { }
  constructor() {}

  ngOnInit() {
    //this.loadEmployees();
    //this.employee = this.initializeEmployee();
  }

  loadEmployees() {
    //this.items = this.service.getEmployees();
    //console.log("Item size: " + this.items.size())
  }

  addEmployee(emp: Employee) {
    //this.service.save(emp);
    //this.employee = this.initializeEmployee();
  }

  

}
