module.exports = (router) => {
  router.route("/").get((req, res) => {
    res.render("index.ejs");
  });
};
