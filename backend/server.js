const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const rootRouter = require("./routers/rootRouter");
const mongoose = require("mongoose");

// -----------MONGOOSE-----------

// tạo string đường dẫn kết nối với atlas
const DB = process.env.MONGO_URI.replace("<PASSWORD>", process.env.MONGO_PASSWORD);

//kết nối với atlas
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((connect) => {
        console.log(`Kết nối mongoose thành công / name: ${connect.connection.name}`);
    })
    .catch((error) => {
        console.log(`👙  error: ${error}`);
        process.exit();
    });
// -----------EXPRESS-----------
const app = express();

// cài ứng dụng sử dung json
app.use(express.json());

app.use("/api/v1", rootRouter);

// lắng nghe
const port = process.env.PORT || 3002;
const server = app.listen(port, async () => {
    console.log(`Lắng nghe cổng http://localhost:${port} ...`);
});
