const url =
    "https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en";
const options = {
    method: "GET",
    headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": '3f389ce214msh76a1b6b77e1ee1fp1762dcjsn97384994a613',
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
};
let result;
try {
    const response = await fetch(url, options);
    result = await response.json();
} catch (error) {
    prompt(error);
}

export async function detectLanguage(input) {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '3f389ce214msh76a1b6b77e1ee1fp1762dcjsn97384994a613',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: input
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export async function translation(input, getLanguage, postLanguage) {
    const url =
        "https://google-translate1.p.rapidapi.com/language/translate/v2";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Key": '3f389ce214msh76a1b6b77e1ee1fp1762dcjsn97384994a613',
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        body: new URLSearchParams({
            q: input,
            target: postLanguage,
            source: getLanguage,
        }),
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.data.translations[0].translatedText);
        return result.data.translations[0].translatedText;
    } catch (error) {
        prompt(error);
    }
}


export const languages = result.data.languages;
