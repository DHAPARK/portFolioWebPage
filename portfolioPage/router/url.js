module.exports = (router) => {
  router.route("/").get((req, res) => {
    res.render("index.ejs");
  });

  router.route("/handsomeHack").get((req, res) => {
    res.render("handsomeHack.ejs");
  });
};
