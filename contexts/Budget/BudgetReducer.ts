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
      const { jobType, memberName, teamRole } = action.payload;

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
        { id: employeeId, type: 'employee' },
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

    case 'ADD_SUBCATEGORY': {
      return {
        ...state,
      };
    }

    case 'UPDATE_RATE': {
      const { employeeId, rate, categoryId } = action.payload;
      console.log('inside of update rate', employeeId, rate, categoryId);

      // get the employee
      const employee = state.employees[employeeId];

      // get the current salary of the employee
      const currentSalary = employee.actualTotalSalary;

      // get new salary for the employee
      const updatedSalary = parseFloat((rate * employee.totalDays).toFixed(2));

      // get the difference between new and old salary
      const salaryDifference = updatedSalary - currentSalary;

      // get currentCategory total
      const category = state.categories[categoryId];
      const currentCategoryTotal = category.total;
      const updatedCategoryTotal = currentCategoryTotal + salaryDifference;

      // update the payBreakdown of weekly reports
      const weeklyReports = state.weeklyReports;
      const updatedWeeklyReports = weeklyReports.map((report: any) => {
        // get previous weekly total
        let updatedWeeklyTotal = report.weeklyTotal;

        // get list of employee payments for the week
        const employeePayBreakdown = report.employeePayBreakdown;
        // get the current employee payments
        const currentEmployeeBreakdown = employeePayBreakdown[employeeId];

        // get the difference for the week
        const updatedEmployeeWeeklySalary = Number(
          (currentEmployeeBreakdown.days * rate).toFixed(2)
        );

        // update the difference
        updatedWeeklyTotal +=
          updatedEmployeeWeeklySalary - currentEmployeeBreakdown.total;

        // create the new updated pay breakdown
        const updatedEmployeePayBreakdown = {
          ...employeePayBreakdown,
          [employeeId]: {
            ...currentEmployeeBreakdown,
            total: updatedEmployeeWeeklySalary,
          },
        };

        // get the new updated report
        return {
          ...report,
          weeklyTotal: updatedWeeklyTotal,
          employeePayBreakdown: updatedEmployeePayBreakdown,
        };
      });

      const updatedEmployee = {
        ...employee,
        rate,
        actualTotalSalary: updatedSalary,
      };

      return {
        ...state,
        categories: {
          ...state.categories,
          [categoryId]: {
            ...state.categories[categoryId],
            total: updatedCategoryTotal,
          },
        },
        employees: {
          ...state.employees,
          [employeeId]: {
            ...updatedEmployee,
          },
        },
        weeklyReports: updatedWeeklyReports,
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
