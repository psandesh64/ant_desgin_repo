import { createContext } from 'react';

type MyContextType = {
	current: number;
};

// Provide a safe default. Consumers should usually read from the Provider.
const MyContext = createContext<MyContextType | undefined>({ current: 0 });

export default MyContext;