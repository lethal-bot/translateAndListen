const translationKey = 'da071dc83cmsh6d6848c5171272fp1e7aacjsn1a4c8b14fab0'

export async function translation(input, getLanguage, postLanguage) {
    const url =
        "https://google-translate1.p.rapidapi.com/language/translate/v2";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Key": translationKey,
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




const voicekey = '1f02c55c4amsh656b3023d5ada30p1e104ajsn0f32d3f1b131'
//auido api


//audio generation
export async function generateAudio(voiceCode, text) {
    const url = 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': voicekey,
            'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        },
        body: new URLSearchParams({
            voice_code: voiceCode,
            text: text,
            speed: '1.00',
            pitch: '1.00',
            output_type: 'audio_url'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result)
        const re = await result.result.audio_url;
        return re
    } catch (error) {
        console.error(error);
    }
}
