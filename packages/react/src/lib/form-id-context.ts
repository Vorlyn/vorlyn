import { createContext, useContext } from "react";

export const FormIdContext = createContext<string | undefined>(undefined);
export const useFormId = () => useContext(FormIdContext);
