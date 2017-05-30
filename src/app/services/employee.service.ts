import { Injectable } from '@angular/core';
import { HorizonService } from './horizon.service';

import { Employee } from '../models';

@Injectable()
export class EmployeeService {

  table = this.horizon.table("employee");

  constructor(private horizon: HorizonService) {

  }

  getEmployees() {
    return this.table
      .order('datetime', 'descending')
      //.limit(20)
      .watch();
      
  }

  save(emp: Employee) {
    this.table.store({
      id:emp.id,
      Name: emp.name,
      EmpId: emp.empid,
      Role: emp.role,
      Phone: emp.phone,
      Email: emp.email,
      Extension: emp.extension,
      Cubicle: emp.cubicle,
      Team: {
        Name: emp.team.name,
        Process: emp.team.process,
        Coach: emp.team.coach,
        Manager: emp.team.manager
      },
      datetime: new Date(),
    });
  }

  delete(emp: Employee) {console.log("EmpID: " + emp.empid);
    //this.table.remove(emp);
    this.table.remove(emp.id);
    //messages.remove({id: 101});
  }

}
