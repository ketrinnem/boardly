"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const client_1 = require("@prisma/client");
const tasks_1 = require("./seeds/tasks");
const seed = async () => {
    const client = new client_1.PrismaClient();
    console.log("Seeding database...");
    await client.$transaction(async (prisma) => {
        for (const task of tasks_1.tasks) {
            const t = await prisma.Task.findFirst({
                where: { id: task.id }
            });
            if (!t) {
                await prisma.Task.create({
                    data: task,
                });
            }
            else {
                await prisma.Task.update({
                    where: { id: task.id },
                    data: task,
                });
            }
        }
    });
};
exports.seed = seed;
//# sourceMappingURL=seed.js.map