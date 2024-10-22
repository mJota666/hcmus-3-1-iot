import ledRouters from './ledRouters.js'

function route(app) {
    app.use('/22127270/Led', ledRouters)
} 
export default route