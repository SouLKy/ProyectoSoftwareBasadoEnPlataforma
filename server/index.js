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
passport.use(new passportLocal(function(username, password, done) {
    if(username==="soulky" && password==="pipapu"){
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
app.get("/tipoMovimientos", jsonParser,productosModel.obtener);
app.post("/insertarTipo",jsonParser, productosModel.insertar);

const PORT = 3001;
app.listen(PORT, () => {
    console.log("El servidor se ha iniciado en el puerto",PORT)
});


app.get("/",(req,res,next)=>{
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}, (req, res) => {
    res.send("Hola mundo");
}
);
app.get("/login", (req, res) => {
    res.render("login");
}
);
app.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
    })
);