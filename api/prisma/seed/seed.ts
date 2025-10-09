/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PrismaClient, Prisma } from "@prisma/client";
import { tasks } from "./seeds/tasks";

export const seed = async () => {
    const client = new PrismaClient();
    console.log("Seeding database...");

    await client.$transaction(async (prisma) => {
        for (const task of tasks) {
            const t = await prisma.Task.findFirst({
                where: { id: task.id }
            });

            if (!t) {
                await prisma.Task.create({
                    data: task,
                })
            } else {
                await prisma.Task.update({
                    where: { id: task.id },
                    data: task,
                })
            }
        }
    })
}