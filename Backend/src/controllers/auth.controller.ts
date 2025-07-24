import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const forgotPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const resetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);
