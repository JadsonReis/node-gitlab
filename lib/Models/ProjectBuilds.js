(function() {
  var BaseModel, ProjectBuilds, Utils,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Utils = require('../Utils');

  ProjectBuilds = (function(superClass) {
    extend(ProjectBuilds, superClass);

    function ProjectBuilds() {
      this.play = bind(this.play, this);
      this.erase = bind(this.erase, this);
      this.retry = bind(this.retry, this);
      this.cancel = bind(this.cancel, this);
      this.triggerBuild = bind(this.triggerBuild, this);
      this.showBuild = bind(this.showBuild, this);
      this.listBuilds = bind(this.listBuilds, this);
      return ProjectBuilds.__super__.constructor.apply(this, arguments);
    }

    ProjectBuilds.prototype.listBuilds = function(projectId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      if ('function' === typeof params) {
        fn = params;
        params = {};
      }
      if (params.page == null) {
        params.page = 1;
      }
      if (params.per_page == null) {
        params.per_page = 100;
      }
      this.debug("Projects::listBuilds()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/builds", params, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectBuilds.prototype.showBuild = function(projectId, buildId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::build()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/builds/" + buildId, null, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectBuilds.prototype.triggerBuild = function(params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::triggerBuild()");
      return this.post("projects/" + (Utils.parseProjectId(params.projectId)) + "/trigger/builds", params, function(data) {
        if (fn) {
          return fn(data);
        }
      });
    };

    ProjectBuilds.prototype.cancel = function(projectId, buildId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::cancel()");
      return this.post("projects/" + (Utils.parseProjectId(projectId)) + "/builds/" + buildId + "/cancel", {}, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectBuilds.prototype.retry = function(projectId, buildId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::retry()");
      return this.post("projects/" + (Utils.parseProjectId(projectId)) + "/builds/" + buildId + "/retry", {}, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectBuilds.prototype.erase = function(projectId, buildId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::erase()");
      return this.post("projects/" + (Utils.parseProjectId(projectId)) + "/builds/" + buildId + "/erase", {}, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectBuilds.prototype.play = function(projectId, buildId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Projects::play()");
      return this.post("projects/" + (Utils.parseProjectId(projectId)) + "/builds/" + buildId + "/play", {}, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    return ProjectBuilds;

  })(BaseModel);

  module.exports = function(client) {
    return new ProjectBuilds(client);
  };

}).call(this);
