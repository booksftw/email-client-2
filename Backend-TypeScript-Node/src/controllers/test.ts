"use strict";

import { Response, Request, NextFunction } from "express";
// import { UserDocument } from "../models/User";


/**
 * GET /api
 * List of API examples.
 */
export const getTestApi = (req: Request, res: Response) => {
    res.json({ greeting: "howdy" });
    // res.render("api/index", {
    //     title: "API Examples"
    // });
};
