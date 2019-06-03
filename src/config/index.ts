import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const debug = env !== 'production'

export default {
  env: env,
  debug: debug,
  port: process.env.PORT || env === 'production' ? 5000 : 5001,
  service: {
    key: process.env.SERVICE_API_KEY,
    secret: process.env.SERVICE_API_SECRET
  }
}
