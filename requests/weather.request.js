const rp = require('request-promise')

module.exports = async function (city = '') {
    if (!city) {
        throw new Error('Please, enter the name of city')
    }

    const KEY = '3590f16ecc3e1631444b2bd08cf3569b'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'
    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'metric'
        },
        json: true
    }

    try {
        const data = await rp(options)

        return {
            weather: `${data.name}: ${Math.round(data.main.temp)}°C, ${data.weather[0].description}`,
            error: null
        }
    } catch (error) {
            return {
                weather: null,
                error: error.error.message 
            }
    }

    

}










