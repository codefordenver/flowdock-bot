'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Wit = require('node-wit').Wit;
var witHelper = require('hubot-wit-helper');

var accessToken = 'BIHHIJGGRDHA2FF6G3NAJHL4IZ62CEG7';

var firstEntityValue = function firstEntityValue(entities, entity) {
  var val = entities && entities[entity] && Array.isArray(entities[entity]) && entities[entity].length > 0 && entities[entity][0].value;
  if (!val) {
    return null;
  }
  return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? val.value : val;
};

var actions = {
  send: function send(request, response) {
    var sessionId = request.sessionId,
        context = request.context,
        entities = request.entities;
    var text = response.text,
        quickreplies = response.quickreplies;

    return new Promise(function (resolve, reject) {
      console.log(JSON.stringify(response.text));
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

  var witRobot = new witHelper.Robot(accessToken, actions, robot);

  witRobot.respond(/(.*)/gi, function (err, context, res) {
    console.log('[USER] ' + witRobot.getMsg(res));
    if (err) {
      console.error(err);
      return;
    }
  });
};

module.exports = bot;