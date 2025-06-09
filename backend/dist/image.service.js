"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
// image.service.ts
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let ImageService = class ImageService {
    async generate(prompt) {
        const response = await axios_1.default.post('https://api.replicate.com/v1/predictions', {
            version: "a9758cbf6d591e1fc6dc9f66eae4b8abdc3bd161c1c2d0496f724b038b6f62a0", // SD 1.5
            input: { prompt }
        }, {
            headers: {
                Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });
        const prediction = response.data;
        return prediction.urls.get; // esto es un polling URL
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)()
], ImageService);
//# sourceMappingURL=image.service.js.map