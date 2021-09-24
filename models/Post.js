const db = require('./db.js')

const Post = db.sequelize.define('posts', {
    title: {
        type: db.sequelize.STRING
    },
    content: {
        type: db.sequelize.TEXT
    }
})

Post.sync({force: true})