
class SiteControllers {
    // get /home
    home(req, res) {
        res.render('home');
    }
    

}

module.exports = new SiteControllers;