import { createContext } from 'react';

type MyContextType = {
	isAuthenticated: boolean;
};

// Provide a safe default. Consumers should usually read from the Provider.
const MyContext = createContext<MyContextType | undefined>({ isAuthenticated: false, });

export default MyContext;