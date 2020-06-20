//Config url for pages
const urlConfig = require("./pages/config/Urls.json")
//Express
const express = require('express')
const next = require('next')
const result = require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use('/assets', express.static('assets'))

    //Config
    let keys = Object.keys(urlConfig)
    let layout = "index"
    for (var count = keys.length, i = count - 1; i >= 0; i--) {
      let key: string = keys[i]
      //Yêu cầu của bạn
      server.get(key, (req, res) => {
        let page = ""
        let params: any = {}
        params = Object.assign(req.params, urlConfig[key])
        //If config layout
        if (params["layout"]) {
          layout = params["layout"]
        }
        page = '/' + layout
        //If config page
        if (urlConfig[key]["single-page"]) {
          page = urlConfig[key]["single-page"]
        }
        // console.log(page);
        // console.log(params);
        //Render
        app.render(req, res, page, params)
      })
    }
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })

  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
