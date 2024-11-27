export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
  salary: number;
  status: 'active' | 'on_leave' | 'terminated';
}

export interface EmployeeFormData {
  name: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
  salary: number;
}