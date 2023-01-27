import  app from "./app.js";
import  {connection} from"./database/database.js";


async function main(){
    try {
        console.log('va connectarse');
        await connection.sync({force: false});
        await connection.authenticate();
        console.log('Connection has been established successfully.');

        app.listen(4000);
console.log('liste on port', 4000);


      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};


main();


