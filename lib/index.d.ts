import { Context, Schema } from "koishi";
export declare const name = "ai-tag";
export declare const usage = "\u8FD9\u662F\u968F\u673Atag\u63D2\u4EF6\uFF0C\u5F53\u6709\u4EBA\u5728\u7FA4\u804A\u4E2D\u53D1\u9001\u201Ctag\u201D\u65F6\u89E6\u53D1\u3002\u9884\u8BBEtag\u4E2D\u4E0D\u542B\u4EFB\u4F55nsfw\u5143\u7D20\uFF0C\u8BF7\u653E\u5FC3\u4F7F\u7528\u3002\u53EF\u4EE5\u5728`\u672C\u5730\u5316 tag`\u4E2D\u6DFB\u52A0\u6216\u4FEE\u6539\u4F60\u7684\u968F\u673Atag\uFF0C\u8BB0\u5F97\u5BF9\u7167\u683C\u5F0F\u54E6\u3002\u6B22\u8FCE\u6765[\u8BBA\u575B](https://forum.koishi.xyz/t/topic/740)\u63D0\u51FA\u4F60\u7684\u597D\u7528tag~";
export interface Config {
    prefix?: string;
}
export declare const Config: Schema<Config>;
export declare function apply(ctx: Context): void;
