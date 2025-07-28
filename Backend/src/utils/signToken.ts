import jwt, { JwtPayload } from "jsonwebtoken";

const signToken = (payload: JwtPayload): string => {
  if (!process.env.JWT_SECRET_KEY) throw new Error("JWT secret key not found");

  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN),
  });
};

export default signToken;
