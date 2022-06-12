const express = require("express");
const app = express();
const productosModel = require("./database");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const passport= require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const res = require("express/lib/response");
const passportLocal = require("passport-local").Strategy;
//const urlencodedParser = bodyParser.urlencoded({ extended: false })
const cors = require('cors');

app.use(cors({origin:['http://localhost:3000']}))


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(async function(username, password, done) {
    const key = await productosModel.getLogin(username, password);
    if(key) {
        return done(null, {username: username});
    }
    done(null,false);
}));
passport.serializeUser(function(user, done) {
    done(null, user.username);
}
);
passport.deserializeUser(function(username, done) {
    done(null, {username: username});
}
);

app.use(express.static("curso-backend"));
app.get("/usuarios", jsonParser,productosModel.obtener);
//app.post("/insertarTipo",jsonParser, productosModel.insertar); este esta obsoleto pero se deja para ver como funciona un POST

const PORT = 3001;
app.listen(PORT, () => {
    console.log("El servidor se ha iniciado en el puerto",PORT)
});


app.get("/",(req,res,next)=>{
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}, (req, res) => {
    res.render("home");
}
);
app.post('/', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

app.get("/login", (req, res) => {
    res.render("login");
}
);

app.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
    })
);