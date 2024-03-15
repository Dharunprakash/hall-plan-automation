import { z } from "zod"

import { db } from "@/lib/db"

import { publicProcedure, router } from "./trpc"

export const studentRouter = router({
  getAll: publicProcedure.query(async () => {
    return await db.student.findMany()
  }),
  upsertMany: publicProcedure
    .input(z.array(z.object({})))
    .mutation(async ({ input }) => {}),
  delete: publicProcedure.input(z.string()).mutation(async ({ input: id }) => {
    return await db.student.delete({
      where: { id },
    })
  }),
})
