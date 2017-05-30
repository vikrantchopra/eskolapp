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

  empItems: any[];
  editItems: any;
  employeeObj: Employee;

  constructor(private service: EmployeeService) { }

 ngOnInit() {
    this.loadEmployees();
    console.log("Item size: " + this.empItems.length);
    this.employeeObj = this.initializeEmployee();
  }

  loadEmployees() {console.log("Calling Load Employees")
    this.editItems = this.empItems = this.service.getEmployees();
    //console.log("Item size: " + this.empItems.length);
  }

  /*addEmployee(emp: Employee) {
    this.service.save(emp);
    this.employeeObj = this.initializeEmployee();
  }*/

  addEmployee(event) {
    this.employeeObj = event;
    this.service.save(this.employeeObj);
    this.employeeObj = this.initializeEmployee();
    
  }

  deleteEmployee(event) {
    this.employeeObj = event;
    this.service.delete(this.employeeObj);
    this.employeeObj = this.initializeEmployee();
    
  }

  initializeEmployee() {
    let employee = {
      id:'',
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
