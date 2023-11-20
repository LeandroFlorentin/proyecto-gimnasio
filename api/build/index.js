import server from "./src/app.js";
const { PORT_GIMNASIO } = process.env;
server.listen(3000, () => {
    console.log(`Funcionando puerto ${3000}`);
});
