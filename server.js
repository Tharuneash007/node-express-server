const app = require("./app");
require("dotenv").config();
require("./database/database")

app.listen(process.env.PORT || "9090", () => {
  console.log(`Application is running on port ${process.env.PORT || "9090"}`);
});

require("./utils/load.events/load.process.events")();
console.log('====================================');
console.log(process.cwd());
console.log('====================================');