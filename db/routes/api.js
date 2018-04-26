// import { builtinModules } from 'module';

const express = require('express');
const router = express.Router();

// require controller modules
var article_controller = require('../controllers/articleController');
var user_controller = require('../controllers/userController');

// article routes
// search for articles via GET
router.get('/article/search', article_controller.article_search)

// create new article via PUT (is idempotent and therefore preferable to POST)
router.put('/article/create', article_controller.article_create);

// create new article via GET - for testing only
router.get('/article/create_get', article_controller.article_create_get);

// display an article via GET
router.get('/article/id/:article_id', article_controller.article);

// update article via PATCH
router.patch('/article/id/:article_id/update', article_controller.article_update);

// delete article via DELETE (is idempotent)
router.delete('/article/id/:article_id/delete', article_controller.article_delete);

// delete article via GET - for testing only
router.get('article/id/:article_id/delete_get', article_controller.article_delete_get);

// user routes
// search for a user via GET
router.get('/user/search', user_controller.user_search);

// create new user via PUT
router.put('/user/create', user_controller.user_create);

// update user via PATCH
router.patch('/user/id/:user_id/update', user_controller.user_update);

// delete user via DELETE
router.delete('/user/id/:user_id/delete', user_controller.user_delete);

module.exports = router;