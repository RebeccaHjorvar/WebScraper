const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://espressohouse.com/produkter/'

axios(url)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
        const names = []
        $('.product-title', html).each(function() { 
            const name = $(this).text()
            names.push(name)
        })
        console.log(names)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))


