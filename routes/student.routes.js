const express = require('express');
const app = express();
const studentExpressRoute = express.Router();
let StudentSchema = require('../model/student.model');

studentExpressRoute.route('/').get((req, res) => {
    StudentSchema.find((error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

studentExpressRoute.route('/:id').get((req, res) => {
    StudentSchema.findById(req.params.id, (error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

studentExpressRoute.route('/').post((req, res, next) => {
    //console.log(req.route);
    StudentSchema.create(req.body, (error, data) => {
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            });
        }
    })
})

studentExpressRoute.route('/:id').delete((req, res) => {
    //console.log(req.route);
    StudentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            });
        }
    })
})
 
studentExpressRoute.route('/:id').put((req, res) => {
    StudentSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
            if(error){
                return next(error);
            }else{
                res.json(data);
            }
        }
    )
})

function handleResponse(error, res) {
    if(error){
        return next(error);
    }else{
        res.json(data);
    }
}
module.exports = studentExpressRoute;