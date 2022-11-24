/**
 * SCENARIOS WHERE THE BUDGET IS CHANGED
 *
 * update employee days
 * update employee rate
 * update employee days on a specific week
 * update employee rate on a specific week
 */

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

      const employeeId = employeeIdState++;

      const employee = {
        id: employeeId,
        type: 'employee',
        rate: null,
        days: null,
        total: null,
      };

      const updatedCategoryOrder = [...state.categories[categoryId].order];

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

      return n;
    }

    case 'UPDATE_DAYS': {
      // get the list of employees for the category passed
      // const updated = [...state.categories[action.payload.category.id].order];
      const updated = [...action.payload.category.order];

      // find the employee whose days are being updated
      const n = updated.find((e) => e.id === action.payload.employeeId);

      // set the new days for the employee
      n.days = action.payload.days;

      // previous total of the employee
      const prevTotal = n.total;

      // previous total of the current category
      const prevCategoryTotal = action.payload.category.total;

      // set the new total for the employee
      const employeeTotal = n.days * n.rate;

      let categoryTotal = prevCategoryTotal;

      if (prevTotal > employeeTotal) {
        categoryTotal -= Math.abs(
          Number((prevTotal - employeeTotal).toFixed(2))
        );
      } else if (prevTotal < employeeTotal) {
        categoryTotal += Math.abs(
          Number((prevTotal - employeeTotal).toFixed(2))
        );
      }

      const prevActualTotal = state.actualTotal;
      let newActualTotal = prevActualTotal;

      if (prevCategoryTotal > categoryTotal) {
        newActualTotal -= Math.abs(
          Number((prevCategoryTotal - categoryTotal).toFixed(2))
        );
      } else if (prevCategoryTotal < categoryTotal) {
        newActualTotal += Math.abs(
          Number((prevCategoryTotal - categoryTotal).toFixed(2))
        );
      }

      const newOrder = action.payload.category.order.map((item: any) => {
        if (item.id === action.payload.employeeId) {
          item.total = employeeTotal;
        }
        return item;
      });

      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.categoryId]: {
            ...state.categories[action.payload.category.id],
            order: newOrder,
            total: categoryTotal,
          },
        },
        actualTotal: newActualTotal,
      };
    }

    case 'UPDATE_RATE': {
      // get the order for the category being updated
      // const updated = [...state.categories[action.payload.category.id].order];
      const updated = [...action.payload.category.order];

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
