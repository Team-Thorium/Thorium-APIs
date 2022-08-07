const route = require('express').Router();
const controller = require('../controllers');

route.get('/products', controller.get('products'));
route.get('/reviews', controller.get('reviews'));
route.get('/questions', controller.get('qa'));

route.put('/reviews', controller.postPut('reviews'));
route.put('/questions', controller.postPut('qa'));

route.post('/reviews', controller.postPut('reviews'));
route.post('/questions', controller.postPut('qa'));

module.exports = route;
