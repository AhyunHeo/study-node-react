const express = require('express');  // npm install express --save
const app = express();
const port = 5000;

const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongodb connect
const mongoose = require('mongoose');  // npm install mongoose --save
// mongoose.connect('mongodb+srv://heoaa:dkgus0023@node-react-basic.kplc8dt.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));


// localhost:5000
app.get('/', (req, res) => res.send('Hello~~~~!'));

app.post('/register', (req, res) => {

  // 회원가입 시 필요한 정보들을 client 에서 가져와 DB에 저장
  const user = new User(req.body)

  // user모델에 정보 저장, 실패 시 실패한 정보를 보내줌
  user.save()
      .then(() => {
        res.status(200).json({
            success:true
        })
      })
      .catch((err)=>{
          return res.json({success:false,err})
      });

})



app.listen(port, () => console.log(`Example app listening on port ${port}`))


