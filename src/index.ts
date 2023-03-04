import { Context, Schema } from "koishi";

// 定义插件的名称，用于在 Koishi 中注册和使用
export const name = "ai-tag";

// 定义插件的用法说明，用于在 Koishi 中显示帮助信息
export const usage =
  "这是随机tag插件，当有人在群聊中发送“tag”时触发。预设tag中不含任何nsfw元素，请放心使用。可以在`本地化 tag`中添加或修改你的随机tag，记得对照格式哦。欢迎来[论坛](https://forum.koishi.xyz/t/topic/740)提出你的好用tag~";

// 定义插件的配置接口，用于在 Koishi 中指定插件需要的参数类型
export interface Config {
  // 增加一个前缀属性，用于指定跑图机器人的前缀字符串
  prefix?: string;
}

// 定义插件的配置模式，这里是一个对象模式
export const Config: Schema<Config> = Schema.object({
  // 增加一个前缀字段，这里是一个字符串模式，并且有描述和默认值
  prefix: Schema.string().description("跑图机器人的前缀").default("rr"),
});

// 定义插件的应用函数，接收一个上下文对象作为参数，在这个函数中实现插件的主要逻辑
export function apply(ctx: Context) {
  // 从本地化文件中导入中文语言包，并将其定义到上下文对象中
  ctx.i18n.define("zh", require("./locales/zh"));

  // 监听消息事件，接收一个会话对象作为参数，在每次收到消息时触发该事件处理函数
  ctx.command("tag", "随机输出绘画tag").action(({ session }) => {
    const message =
      ctx.config.prefix + " " + session.text("commands.tag.random-tag");
    return message;
  });
}
