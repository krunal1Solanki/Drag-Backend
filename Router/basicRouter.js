const express = require('express');
const { addComponent, getComponents, updateComponent, getCounter, updateCounter } = require('../Controllers/basicContoller');
const basicRouter = express.Router();

basicRouter.route('/addComponent').post(addComponent)
basicRouter.route('/getComponents').get(getComponents)
basicRouter.route('/getCounter').get(getCounter);
basicRouter.route('/updateCounter').post(updateCounter)
basicRouter.route('/updateComponent').post(updateComponent)

module.exports = {basicRouter}