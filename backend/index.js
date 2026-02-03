require("dotenv").config();
const app = require("./src/config/express.config");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    try{
        console.log(`Server running on port ${PORT}`);

    }catch(exception){
        console.log(exception);
    }
});
