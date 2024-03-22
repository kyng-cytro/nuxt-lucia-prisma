import { webcrypto } from "node:crypto";
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Webcrypto polyfill for Lucia
globalThis.crypto = webcrypto as Crypto;

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV !== "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
