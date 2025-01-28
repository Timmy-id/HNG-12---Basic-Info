import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const date = new Date().toISOString()

app.get('/', (_req, res) => {
    res.status(200)
        .json({
            email: 'oluwatimilehin.id@gmail.com',
            current_datetime: date,
            github_url: 'https://github.com/Timmy-id/HNG-12---Basic-Info'
        })
})

app.use('*', (_req, res) => {
    res.status(404)
        .json({
            error: 'Route not found'
        })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})