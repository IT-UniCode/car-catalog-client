import React, { createContext, useState } from 'react';

interface IAppContext {
  loading: boolean;
}

interface IInitialContext {
  appContext: IAppContext;
  setAppContext: (appContext: IAppContext) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

const initialState = {
  appContext: {
    loading: true,
  },
  setAppContext: (appContext: IAppContext) => appContext,
};

export const AppContext = createContext<IInitialContext>(initialState);

const AppProvider = ({ children }: AppProviderProps) => {
  const [appContext, setAppContext] = useState<IAppContext>(
    initialState.appContext
  );

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
