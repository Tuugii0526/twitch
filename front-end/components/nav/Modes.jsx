"use client";

import { getModes } from "@/lib/modes/getModes";
import { useLang } from "../context/LanguageProvider";
import { useState } from "react";
export const Modes = () => {
  const { dict } = useLang();
  const { modes } = dict.nav;
  const modesObjects = getModes(modes);
  const [currentMode, setCurrentMode] = useState(modes?.all);

  return (
    <div className="absolute w-[100px] right-0 h-[75%] flex flex-col gap-2 items-end justify-center ">
      {modesObjects.map((mode) => (
        <div
          key={mode?.id}
          className="group w-fit  flex justify-between gap-1 items-center grow bg-[#e1e1e6] px-1 transition-all duration-300 ease-in-out hover:cursor-pointer" 
          onClick={()=>{
            setCurrentMode(mode?.text)
          }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: `${mode.color}`,
            }}
          ></div>
            <p className={`text-xs transition-all duration-700 ${currentMode!==mode?.text ? 'hidden group-hover:blockhidden group-hover:block' : ''}`}>{mode?.text}</p>

        </div>
      ))}
    </div>
  );
};
