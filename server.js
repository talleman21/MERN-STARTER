if(process.env.NODE_ENV?.includes('DEVELOPMENT')){
  require('dotenv').config()
}

const express = require('express')
const app = express()

const port = process.env.PORT || 5001

app.listen(port,()=>{
  console.log(`app started on port: ${port} ${process.env.NODE_ENV||'Production'}`)
})