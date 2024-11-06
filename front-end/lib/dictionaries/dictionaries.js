import "server-only"
const dictionaries={
   "en-US":()=>import ('./en.json').then((module)=>module.default),
    "mn":()=>import ('./mn.json').then((module)=>module.default)
}
export const getDictionary=async(locale)=>dictionaries[locale]()