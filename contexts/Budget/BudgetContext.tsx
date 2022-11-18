import React, { useState, useEffect, useReducer } from 'react';
import {
  BudgetContextInterface,
  Project,
} from 'interfaces/BudgetContextInterface';
import { budgetReducer, SET_PROJECT, CREATE_EMPLOYEE } from './BudgetReducer';

type Props = {
  children: React.ReactNode;
};

const initialState = {};

export const BudgetContext =
  React.createContext<BudgetContextInterface | null>(null);

export const BudgetProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  useEffect(() => {
    const getProject = async () => {
      const res = await fetch('/api/hello/?id=apple');
      const data = await res.json();
      dispatch({
        type: SET_PROJECT,
        payload: data,
      });
    };

    getProject();
  }, []);

  return (
    <BudgetContext.Provider
      value={{
        project: state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
