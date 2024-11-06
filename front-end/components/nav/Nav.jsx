import { oswald } from "@/app/[locale]/fonts/fonts"

export const Nav=()=>{
    return (
        <div className="w-full h-[80px] py-[5px]  px-[65px] flex items-center gap-10 bg-[#5c5457] relative">
            <p className={`text-[#e1e1e6] text-[42px] ${oswald.className}`}>
                TWITCH STREAMERS
            </p>
            <select className={`${oswald.className} outline-none rounded-xl bg-[#e1e1e6]  *:text-[#5c5457]`} name="language" id="lan">
                <option value="en" >EN</option>
                <option value="mon">MN</option>
                <option value="korean">KO</option>
            </select>
        </div>
    )
}