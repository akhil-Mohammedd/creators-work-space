import express  from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.post('/api/v1/signup',(req,res)=>{
   
});

app.post('api/v1/signin',(req,res)=>{

});

app.post('api/v1/signout',(req,res)=>{

});







app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
