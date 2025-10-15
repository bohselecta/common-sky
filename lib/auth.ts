import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const alg = "HS256";
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev_dev_dev_change_me");

export async function issueSession(sub: string) {
  const token = await new SignJWT({ sub })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("14d")
    .sign(secret);
  cookies().set("session", token, { httpOnly: true, secure: true, sameSite: "lax", path: "/" });
}

export async function readSession() {
  const token = cookies().get("session")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { sub: string; iat: number; exp: number };
  } catch {
    return null;
  }
}

export function clearSession() {
  cookies().set("session", "", { httpOnly: true, secure: true, maxAge: 0, path: "/" });
}
