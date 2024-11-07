"use client";

import { createContext, useContext, useMemo, useState } from "react";
const LanguageContext = createContext(null);
export function LanguageProvider({ children,dictionary }) {
    const [dict,setDict]=useState(dictionary)
    const value=useMemo(()=>(
        {
            dict,setDict
        }
    ),[dict])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export const useLang=()=>{
    const context=useContext(LanguageContext)
    return context
}
