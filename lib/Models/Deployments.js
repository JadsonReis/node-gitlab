(function() {
  var BaseModel, Deployments, Utils,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Utils = require('../Utils');

  Deployments = (function(superClass) {
    extend(Deployments, superClass);

    function Deployments() {
      this.all = bind(this.all, this);
      return Deployments.__super__.constructor.apply(this, arguments);
    }

    Deployments.prototype.all = function(projectId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Deployments::all()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/deployments", (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    return Deployments;

  })(BaseModel);

  module.exports = function(client) {
    return new Deployments(client);
  };

}).call(this);
