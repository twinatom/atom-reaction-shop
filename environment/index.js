if(process.env.production){
    module.exports = require('./production')
}
else{
    module.exports = require('./development')
}