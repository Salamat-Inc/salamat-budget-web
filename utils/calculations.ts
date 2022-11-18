interface Employee {
  name: string;
  salary: number;
}

interface Category {
  name: string;
  subCategories: SubCategory[];
}

interface SubCategory {
  name: string;
}

class ProjectBudget {
  // class fields
  value: number;
  categories: Category[];

  // constructor
  constructor(_value: number) {
    this.value = _value;
    this.categories = [];
  }

  // methods
  getValue = () => this.value;

  setValue = (_value: number) => {
    this.value = _value;
  };
}

export default ProjectBudget;
