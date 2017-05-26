import { Component, OnInit } from '@angular/core';

import { EmployeeService }  from '../../services/employee.service';
import { Employee } from '../../models';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  empItems: any;
  employeeObj: Employee;

  constructor(private service: EmployeeService) { }

 ngOnInit() {
    this.loadEmployees();
    this.employeeObj = this.initializeEmployee();
  }

  loadEmployees() {
    this.empItems = this.service.getEmployees();
    //console.log("Item size: " + this.items.size())
  }

  addEmployee(emp: Employee) {
    this.service.save(emp);
    this.employeeObj = this.initializeEmployee();
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
