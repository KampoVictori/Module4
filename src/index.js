import express from "express";
import passport from "passport";
import apiRouter from "./api/photo";
import authRouter from "./auth";
import setJwtStrategy from "./auth/jwtstrategy";
import cors from "cors";

const server = new express();
server.use(cors());
server.use(passport.initialize());
setJwtStrategy(passport);
server.use(express.urlencoded());
server.use(express.json());
server.use("/api/photo", apiRouter);
server.use("/auth", authRouter);
server.listen(7000);
    console.log("http://localhost:7000");
