const dbPool = require('./config');
const dynamicQuery = require('./query');

module.exports = {
    query: async (name) => {
        const path = require('path');
        const fs = require('fs');
        const sql = await fs.readFile(path.join(__dirname, './sql/' + name + '.sql')).toString();
        
        return dbPool.query(sql)
    },
    sqlQuery: async (sql) => {
        return dbPool.query(sql)
    }
}