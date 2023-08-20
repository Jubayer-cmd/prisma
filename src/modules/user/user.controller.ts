import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserService(req.body);
    res.send({
      sucsess: true,
      message: "user created",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const insertUserProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertUserProfile(req.body);
    res.send({
      sucsess: true,
      message: "user created",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.send({
      sucsess: true,
      message: "user fetched",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUserById(Number(req.params.id));
    res.send({
      sucsess: true,
      message: "user fetched",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const userController = {
  createUser,
  insertUserProfile,
  getUsers,
  getUserById,
};
