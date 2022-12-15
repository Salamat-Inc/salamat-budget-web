/**
 * SCENARIOS WHERE THE BUDGET IS CHANGED
 *
 * update employee rate
 * update employee days on a specific week
 * deleting an employee
 * adding an employee
 */

import { report } from 'process';

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const SET_PROJECT = 'SET_PROJECT';

let idState = 12;
let employeeIdState = 400;

export const budgetReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_PROJECT: {
      return action.payload;
    }
    case 'ADD_EMPLOYEE': {
      'here is the payload', action.payload;

      const { jobType, memberName, teamRole } = action.payload;

      if (jobType === 'role') {
        // get the employee id
        const employeeId = 400;

        // generate the new employee object
        const employee = {
          name: memberName,
          rate: 0,
          totalDays: 0,
          actualTotalSalary: 0,
          projectedTotalSalary: 0,
        };

        // add employee to list of employees
        const updatedEmployees = {
          ...state.employees,
          [employeeId]: employee,
        };

        // add employee to the correct category
        const category = 1;
        const updatedCategories = [
          ...state.categories[category].order,
          employeeId,
        ];

        // ensure the all weekly reports are updated with the new employee
        const updatedWeeklyReports = state.weeklyReports.map((report: any) => ({
          ...report,
          employeePayBreakdown: {
            ...report.employeePayBreakdown,
            [employeeId]: {
              days: 0,
              total: 0,
            },
          },
        }));

        return {
          ...state,
          categories: {
            ...state.categories,
            [category]: {
              ...state.categories[category],
              order: updatedCategories,
            },
          },
          employees: updatedEmployees,
          weeklyReports: updatedWeeklyReports,
        };
      }
      // const categoryId = action.payload.category;
      // let orderItem;
      // // add category to the order
      // if (!state.categories[categoryId]) {
      //   const id = idState++;
      //   orderItem = { id, name: categoryId };
      // }
      // const updatedOrderItems = [...state.dataOrder];
      // if (orderItem) {
      //   updatedOrderItems.push(orderItem);
      // }
      // const employeeId = employeeIdState++;
      // const employee = {
      //   id: employeeId,
      //   type: 'employee',
      //   rate: null,
      //   days: null,
      //   total: null,
      // };
      // const updatedCategoryOrder = [...state.categories[categoryId].order];
      // updatedCategoryOrder.push(employee);
      // const updatedWeeklyReports = state.weeklyReports.map((report: any) => {
      //   report.rateData = {
      //     ...report.rateData,
      //     [employeeId]: {
      //       days: null,
      //       currentTotal: null,
      //       totalToDate: null,
      //     },
      //   };
      // });
      // const n = {
      //   ...state,
      //   dataOrder: updatedOrderItems,
      //   categories: {
      //     ...state.categories,
      //     [categoryId]: {
      //       order: updatedCategoryOrder,
      //     },
      //   },
      //   // weeklyReports: updatedWeeklyReports,
      //   employees: {
      //     ...state.employees,
      //     [employeeId]: {
      //       name: action.payload.name,
      //     },
      //   },
      // };
      // return n;
      return {
        ...state,
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
      const { employeeId, days, currentReport, category } = action.payload;

      // get the current Employee Data, rate, and total days
      const employeeData = state.employees[employeeId];
      const employeeRate = employeeData.rate;
      let employeeDays = employeeData.totalDays;

      // calculate the new total for this week based on the updated days value
      const updatedEmployeeWeeklyTotal = employeeRate * days;

      // get current week's data of the employee who's days have changed
      const currentEmployeeWeeklyData =
        currentReport.employeePayBreakdown[employeeId];

      const prevWeeklyDays = currentEmployeeWeeklyData.days;
      const currentWeeklyDays = days;

      // calculate the difference of this week's days for this employee
      const diffOfDays = Number(currentWeeklyDays - prevWeeklyDays);

      // add or subtract the difference from the total days of the current employee
      employeeDays += diffOfDays;

      // calculate the total that needs to be added or subtracted from the current employee total
      const diffEmployeeTotal = employeeRate * diffOfDays;

      // get the updated actual total salary of the current employee
      let updatedEmployeeTotal =
        employeeData.actualTotalSalary + diffEmployeeTotal;

      // get the current Category and add or subtract the difference in the employee total to the category total
      const categoryData = state.categories[category.id];
      const updatedCategoryTotal = (categoryData.total += diffEmployeeTotal);

      // get the updated employee weekly data
      const updatedEmployeeWeeklyData = {
        ...currentEmployeeWeeklyData,
        days,
        total: updatedEmployeeWeeklyTotal,
      };

      // get the updated employee overall data
      const updatedEmployeeData = {
        ...employeeData,
        totalDays: employeeDays,
        actualTotalSalary: updatedEmployeeTotal,
      };

      // get the updated total for the whole report
      let updatedReportTotal = currentReport.weeklyTotal;

      if (updatedEmployeeWeeklyTotal !== currentEmployeeWeeklyData.total) {
        updatedReportTotal += Number(
          (
            updatedEmployeeWeeklyTotal - currentEmployeeWeeklyData.total
          ).toFixed(2)
        );
      }

      return {
        ...state,
        actualTotal: state.actualTotal + diffEmployeeTotal,
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
              ...currentReport.employeePayBreakdown,
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
