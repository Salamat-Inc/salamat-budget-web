import { strictEqual } from 'assert';
import { normalizeRepeatedSlashes } from 'next/dist/shared/lib/utils';

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const SET_PROJECT = 'SET_PROJECT';
let idState = 12;

let employeeIdState = 400;

export const budgetReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_PROJECT: {
      return action.payload;
    }
    case CREATE_EMPLOYEE: {
      console.log(action.payload);
      const categoryId = action.payload.category;
      let orderItem;
      // add category to the order
      if (!state.categories[categoryId]) {
        const id = idState++;
        orderItem = { id, name: categoryId };
      }

      const updatedOrderItems = [...state.dataOrder];
      if (orderItem) {
        updatedOrderItems.push(orderItem);
      }
      console.log('updatedOrder items', updatedOrderItems);
      const employeeId = employeeIdState++;

      const employee = {
        id: employeeId,
        type: 'employee',
        rate: null,
        days: null,
        total: null,
      };

      const updatedCategoryOrder = [...state.categories[categoryId].order];

      console.log('here', updatedCategoryOrder, employee);

      updatedCategoryOrder.push(employee);

      const updatedWeeklyReports = state.weeklyReports.map((report: any) => {
        report.rateData = {
          ...report.rateData,
          [employeeId]: {
            days: null,
            currentTotal: null,
            totalToDate: null,
          },
        };
      });
      const n = {
        ...state,
        dataOrder: updatedOrderItems,
        categories: {
          ...state.categories,
          [categoryId]: {
            order: updatedCategoryOrder,
          },
        },
        // weeklyReports: updatedWeeklyReports,
        employees: {
          ...state.employees,
          [employeeId]: {
            name: action.payload.name,
          },
        },
      };
      console.log('update state', n);

      return n;
    }

    case 'UPDATE_DAYS': {
      console.log('hello', action.payload);

      // get the list of employees for the category passed
      const updated = [...state.categories[action.payload.category.id].order];

      // find the employee whose days are being updated
      const n = updated.find((e) => e.id === action.payload.employeeId);

      // set the new days for the employee
      n.days = action.payload.days;

      // set the new total for the employee
      n.total = n.days * n.rate;

      // set the new actual total within the actual total amount
      // TODO
      return {
        ...state,
      };
    }

    case 'UPDATE_RATE': {
      // get the order for the category being updated
      const updated = [...state.categories[action.payload.category.id].order];

      // find the employee id within the list of rows
      const n = updated.find((e) => e.id === action.payload.employeeId);

      // set the new rate
      n.rate = action.payload.rate;

      // calculate the actual total for the employee
      n.total = n.days * n.rate;

      // set the new actual total within the actual total amount
      // TODO

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
