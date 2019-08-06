const express = require('express')
const router = express.Router();
const dba = require('./data/helpers/actionModel')
router.use(express.json())


 router.get('/', (req, res) =>{
    dba.get()
    .then( project => {
        res.status(200).json(project)
    })
    .catch( error => {
        res.status(500).json({error:{message: "Couldn't get data"}})
    })
})


 router.post('/', (req, res) => {
    const newAction = req.body 
    dba.insert(newAction)
    .then( action =>{
        res.status(200).json(action)
    }).catch( error => {
        res.status(500).json({error:{message: "Could't get data"}})
    })


 })

 router.put('/:id', (req, res) => {
    const updateAct = req.body
    const id = req.params.id

     dba.update(id, updateAct)
    .then( action => {
        res.status(200).json(action)
    })
    .catch( err => {
        res.status(500).json({ error: err, message:"Could not update data"})
    })

 })

 router.delete('/:id', (req, res)=>{
    const actionId = req.params.id
    dba.remove(actionId)
    .then( action =>{
        if(action){
            dba.remove(actionId).then(
                removeaction => {
                    res.status(201).json(removeaction)
                }
            )
        }else{
            res.status(404).json({ error: err, mesage : "User does not exist"})
        }
    })
    .catch(error =>{
        res.status(500).json({  message: "User may  not be removed"})
     })
})

 module.exports  = router 