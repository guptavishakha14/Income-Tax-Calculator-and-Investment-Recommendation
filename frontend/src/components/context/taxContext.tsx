import { createContext } from "react";

interface TaxContextType {
    tax: number;
    setTax: React.Dispatch<React.SetStateAction<number>>;
}

const taxContext = createContext<TaxContextType | null>(null);

export default taxContext;