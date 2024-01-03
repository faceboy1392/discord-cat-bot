import { Events, Interaction } from "discord.js";
import { EventData, EventExecutable } from "../classes/Event";
import Bot from "../classes/Bot";

const data: EventData = {
  name: Events.InteractionCreate,
  once: false,
};

class Impl extends EventExecutable {
  async execute(bot: Bot, i: Interaction) {
    if (!i.isCommand()) return;
    const command = bot.commands.get(i.commandName);
    new command.Impl().execute(bot, i);
  }
}

export default { name: data.name, once: data.once, Impl };
