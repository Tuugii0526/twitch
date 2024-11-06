"use client"

import { oswald } from "@/app/[locale]/fonts/fonts"
import { useParams, useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useLang } from "../context/LanguageProvider"
import { Modes } from "./Modes"

export const Nav=()=>{
    const {dict} =useLang()
    const router=useRouter()
    const pathName=usePathname()
    const {locale}=useParams()
    const onLanguageChange=(e)=>{
        const newLang=e.target.value
        let newPath
        if(pathName.split('/').length==2)
        {
            newPath=pathName.replace(/\/.+/i,`/${newLang}`)
        }
        else{
            newPath=pathName.replace(/\/.+\//i,`/${newLang}/`)
        }
        router.replace(newPath)
    }
    return (
        <div className="w-full h-[80px] py-[5px]  px-[65px] flex items-center gap-10 bg-[#5c5457] relative">
            <p className={`text-[#e1e1e6] text-[42px] ${oswald.className} uppercase`}>
                {dict?.nav.title}
            </p>
            <select className={`${oswald.className} outline-none rounded-xl bg-[#e1e1e6]  *:text-[#5c5457] absolute right-[20%]`} onChange={onLanguageChange} name="language" id="lan" value={locale}>
                <option value="en-US" >EN</option>
                <option value="mn" >MN</option>
            </select>
            <Modes/>
        </div>
    )
}