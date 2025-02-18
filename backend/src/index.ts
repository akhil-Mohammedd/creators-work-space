import express  from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
   const data = {
      message: "Hello from the server!",
      timestamp: new Date().toISOString(),
      status: "success",
      items: [
         { id: 1, name: "Item 1" },
         { id: 2, name: "Item 2" },
         { id: 3, name: "Item 3" }
      ]
   };
   res.json(data);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
