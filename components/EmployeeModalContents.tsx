import React, { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

export const EmployeeModalContents = ({ setOpen }: any) => {
  const { dispatch } = useContext(BudgetContext);

  const handleOnSubmit = (payload: any) => {
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload,
    });

    setOpen(null);
  };

  return (
    <div>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Create New Employee
      </Dialog.Title>
      <Formik
        initialValues={{
          teamRole: '',
          memberName: '',
          jobType: 'role',
        }}
        validationSchema={Yup.object({
          teamRole: Yup.string().required('*Required'),
          memberName: Yup.string().required('*Required'),
        })}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <div className="mt-4">
            <label htmlFor="teamRole" className="sr-only">
              Team Role
            </label>
            <Field
              type="text"
              name="teamRole"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Team role"
            />
            <div className="text-red-600 text-sm">
              <ErrorMessage name="teamRole" />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="memberName" className="sr-only">
              Team Member Name
            </label>
            <Field
              type="text"
              name="memberName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Team member name"
            />
            <div className="text-red-600 text-sm">
              <ErrorMessage name="memberName" />
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-salamat-blue-dark px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            >
              Create
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
