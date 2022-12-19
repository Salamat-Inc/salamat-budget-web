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
      // @TODO: ideal state where the category is sent as ID
      // const category = 1;
      let isCategory = false;
      let isSubcategory = false;
      let parentId: any;

      // check categories first
      for (const [key, value] of Object.entries(state.categories)) {
        if (value.name.toLowerCase() === teamRole.toLowerCase()) {
          parentId = key;
          isCategory = true;
          break;
        }
      }

      // check subCategories if not
      if (!isCategory) {
        for (const [key, value] of Object.entries(state.subCategories)) {
          if (value.name.toLowerCase() === teamRole.toLowerCase()) {
            parentId = key;
            isSubcategory = true;
            break;
          }
        }
      }

      const updatedSubCategories = { ...state.subcategories };

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

      const updatedState = {
        ...state,
        employees: updatedEmployees,
        weeklyReports: updatedWeeklyReports,
      };

      if (isCategory) {
        // find first instance of subcategory if it exists
        const updatedCategoryOrder: any = [...state.categories[parentId].order];

        const subCategoryIndex = updatedCategoryOrder.findIndex((item: any) => {
          return item.type.toLowerCase() === 'subcategory';
        });

        if (subCategoryIndex >= 0) {
          updatedCategoryOrder.splice(subCategoryIndex, 0, {
            id: employeeId,
            type: 'employee',
          });
        } else {
          updatedCategoryOrder.push({
            id: employeeId,
            type: 'employee',
          });
        }

        updatedState.categories = {
          ...state.categories,
          [parentId]: {
            ...state.categories[parentId],
            order: updatedCategoryOrder,
          },
        };
      } else if (isSubcategory) {
        const updatedSsubcategoryOrder: any = [
          ...state.subCategories[parentId].order,
          { id: employeeId, type: 'employee' },
        ];

        updatedState.subCategories = {
          ...state.subCategories,
          [parentId]: {
            ...state.subCategories[parentId],
            order: updatedSsubcategoryOrder,
          },
        };
      }

      return updatedState;
    }

    case 'ADD_CATEGORY': {
      const { name } = action.payload;

      const categoryId = 3;

      // initialize the empty category
      const category = {
        name,
        total: 0,
        projectedCategoryTotal: 0,
        order: [],
      };

      // add category to list of categories
      const updatedCategories = { ...state.categories, [categoryId]: category };

      // add category to order
      const updatedOrder = [...state.dataOrder, { id: categoryId, name }];

      // add category to weekly reports
      const updatedWeeklyReports = state.weeklyReports.map((report: any) => {
        report.employeePayBreakdown[categoryId] = { total: 0 };
        return report;
      });

      return {
        ...state,
        categories: updatedCategories,
        dataOrder: updatedOrder,
        weeklyReport: updatedWeeklyReports,
      };
    }

    case 'ADD_SUBCATEGORY': {
      const { name, parentCategoryName } = action.payload;

      const subcategoryId = 22;

      // initialize empty subcategory
      const subcategory = {
        name,
        total: 0,
        projectedSubCategoryTotal: 0,
        order: [],
      };

      // Add Subcategory to list of subcategories in a category
      const updatedSubCategories = {
        ...state.subCategories,
        [subcategoryId]: subcategory,
      };

      // Add Subcategoryid to parent Category list
      let parentCategory: any = {};
      let parentCategoryId: any;

      for (const [key, value] of Object.entries(state.categories)) {
        if (value.name === parentCategoryName) {
          parentCategoryId = key;
          parentCategory = value;
          break;
        }
      }

      const updatedParentCategory = {
        ...parentCategory,
        order: [
          ...parentCategory.order,
          { id: subcategoryId, type: 'subcategory' },
        ],
      };

      // Add subcategory to each weeekly report
      const updatedWeeklyReports = state.weeklyReports.map((report: any) => {
        report.employeePayBreakdown[subcategoryId] = {
          total: 0,
        };

        return report;
      });

      return {
        ...state,
        categories: {
          ...state.categories,
          [parentCategoryId]: updatedParentCategory,
        },
        subCategories: updatedSubCategories,
        weeklyReports: updatedWeeklyReports,
      };
    }

    case 'UPDATE_RATE': {
      const { employeeId, rate, categoryId, subCategoryId } = action.payload;

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

      // get currentSubCategory total if it exists
      const subCategory = state.subCategories[subCategoryId];
      if (subCategory) {
        const currentSubCategoryTotal = subCategory.total;
        const updatedSubCategoryTotal =
          currentSubCategoryTotal + salaryDifference;
      }

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
        const weeklyDifference =
          updatedEmployeeWeeklySalary - currentEmployeeBreakdown.total;

        // update the difference
        updatedWeeklyTotal += weeklyDifference;

        // create the new updated pay breakdown
        const updatedEmployeePayBreakdown = {
          ...employeePayBreakdown,
          [employeeId]: {
            ...currentEmployeeBreakdown,
            total: updatedEmployeeWeeklySalary,
          },
          [categoryId]: {
            ...employeePayBreakdown[categoryId],
            total: employeePayBreakdown[categoryId].total + weeklyDifference,
          },
        };

        // get subvategory
        if (subCategory) {
          updatedEmployeePayBreakdown[subCategoryId] = {
            ...updatedEmployeePayBreakdown[subCategoryId],
            total:
              updatedEmployeePayBreakdown[subCategoryId].total +
              weeklyDifference,
          };
        }

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

      const updatedSubCategories = { ...state.subCategories };

      if (subCategory) {
        updatedSubCategories[subCategoryId] = {
          ...updatedSubCategories[subCategoryId],
          total: updatedSubCategories[subCategoryId].total + salaryDifference,
        };
      }

      return {
        ...state,
        actualTotal: state.actualTotal + salaryDifference,
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
        subCategories: updatedSubCategories,
        weeklyReports: updatedWeeklyReports,
      };
    }

    case 'UPDATE_DAYS_WEEKLY': {
      const {
        employeeId,
        days,
        currentReport,
        category,
        subCategory,
        subCategoryId,
      } = action.payload;

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
      const updatedCategoryTotal = categoryData.total + diffEmployeeTotal;

      // update the current subcategory if the employee is also a part of a subcategory
      let updatedSubCategoryTotal;

      if (subCategory) {
        updatedSubCategoryTotal = subCategory.total + diffEmployeeTotal;
      }

      // get the updated employee weekly data
      const updatedEmployeeWeeklyData = {
        ...currentEmployeeWeeklyData,
        days,
        total: updatedEmployeeWeeklyTotal,
      };

      // get the updated category weekly data
      const currentCategoryWeeklyData =
        currentReport.employeePayBreakdown[category.id];
      const updatedCategoryWeeklyData = {
        ...currentCategoryWeeklyData,
        total: currentCategoryWeeklyData.total + diffEmployeeTotal,
      };

      // get the updated subcategory weekly data
      let updatedSubCategoryWeeklyData: any;

      if (subCategoryId) {
        const currentSubCategoryWeeklyData =
          currentReport.employeePayBreakdown[subCategoryId];
        updatedSubCategoryWeeklyData = {
          ...currentSubCategoryWeeklyData,
          total: currentSubCategoryWeeklyData.total + diffEmployeeTotal,
        };
      }

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
        subCategories: (() =>
          !!subCategory
            ? {
                ...state.subCategories,
                [subCategoryId]: {
                  ...subCategory,
                  total: updatedSubCategoryTotal,
                },
              }
            : { ...state.subCategories })(),
        weeklyReports: state.weeklyReports.map((report: any) => {
          if (currentReport.id !== report.id) return report;

          const updated = {
            ...currentReport,
            weeklyTotal: updatedReportTotal,
            employeePayBreakdown: {
              ...currentReport.employeePayBreakdown,
              [employeeId]: updatedEmployeeWeeklyData,
              [category.id]: updatedCategoryWeeklyData,
            },
          };

          if (subCategoryId) {
            updated.employeePayBreakdown[subCategoryId] =
              updatedSubCategoryWeeklyData;
          }

          return updated;
        }),
      };
    }

    default: {
      return state;
    }
  }
};
