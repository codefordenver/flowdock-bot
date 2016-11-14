
'use strict';

(() => {

    const witHelper = require('hubot-wit-helper');

    const TOKEN = 'BIHHIJGGRDHA2FF6G3NAJHL4IZ62CEG7';

    const firstEntityValue = (entities, entity) => {
      const val = entities && entities[entity] &&
        Array.isArray(entities[entity]) &&
        entities[entity].length > 0 &&
        entities[entity][0].value
      ;
      if (!val) {
        return null;
      }
      return typeof val === 'object' ? val.value : val;
    };

    const actions = {
        send(request, response) {

            const { sessionId } = request;
            const { text } = response;

            return new Promise(function(resolve) {
                sessionId.res.reply(text);
                return resolve();
            });
        },
        agenda({context, entities}) {
          return new Promise(function(resolve, reject) {
            var date = firstEntityValue(entities, "date");
            return resolve(context);
          });
        },
      };

    const bot = robot => {

        const witRobot = new witHelper.Robot(
            TOKEN,
            actions,
            robot,
            new witHelper.log.Logger(witHelper.log.DEBUG)
        );

        const reg = /(.*)/;

        witRobot.getMessage = (res) => {
            return res.match[3];
        };

        witRobot.respond(reg, (err, context, res) => {

            console.log(`[USER] ${witRobot.getMsg(res)}`);

            if (err) {
                console.error(err);
                return;
            }

        });

    };

    module.exports = bot;

})();
