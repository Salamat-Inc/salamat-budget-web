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
      const category = action.payload.category;
      let orderItem;
      // add category to the order
      if (!state.categories[category]) {
        const id = idState++;
        orderItem = { id, name: category };
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

      const updatedCategoryOrder = [...state.categories[category].order];

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
          [category]: {
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
      console.log('stuff', action.payload, state);
      const updated = [...state.categories[action.payload.category].order];

      const n = updated.find((e) => e.id === action.payload.employeeId);

      n.days = action.payload.days;
      n.total = n.days * n.rate;

      return {
        ...state,
      };
    }

    case 'UPDATE_RATE': {
      console.log('stuff rates', action.payload, state);
      const updated = [...state.categories[action.payload.category].order];

      const n = updated.find((e) => e.id === action.payload.employeeId);

      n.rate = action.payload.rate;
      n.total = n.days * n.rate;

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
