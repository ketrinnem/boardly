import { PrismaService } from "prisma/prisma.service";
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getData(): {
        message: string;
    };
    onApplicationBootstrap(): Promise<void>;
}
