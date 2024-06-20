import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import productRoute from "./routes/productRoute.js"

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(cors());



/* ROUTES */

app.use("/api/v1", productRoute);
// app.use("/api/v2", expanse);
// app.use("/api/v3", friends);
// app.use("/api/v4", userInfo);
// app.use("/api/v5", Graphs);
// app.use("/api/v6", Groups);
// app.use("/api/v7", Goals);
app.get('/',async(req,res)=>{
   res.send("hi");
  //  const data = await TransactionSchema.find({});
  //  res.json({success:true,data:data});
})





/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
  }).then(() => {
    app.listen(PORT, () => console.log(`DB Connected Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));



  