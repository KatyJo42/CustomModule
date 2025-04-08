const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const root = path.join(__dirname, 'public')

const fortune = [
    {   id: 1, 
        future: "A beautiful, smart, and loving person will be coming into your life."
    },
    {
        id: 2, 
        future: "A dubious friend may be an enemy in camouflage."
    },
    {   id: 3, 
        future: "A golden egg of opportunity falls into your lap this month."
    },
    {   id: 4, 
        future: "A hunch is creativity trying to tell you something."
    }
]

// allow us to send json
app.use(express.json())

//allow us to respond with static webpages
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/fortune/:id', (request, response) => {

})


app.get('/api/v1/random-fortune', (request, response) => {
    const r = Math.floor(Math.random() * fortune.length)
    response.send(fortune[r])
})

app.get('/api/v1/fortune/:id', (request, response) => {
    const { id } = request.params
    const found = fortune.find(j => f.id.toString() === id)

    if (found) response.send(found)
    else response.send({ error: { message: 'Could not find fortune with id: ${id}' }})

})


app.listen(port, () => console.log(`http://localhost:${port}/`))