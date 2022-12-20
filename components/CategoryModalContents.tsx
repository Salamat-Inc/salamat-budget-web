import React, { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

export const CategoryModalContents = ({ setOpen }: any) => {
  const { dispatch } = useContext(BudgetContext);

  const handleOnSubmit = (payload: any) => {
    dispatch({
      type: 'ADD_CATEGORY',
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
        Create New Category
      </Dialog.Title>
      <Formik
        initialValues={{
          name: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('*Required'),
        })}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <div className="mt-4">
            <label htmlFor="name" className="sr-only">
              Category Name
            </label>
            <Field
              type="text"
              name="name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Category Name"
            />
            <div className="text-red-600 text-sm">
              <ErrorMessage name="name" />
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
