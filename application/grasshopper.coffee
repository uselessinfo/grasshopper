  express = require("express")
  argv = argv = require('optimist').argv
  jade = require("jade")
  fs = require("fs")
  app = express()
  grasshopper = this
  grasshopper.data = {}
  grasshopper.env = {}
  
  init = () ->
    if not process.env.PORT
      if argv.port then grasshopper.env.PORT = argv.port
      else grasshopper.env.PORT = 3000

      if argv.ip then grasshopper.env.IP = argv.ip
      else grasshopper.env.IP = '127.0.0.1'

    else
      grasshopper.env.PORT = process.env.PORT
      grasshopper.env.IP = process.env.IP

  app.configure ->
    app.set "view options",
      layout: false
      pretty: true

    init ->

    app.use express.static(__dirname + "/public")

  
  app.get "/", (req, res) ->
    res.render (__dirname + "/views/index.jade"), grasshopper.data
  
  
  app.listen grasshopper.env.PORT, grasshopper.env.IP

  console.log "Server Listening at (" + grasshopper.env.IP + ":" + grasshopper.env.PORT + ")"
  