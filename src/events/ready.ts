import { Client, Events } from "discord.js";
import { EventData, EventExecutable } from "../classes/Event";
import Bot from "../classes/Bot";
import Commandler from "../util/Commandler";

const data: EventData = {
  name: Events.ClientReady,
  once: true,
};

class Impl extends EventExecutable {
  async execute(bot: Bot, client: Client) {
    bot.log.info(`Logged in as ${bot.client.user.tag}`);
    bot.log.debug(`Guilds: ${client.guilds.cache.size}`);
    bot.client = client;

    const commandler = new Commandler(bot);
    await commandler.startup();
  }
}

export default { name: data.name, once: data.once, Impl };
