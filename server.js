const express = require('express')
const app = express()
const PORT = 8000


const rappers = {
'dmx': {
    'birthday': 'December 18th, 1970',
    'birthName': 'Earl Simmons',
    'birthLocation': 'Mount Vernon, New York',
    'otherNames': 'Dark Man X',
    'image': 'https://en.wikipedia.org/wiki/DMX#/media/File:Academy_Awards_afterparty_CUN_DMX.jpg' 

    },
' jay z': {
    'birthday': 'December 4th, 1969',
    'birthName': 'Shawn Corey Carter',
    'birthLocation':' New York City, New York',
    'otherNames': 'Jigga',
},
'unknown': 'no information found'  
}



app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (req, res)=>{
let rapperNames = req.params.name.toLowerCase()
    if(rappers[rapperNames]){
        res.json(rappers[rapperNames])

    }else{
        res.json(rappers['unknown'])
    }
}
)

app.listen(process.env.PORT|| PORT, ()=>{
console.log(`the server is now running on port ${PORT}, betta go catch it!`)
})
