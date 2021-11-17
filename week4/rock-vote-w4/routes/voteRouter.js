const express = require('express')
const voteRouter = express.Router()
const User = require('./../models/user.js')
const Comment = require('./../models/comment.js')
const Issue = require('./../models/issue.js')

//get all issue
voteRouter.get('/', (req, res, next) =>{
    Issue.find((err, issues) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
});

//get one issue
voteRouter.get('/:issueID', (req, res, next) =>{
    Issue.findOne({_id: req.params.issueID}, (err, OneIssue) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(OneIssue)
    })
  })

//post issue
voteRouter.post('/', (req, res, next) =>{
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedIssue)
    })
  })

//delete issue
voteRouter.delete('/:issueID', (req, res, next) =>{
    Issue.findOneAndDelete({_id: req.params.issueID}, (err, deletedIssue) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send('deleted issue')
    })
  })

//update issue
voteRouter.put('/:issueID', (req, res, next) =>{
    Issue.findOneAndUpdate(
        {_id: req.params.issueID},
        req.body,
        {new: true},
        (err,updatedIssue) =>{
          if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedIssue)
      }
    )
  })

  module.exports = voteRouter