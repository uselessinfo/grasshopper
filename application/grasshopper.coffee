  express = require("express")
  jade = require("jade")
  fs = require("fs")
  app = express()
  grasshopper = this
  grasshopper.data = {}
  
  
  app.configure ->
    app.set "view options",
      layout: false
      pretty: true

    app.use express.static(__dirname + "/public")

  
  app.get "/", (req, res) ->
    res.render (__dirname + "/views/index.jade"), grasshopper.data
  
  
  app.listen process.env.PORT, process.env.IP
  