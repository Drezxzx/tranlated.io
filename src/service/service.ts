export type Tranlate = {
    responseData:    ResponseData;
    quotaFinished:   boolean;
    mtLangSupported: null;
    responseDetails: string;
    responseStatus:  number;
    responderId:     null;
    exception_code:  null;
    matches:         Match[];
}
export type Match = {
    id:                 string;
    segment:            string;
    translation:        string;
    source:             string;
    target:             string;
    quality:            number;
    reference:          null;
    "usage-count":      number;
    subject:            string;
    "created-by":       string;
    "last-updated-by":  string;
    "create-date":      Date;
    "last-update-date": Date;
    match:              number;
}

export type ResponseData = {
    translatedText: string;
    match:          number;
}




export async function translate({text, code1 , code2} :
    {text : string, code1 : string, code2 : string}){
        console.log({code1, code2});
        
    const data = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${code1}|${code2}`)
    const res = await data.json() as Tranlate
    console.log(res);
    

    if (res.responseData.translatedText === "PLEASE SELECT TWO DISTINCT LANGUAGES") {
        return "Por favor seleccioana dos lenguajes distínos."
    }
    
    return res.responseData.translatedText
    
}