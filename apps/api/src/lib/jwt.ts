import jwt from "jsonwebtoken";

export function signAuthToken(userId: string) {
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
}

export function verifyAuthToken(token: string) {
  const payload = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
  return typeof payload.sub === "string" ? payload.sub : null;
}
