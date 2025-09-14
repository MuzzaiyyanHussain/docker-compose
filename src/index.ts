import express from "express";
import {PrismaClient} from "@prisma/client"
const app = express();
const port = 3000;
const prismaClient = new PrismaClient();



app.get("/", async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({data:data})
})

app.post("/", async (req, res) => {
     await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    res.json({"message":"signed up successfull"})
})

app.listen(port)