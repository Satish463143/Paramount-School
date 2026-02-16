const bcrypt = require("bcryptjs")
require("../config/db.config")
const {  status, role } = require("../config/constant.config")
const UserModel = require("../module/auth/user.model")
 
const adminUser =[
    {
        name:"Paramount School",
        email:"paramountacademy12@gmail.com",
        password: bcrypt.hashSync("@!Paramount@9565",10),
        role:role.ADMIN,
        status:status.ACTIVE,
        phone:"9841575609",
        activeFor:new Date(new Date().getFullYear() + 1, 0, 1)
    }
]

const seedUser = async () => {
    try {
        // Use Promise.all to handle asynchronous mapping
        await Promise.all(
            adminUser.map(async (user) => {
                const userExisting = await UserModel.findOne({ email: user.email });
                if (!userExisting) {
                    const userObj = new UserModel(user);
                    await userObj.save();
                }
            })
        );
        process.exit(1)
    } catch (exception) {
        console.log(exception);
    }
};

seedUser()
