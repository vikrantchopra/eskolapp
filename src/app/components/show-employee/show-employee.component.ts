import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css'],
  providers: [EmployeeService]
})
export class ShowEmployeeComponent implements OnInit {

  //@Input() 
  items: any;
  //@Input()
  employee: Employee;

  selectedRecords: any[];

  //@Output()
  //addRecord: EventEmitter<Employee> = new EventEmitter<Employee>();

  

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    console.log("Calling initialize inside show-employee");
    this.load();
    this.employee = this.initializeEmployee();
  }

  load() {
    this.items = this.service.getEmployees();
  }

  addEmployee(model: Employee) {
    //this.addRecord.emit(this.employee);
    this.service.save(model);
    this.employee = this.initializeEmployee();
  }

  initializeEmployee() {
    let employee = {
      id: '',
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
