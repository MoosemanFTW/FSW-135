const express = require('express')
const storeRouter = express.Router()
const Inventory = require('./../models/inventory.js')

//get all
storeRouter.get('/', (req, res, next) =>{
    Inventory.find((err, items) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(items)
    })
});

//get one
storeRouter.get('/', (req, res, next) =>{
  Item.findOne({_id: req.params.itemId}, (err, OneItem) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(OneItem)
  })
})

storeRouter.post('/', (req, res, next) =>{
  const newItem = new Item(req.body)
  newItem.save((err, savedItem) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedItem)
  })
})

storeRouter.delete('/', (req, res, next) =>{
  Item.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send('deleted item')
  })
})

storeRouter.put('/', (req, res, next) =>{
  Item.findOneAndUpdate(
      {_id: req.params.ItemId},
      req.body,
      {new: true},
      (err,updatedItem) =>{
        if(err){
          res.status(500)
          return next(err)
      }
      return res.status(201).send(updatedItem)
    }
  )
})

module.exports = storeRouter