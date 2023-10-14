const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function GenerateShortUrl(req, res) {
  const shortID = nanoid(8);
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}
async function showURL( req, res){


    const allurls = await URL.find({});
    return res.end(`
    <html>
    <head></head>
    <body>
    <ol>${allurls.map( url=>
      `<li>${url.shortId} -${url.redirectURL} - ${url.visitHistory.length} </li>`
    ).join("")
  }</ol>
</body>
  </html>
    `)
}

async function getAnalytics( req, res){
   const shortId = req.params.shortId;
   const result =  await URL.findone({
    shortId
   })
   
   return res.json({
    TotalVisted : result.visitHistory.length ,
     analytics :result.visitHistory })
}

async function redirectURL (req, res){
  const shortId = req.params.shortID;
  const entry = await URL.findOneAndUpdate({
    shortId,
  },
  {
    $push: {
      visitHistory : {
        timestamp : Date.now()
      }
    },
  })
  
  return res.redirect(entry.redirectURL);
  
}
module.exports = {
  GenerateShortUrl,
  getAnalytics,
  showURL,
  redirectURL
};