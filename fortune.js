//array 
const fortunes = require('./fortunes.json')
//function
const getFortune = () => 
{
    const randomNumber = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomNumber]
}

module.exports = getFortune