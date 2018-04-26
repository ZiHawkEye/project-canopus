const express = require('express');
const router = express.Router();

// serve static version of React app?
router.get('/', (req, res) => {
    var str = "This is where the React App should be served<br>" +
                "Try the API by following these links:<br>" +
                "http://localhost:3001/api/article/search?q=test&keys=['author']<br>" +
                "http://localhost:3001/api/article/create_get<br>" +
                "http://localhost:3001/api/article/id/5ae1e5e22abd022c0cde6bcb";
    res.send(str);
})

module.exports = router;