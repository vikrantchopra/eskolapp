import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models';

@Component({
  selector: 'app-crud-employee',
  templateUrl: './crud-employee.component.html',
  styleUrls: ['./crud-employee.component.css'],
  providers: [EmployeeService]
})
export class CrudEmployeeComponent implements OnInit {

  items: any;
  employee: Employee;
  selectedRecord: any;
  displayDialog: boolean;
  saveDelete: string = 'save';

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    console.log("Calling initialize inside show-employee");
    this.load();
    this.employee = this.initializeEmployee();
  }

  load() {
    this.items = this.service.getEmployees();
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

  editDelete(emp: Employee) {
    if (this.saveDelete == "save") {
      this.updateEmployee(emp);
    } else if (this.saveDelete == "delete") {
      this.deleteEmployee(emp);
    }
  }

  deleteEmployee(emp: Employee) {
    this.service.delete(emp);
    this.displayDialog = false;
    this.employee = this.initializeEmployee();
  }

  updateEmployee(emp: Employee) {
    this.service.update(emp);
    this.displayDialog = false;
    this.employee = this.initializeEmployee();
  }

  onRowSelect(event) {
    this.employee = this.cloneEmployee(event.data);
    this.displayDialog = true;
  }

  cloneEmployee(item: any) {
    let employee = {
      id: item.id,
      name: item.Name,
      empid: item.EmpId,
      role: item.Role,
      phone: item.Phone,
      email: item.Email,
      extension: item.Extension,
      cubicle: item.Cubicle,
      team: {
        name: item.Team.Name,
        process: item.Team.Process,
        coach: item.Team.Coach,
        manager: item.Team.Manager
      }
    }
    return employee;
  }




}
