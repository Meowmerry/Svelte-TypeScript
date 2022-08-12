const db = require("../models/item.models");
import { NextFunction, Request, Response } from "express";
export const itemsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentDate = new Date();
  const cDay = currentDate.getDate();
  const cMonth = currentDate.getMonth() + 1;
  const cYear = currentDate.getFullYear();
  const currDate = `${cYear}-${cMonth}-${cDay}`;
  try {
    const { item } = req.body;
    const sqlPost = `INSERT INTO Tasks
            (item,created_at) VALUES($1, $2) RETURNING *`;
    await db.query(sqlPost, [item, currDate]);
    res.locals.status = "Successfully created task!";
    return next();
  } catch (error) {
    console.log("error", error);
    return next({ message: { err: error.message } });
  }
};
