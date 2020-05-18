const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const port = 2000;
const cors = require('cors');
const bearerToken = require('express-bearer-token');
const { transporter, transportAwait } = require('./helper/nodemailer');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(bearerToken());
// app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static('public'));
app.io = io;

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome To Susilobid API</h1>');
});

// io.on('connection', socket => {
//     console.log('User Connected');
//     socket.emit('Connected');
//     socket.on('disconnect', () => {
//         console.log('User Disconnected');
//         io.emit('Connected')
//     })
// });

app.post('/send-mail', async (req, res) => {
    let to = req.query.email;
    let mailOptions = {
        from : 'Admin <admin@susilobid.com>',
        to,
        subject : 'Testing nodemailer',
        html : '<h1>Success</h1>'
    };
    if (to) {
        try {
            await transportAwait(mailOptions)
            res.status(200).send('Email Sent');
        } catch(err) {
            res.status(500).send(err.message);
        }
    } else {
        res.status(404).send('Email Not Found');
    };
});

const {
    authRouter,
    manageUserRouter,
    manageSellerRouter,
    setBiddingRouter,
    walletRouter,
} = require('./router');

app.use('/users', authRouter);
app.use('/manage-users', manageUserRouter);
app.use('/manage-sellers', manageSellerRouter);
app.use('/set-bidding-room', setBiddingRouter);
app.use('/wallet', walletRouter);

http.listen(port, () => console.log(`API active at port ${port}`));