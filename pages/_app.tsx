import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { BudgetProvider } from 'contexts/Budget/BudgetContext';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BudgetProvider>
      <Component {...pageProps} />
    </BudgetProvider>
  );
}

export default MyApp;
