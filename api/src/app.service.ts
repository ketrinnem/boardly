/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from "@nestjs/common";
import {
  isFlagEnabled,
  FEATURE_FLAGS,
} from "../../libs/feature-flags/feature-flags";
import { seed } from "./../prisma/seed/seed";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) { }

  getData(): { message: string } {
    return { message: "Welcome to api!" };
  }

  async onApplicationBootstrap() {
    if (process.env.API === "true") {
      if (isFlagEnabled(FEATURE_FLAGS.RUN_SEEDS)) {
        console.log("*** Start:  Running seeds ***");
        await seed();
        console.log("*** Finish: Running seeds ***");
      }

      console.log("*** Application bootstrap done ***");
    }
  }
}
