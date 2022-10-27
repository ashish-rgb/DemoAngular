import { Department } from "./department";

export class Employee {
    empId:number=0;
    empName:string='';
    designation:string='';
	salary:number=0;
    joinDate:Date;
	phone:number=0;
    department:Department;
    active:boolean=false;
}
