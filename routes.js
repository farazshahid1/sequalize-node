
const express = require('express')
const { getTags } = require('./api/tagApi')

const router = express.Router()

router.get('/test',async (req,res)=>{
    // const tags = await getTags()
    // console.log("tags: ", tags)
   })
   

   module.exports = router
   