using { zproj01_emp.db } from '../db/datamodel';

service empservice @(path:'empsrv') {

    @readonly entity ReadEmpSet as projection on db.Employees;

}