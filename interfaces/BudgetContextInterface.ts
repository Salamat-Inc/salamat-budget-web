interface Employee {
  name: string;
  daysHired: number;
  salary: number;
}

interface ProjectItem {
  category: string;
  subCategory?: string;
  employees: Employee[];
}

export interface Project {
  name: string;
  totalBudget: number;
  totalWeeks: number;
}

export interface BudgetContextInterface {
  project: Project;
  dispatch: any;
}
