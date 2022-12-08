/**
 * SCENARIOS WHERE THE BUDGET IS CHANGED
 *
 * update employee days
 * update employee rate
 * update employee days on a specific week
 * update employee rate on a specific week
 */

import { WeeklyReport } from 'components/WeeklyReport';

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
      console.log('here is the action', action.payload);
      const { realDays, employee, employeeId, categoryId } = action.payload;

      // previous total of the employee
      // const prevTotal = employee.totalActualSalary;

      // update the employee information
      // const updatedEmployeeData = {
      //   ...employee,
      // totalActualDays: parseFloat(realDays),
      // };
      // // get the list of employees for the category passed
      // const updated = [...action.payload.category.order];

      // // find the employee whose days are being updated
      // const n = updated.find((e) => e.id === action.payload.employeeId);

      // // set the new days for the employee
      // n.days = action.payload.days;

      // // previous total of the current category
      // const prevCategoryTotal = action.payload.category.total;

      // // set the new total for the employee
      // const employeeTotal = n.days * n.rate;

      // let categoryTotal = prevCategoryTotal;

      // if (prevTotal !== employeeTotal) {
      //   categoryTotal += Number((employeeTotal - prevTotal).toFixed(2));
      // }

      // const prevActualTotal = state.actualTotal;
      // let newActualTotal = prevActualTotal;

      // if (prevCategoryTotal !== categoryTotal) {
      //   newActualTotal += Number(
      //     (categoryTotal - prevCategoryTotal).toFixed(2)
      //   );
      // }

      // const newOrder = action.payload.category.order.map((item: any) => {
      //   if (item.id === action.payload.employeeId) {
      //     item.total = employeeTotal;
      //   }
      //   return item;
      // });

      return {
        ...state,
        // categories: {
        //   ...state.categories,
        //   [action.payload.categoryId]: {
        //     ...state.categories[action.payload.category.id],
        //     order: newOrder,
        //     total: categoryTotal,
        //   },
        // },
        // actualTotal: newActualTotal,
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

    case 'UPDATE_DAYS_WEEKLY': {
      console.log('updating the weekly days', action.payload);
      const { employeeId, employee, days, currentReport, category } =
        action.payload;

      // get the current Employee Data
      const employeeData = state.employees[employeeId];

      const employeeRate = employeeData.rate;
      let employeeDays = employeeData.totalDays;

      // calculate the new total based on the updated days for this week
      const updatedEmployeeWeeklyTotal = employeeRate * days;

      console.log('updatedEmployeeWeeklyTotal', updatedEmployeeWeeklyTotal);

      const currentEmployeeWeeklyData =
        currentReport.employeePayBreakdown[employeeId];

      const prevWeeklyDays = currentEmployeeWeeklyData.days;
      const currentWeeklyDays = days;

      const diffOfDays = Number(currentWeeklyDays - prevWeeklyDays);

      employeeDays += diffOfDays;

      const diffEmployeeTotal = employeeRate * diffOfDays;
      let updatedEmployeeTotal =
        employeeData.actualTotalSalary + diffEmployeeTotal;
      console.log('yolo diff', updatedEmployeeTotal);

      const updatedEmployeeWeeklyData = {
        ...currentEmployeeWeeklyData,
        days,
        total: updatedEmployeeWeeklyTotal,
      };

      const categoryData = state.categories[category.id];

      const updatedCategoryTotal = (categoryData.total += diffEmployeeTotal);

      const updatedEmployeeData = {
        ...employeeData,
        totalDays: employeeDays,
        actualTotalSalary: updatedEmployeeTotal,
      };

      let updatedReportTotal = currentReport.total;
      updatedReportTotal += Number(
        employee.WeeklyTotal - updatedEmployeeWeeklyTotal
      ).toFixed(2);
      console.log('here is the updatedEmployeeData', updatedEmployeeData);

      return {
        ...state,
        categories: {
          ...state.categories,
          [category.id]: {
            ...categoryData,
            total: updatedCategoryTotal,
          },
        },
        employees: {
          ...state.employees,
          [employeeId]: {
            ...updatedEmployeeData,
          },
        },
        weeklyReports: state.weeklyReports.map((report: any) => {
          if (currentReport.id !== report.id) return report;

          return {
            ...currentReport,
            weeklyTotal: updatedReportTotal,
            employeePayBreakdown: {
              ...currentReport.employeePayBreakDown,
              [employeeId]: updatedEmployeeWeeklyData,
            },
          };
        }),
      };
    }

    default: {
      return state;
    }
  }
};
