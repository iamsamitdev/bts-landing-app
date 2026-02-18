// Prisma 7 configuration file
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({

  // ตำแหน่งไฟล์ schema
  schema: "prisma/schema.prisma",

  // ตำแหน่งเก็บ migration files
  migrations: {
    path: "prisma/migrations",
  },

  // datasource — ดึง URL จาก .env
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
