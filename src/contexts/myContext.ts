import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type MyContextType = {
	primaryThemeColor: string | undefined;
	setPrimaryThemeColor: Dispatch<SetStateAction<string | undefined>>
};

// Provide a safe default. Consumers should usually read from the Provider.
const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;

// MyContext.ts (continued)
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};