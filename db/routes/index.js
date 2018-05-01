const express = require('express');
const router = express.Router();

// serve static version of React app?
router.get('/', (req, res) => {
    var str = "This is where the React App should be served<br>" +
                "Try the API by following these links:<br>" +
                "http://localhost:3001/api/article/search?q=Placeholder+title&keys=[%27author%27]<br>" +
                "http://localhost:3001/api/article/create_get<br>" +
                "http://localhost:3001/api/article/id/5ae80f4bb4bc1334b8f0f0aa<br>" +
                "http://localhost:3001/api/article/id/5ae80f4bb4bc1334b8f0f0aa/update_get?doc={%22title%22:%20%22using%20url%20to%20update%20title%22}'<br>";
                
    res.send(str);
})

module.exports = router;