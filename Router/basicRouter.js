const express = require('express');
const { addComponent, getComponents, updateComponent } = require('../Controllers/basicContoller');
const basicRouter = express.Router();

basicRouter.route('/addComponent').post(addComponent)
basicRouter.route('/getComponents').get(getComponents)
basicRouter.route('/updateComponent').post(updateComponent)

module.exports = {basicRouter}