const axios = require('axios');
const qs = require('qs');

const appConfig = require('./config.json');

async function callback(req, res) {
    const data = qs.stringify({
        'client_id': appConfig.clientId,
        'client_secret': appConfig.clientSecret,
        'grant_type': 'authorization_code',
        'code': req.query.code,
        'user_type': 'Company',
        'redirect_uri': 'http://localhost:3000/oauth/callback' 
    });
      
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/oauth/token',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };
      
    const response = await axios.request(config).catch(err => {});
      
    return res.json({ data: response?.data });
    
}

module.exports = callback;