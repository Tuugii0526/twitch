import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
export const getLocale=(request,locales,defaultLocale)=>{
    const header=request.headers.get('accept-language');
  const languages=  header.split(',')
    .map((lang) => {
      const [code, qValue] = lang.trim().split(';q=');
      return { code, q: qValue ? parseFloat(qValue) : 1.0 };
    })
    .sort((a, b) => b.q - a.q)   // Sort by quality values (q)
    .map((lang) => lang.code);
return match(languages, locales, defaultLocale)
}