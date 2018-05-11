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
router.get('/article/id/:articleId', article_controller.article);

// update article via PATCH
router.patch('/article/id/:articleId/update', article_controller.article_update);

// update article via GET - for testing only
router.get('/article/id/:articleId/update_get', article_controller.article_update_get);

// delete article via DELETE (is idempotent)
router.delete('/article/id/:articleId/delete', article_controller.article_delete);

// delete article via GET - for testing only
router.get('/article/id/:articleId/delete_get', article_controller.article_delete_get);

// user routes
// search for a user via POST
router.post('/user/search', user_controller.user_search);

// search for a user via GET - for testing only
router.get('/user/search_get', user_controller.user_search_get);

// create new user via PUT
router.put('/user/create', user_controller.user_create);

// create new user via GET - for testing only
router.get('/user/create_get', user_controller.user_create_get);

// update user via PATCH
router.patch('/user/update', user_controller.user_update);

// update user via PATCH - for testing only
router.get('/user/update_get', user_controller.user_update_get);

// delete user via DELETE
router.delete('/user/delete', user_controller.user_delete);

// delete user via GET - for testing only
router.get('/user/delete_get', user_controller.user_delete_get);

module.exports = router;