export const getModes=(modesTranslations)=>{
const modesObjects=[
    {
        id:1,
        text:modesTranslations?.all,
        color:'#5c5457'
    },
    {
        id:2,
        text:modesTranslations?.online,
        color:'green'
    },
    {
        id:3,
        text:modesTranslations?.offline,
        color:'blue'
    }
]
return modesObjects.sort((a,b)=>a.id-b.id)
}