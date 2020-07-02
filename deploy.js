const fs = require('fs')

fs.writeFile('public/CNAME', 'dev.rossmacd.com', err => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
})
