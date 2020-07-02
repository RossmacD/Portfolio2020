const fs = require('fs')

fs.writeFile('public/CNAME', 'dev.rossmacd.com', err => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  fs.writeFile('public/404.md', 'permalink: /404.html', writeErr => {
    if (writeErr) {
      console.log(writeErr)
      process.exit(1)
    }
  })
})
