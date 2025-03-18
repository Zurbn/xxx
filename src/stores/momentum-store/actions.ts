import { createAction, props } from '@ngrx/store';
import { Department } from 'src/api/models/department/responses/department.model';
import { EmployeeCreateRequest } from 'src/api/models/employee/requests/empolyee-create-request.model';
import { Employee } from 'src/api/models/employee/responses/employee.model';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { Status } from 'src/api/models/status/responses/status.model';

//! Statuses

export const RetrieveStatuses = createAction(
  '[Momentum] Retrieve all available Statuses'
);

export const StatusesRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Statuses',
  props<{ statuses: Status[] }>()
);

export const ErrorRetrievingStatuses = createAction(
  '[Momentum] Error retrieving all available Statuses'
);

//! Priorities

export const RetrievePriorities = createAction(
  '[Momentum] Retrieve all available Priorities'
);

export const PrioritiesRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Priorities',
  props<{ priorities: Priority[] }>()
);

export const ErrorRetrievingPriorities = createAction(
  '[Momentum] Error retrieving all available Priorities'
);

//! Departments

export const RetrieveDepartments = createAction(
  '[Momentum] Retrieve all available Departments'
);

export const DepartmentsRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Departments',
  props<{ departments: Department[] }>()
);

export const ErrorRetrievingDepartments = createAction(
  '[Momentum] Error retrieving all available Departments'
);

//! Employees

//! Fetch
export const RetrieveEmployees = createAction(
  '[Momentum] Retrieve all available Employees'
);

export const EmployeesRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Employees',
  props<{ employees: Employee[] }>()
);

export const ErrorRetrievingEmployees = createAction(
  '[Momentum] Error retrieving all available Employees'
);

//! Register
export const RegisterEmployee = createAction(
  '[Momentum] Register Employee',
  props<{ employeeCreateRequest: EmployeeCreateRequest }>()
);

export const EmployeeRegistered = createAction(
  '[Momentum] Successfully register Employees',
  props<{ employee: Employee }>()
);

export const ErrorRegisteringEmployee = createAction(
  '[Momentum] Error registering Employee'
);
