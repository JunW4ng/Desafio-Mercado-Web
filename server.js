const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;

const productosTipos = [
  "banana",
  "cebollas",
  "pimenton",
  "papas",
  "lechuga",
  "tomate",
];

//? Configuracion handlebars
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/components",
    helpers: {
      msjBienvenido: () =>
        "Bienvenido al mercado WEB, seleccione sus productos",
    },
  })
);

//? Libera contenido css/js de bootstrap y jquery
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use(
  "/bootstrapJs",
  express.static(__dirname + "/node_modules/bootstrap/dist/js")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
//? Libera carpeta de imagenes
app.use("/", express.static(__dirname + "/assets/"));
//? Libera carpeta js del front
app.use("/js", express.static(__dirname + "/assets/js"));

app.get("/", (req, res) => {
  res.render("Dashboard", { productos: productosTipos });
});

app.listen(port, () => console.log(`Listening to port ${port}`));
