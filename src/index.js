import express from 'express'
import { engine } from 'express-handlebars'
import morgan from 'morgan'
import path from 'path'
import route from './routes/index.js'

const port = 3000
const app = express()

app.use(morgan('combined'))

app.engine('hbs', engine({ extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(path.resolve(), 'src', 'resources', 'views'))

app.use(express.static(path.join(path.resolve(), 'src', 'public')))

route(app)

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`)
})