import React, { Fragment, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BudgetContext } from 'contexts/Budget/BudgetContext';
import { CategoryModalContents } from './CategoryModalContents';
import { SubcategoryModalContents } from './SubcategoryModalContents';
import { EmployeeModalContents } from './EmployeeModalContents';

export const MODAL_CONSTANTS = {
  EMPLOYEE: 'MODAL_EMPLOYEE',
  SUBCATEGORY: 'MODAL_SUBCATEGORY',
  CATEGORY: 'CATEGORY',
};

export const AddItemModal = ({ open, setOpen }: any) => {
  const { dispatch } = useContext(BudgetContext);
  const [activeModal, setActiveModal] = useState<string>(
    MODAL_CONSTANTS.SUBCATEGORY
  );

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

    setOpen(null);
  };

  const renderModalContents = (modalType: any) => {
    if (modalType === MODAL_CONSTANTS.CATEGORY) {
      return <CategoryModalContents />;
    }

    if (modalType === MODAL_CONSTANTS.SUBCATEGORY) {
      return <SubcategoryModalContents />;
    }

    return <EmployeeModalContents />;
  };

  return (
    <Transition.Root show={!!open} as={Fragment}>
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
                {renderModalContents(open)}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
