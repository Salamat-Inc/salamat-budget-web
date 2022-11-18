export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const SET_PROJECT = 'SET_PROJECT';

export const budgetReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_PROJECT: {
      return action.payload;
    }
    case CREATE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.push(action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
