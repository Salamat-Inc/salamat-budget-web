import React, { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

export const SubcategoryModalContents = () => {
  const handleOnSubmit = () => {
    console.log('submitting the subcategory modal');
  };

  return (
    <div>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Create New
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
          jobType: Yup.string().oneOf(['role', 'subcategory']),
        })}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <fieldset className="mt-4">
            <legend className="sr-only">Notification method</legend>
            <div className="flex flex-row justify-between px-6">
              <div className="flex items-center">
                <Field
                  type="radio"
                  name="jobType"
                  id="role"
                  value="role"
                  className="h-4 w-4 border-gray-300 text-salamat-orange"
                  checked={true}
                />
                <label
                  htmlFor="role"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="radio"
                  name="jobType"
                  id="subcategory"
                  value="subcategory"
                  className="h-4 w-4 border-gray-300 text-salamat-orange"
                />
                <label
                  htmlFor="subcategory"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Subcategory
                </label>
              </div>
            </div>
          </fieldset>

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
            <div className="text-salamat-orange text-sm">
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
            <div className="text-salamat-orange text-sm">
              <ErrorMessage name="memberName" />
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            >
              Create
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
