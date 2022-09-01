const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const fortunes = [
    'Conquer your fears or they will conquer you.',
    'Rivers need springs.',
    'Do not fear what you don\'t know.',
    'You will have a pleasant surprise.',
    'Whenever possible, keep it simple.',
]
app.engine('handlebars', engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.engine('handlebars', engine())
app.set("views", "./views");

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', { fortune: randomFortune })
})

//pagina 404 personalizada
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//pagina 500 personalizada
app.use((err, req, res, next) => {
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}`
    + `press Ctrl-C to terminate.`
))
