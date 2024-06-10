const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/send', async (req, res) => {
    const {
        input
    } = req.body;

    const salt = await bcrypt.hash(input, 10);

    res.render('result', {
        salt
    });
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})