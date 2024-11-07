"use client";

import { createContext, useContext, useMemo, useState } from "react";
const LanguageContext = createContext(null);
export function LanguageProvider({ children,dictionary }) {
    const [dict,setDict]=useState(dictionary)
    // const [currentMode,setCurrentMode]=useState(
    //     {
    //         id:1,
    //         text:dictionary?.nav.mode.all,
    //         color:'#5c5457'
    //     }
    // )
    const value=useMemo(()=>(
        {
            dict,setDict
        }
    ),[dictionary])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export const useLang=()=>{
    const context=useContext(LanguageContext)
    return context
}
