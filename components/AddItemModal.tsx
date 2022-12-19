import React, { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

export const AddItemModal = ({ open, setOpen }: any) => {
  const { dispatch } = useContext(BudgetContext);

  const handleOnSubmit = (payload: any) => {
    if (payload.jobType === 'subcategory') {
      dispatch({
        type: 'ADD_SUBCATEGORY',
        payload,
      });
    }

    dispatch({
      type: 'ADD_EMPLOYEE',
      payload,
    });

    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
