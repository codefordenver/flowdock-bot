
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

    var witHelper = require('hubot-wit-helper');

    var TOKEN = 'BIHHIJGGRDHA2FF6G3NAJHL4IZ62CEG7';

    var firstEntityValue = function firstEntityValue(entities, entity) {
        var val = entities && entities[entity] && Array.isArray(entities[entity]) && entities[entity].length > 0 && entities[entity][0].value;
        if (!val) {
            return null;
        }
        return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? val.value : val;
    };

    var actions = {
        send: function send(request, response) {
            var sessionId = request.sessionId;
            var text = response.text;


            return new Promise(function (resolve) {
                sessionId.res.reply(text);
                return resolve();
            });
        },
        agenda: function agenda(_ref) {
            var context = _ref.context,
                entities = _ref.entities;

            return new Promise(function (resolve, reject) {
                var date = firstEntityValue(entities, "date");
                return resolve(context);
            });
        }
    };

    var bot = function bot(robot) {

        var witRobot = new witHelper.Robot(TOKEN, actions, robot, new witHelper.log.Logger(witHelper.log.DEBUG));

        var reg = /(.*)/;

        witRobot.getMessage = function (res) {
            return res.match[3];
        };

        witRobot.respond(reg, function (err, context, res) {

            console.log('[USER] ' + witRobot.getMsg(res));

            if (err) {
                console.error(err);
                return;
            }
        });
    };

    module.exports = bot;
})();