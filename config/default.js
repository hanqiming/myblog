module.exports = {
    port: 3000,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
//    mongodb: 'mongodb://localhost:27017/myblog'
    mongodb: 'mongodb://bloguser:blogpwd@ds157342.mlab.com:57342/myblog'
};