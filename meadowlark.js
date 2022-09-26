const express = require('express')
const { engine } = require('express-handlebars')
const fortune = require('./lib/fortune.js')
const { application } = require('express')
const handlers = require('./lib/handlers.js')

const app = express()

// app.engine('handlebars', engine({
//     defaultLayout: 'main',
// }))
// app.set('view engine', 'handlebars')
// app.engine('handlebars', engine())
// app.set("views", "./views");

// app.use(express.static(__dirname + '/public'))

// const port = process.env.PORT || 3000

// app.get('/', (req, res) => res.render('home'))

// app.get('/about', (req, res) => {
//     const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
//     res.render('about', { fortune: fortune.getFortune() })
// })

// //pagina 404 personalizada
// app.use((req, res) => {
//     res.status(404)
//     res.render('404')
// })

// //pagina 500 personalizada
// app.use((err, req, res, next) => {
//     res.status(500)
//     res.render('500')
// })


app.get('/', handlers.home)

app.get('/about', handlers.about)

// pagina de erro 404 personalizada
app.use(handlers.notFound)

// pagina de erro 500 personalizada
app.use(handlers.serverError)

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Express started on htpp://localhost:${port}` + '; press Ctrl-C to terminate.')
    })
} else {
    module.exports = app
}