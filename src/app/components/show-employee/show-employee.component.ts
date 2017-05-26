import { Component, OnInit } from '@angular/core';
import { EmployeeService }  from '../../services/employee.service';

import { Employee } from '../../models';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css'],
  providers: [EmployeeService]
})
export class ShowEmployeeComponent implements OnInit {

  items: any;
  employee: Employee;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.loadEmployees();
    this.employee = this.initializeEmployee();
  }

  loadEmployees() {
    this.items = this.service.getEmployees();
    //console.log("Item size: " + this.items.size())
  }

  addEmployee(emp: Employee) {
    this.service.save(emp);
    this.employee = this.initializeEmployee();
  }

  initializeEmployee() {
    let employee = {
      name: '',
      empid: '1000000',
      role: '',
      phone: '98301 23456',
      email: 'firstname.lastname@kofax.com',
      extension: '4xyz',
      cubicle: '7xy-ab',
      team: {
        name: '',
        process: 'Kanban',
        coach: '',
        manager: ''
      }
    };

    return employee;
  }

}
