"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const feature_flags_1 = require("../../libs/feature-flags/feature-flags");
const seed_1 = require("./../prisma/seed/seed");
const prisma_service_1 = require("../prisma/prisma.service");
let AppService = class AppService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getData() {
        return { message: "Welcome to api!" };
    }
    async onApplicationBootstrap() {
        if (process.env.API === "true") {
            if ((0, feature_flags_1.isFlagEnabled)(feature_flags_1.FEATURE_FLAGS.RUN_SEEDS)) {
                console.log("*** Start:  Running seeds ***");
                await (0, seed_1.seed)();
                console.log("*** Finish: Running seeds ***");
            }
            console.log("*** Application bootstrap done ***");
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map