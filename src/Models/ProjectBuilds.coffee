BaseModel = require '../BaseModel'
Utils = require '../Utils'

class ProjectBuilds extends BaseModel

  # === Builds
  listBuilds: (projectId, params={}, fn = null) =>
    if 'function' is typeof params
      fn = params
      params={}

    params.page ?= 1
    params.per_page ?= 100

    @debug "Projects::listBuilds()"
    @get "projects/#{Utils.parseProjectId projectId}/builds", params, (data) => fn data if fn

  showBuild: (projectId, buildId, fn = null) =>
    @debug "Projects::build()"
    @get "projects/#{Utils.parseProjectId projectId}/builds/#{buildId}", null, (data) => fn data if fn

  triggerBuild: (params={}, fn = null) =>
    @debug "Projects::triggerBuild()"
    @post "projects/#{Utils.parseProjectId params.projectId}/trigger/builds", params, (data) -> fn data if fn

  cancel: (projectId, buildId, fn = null) =>
    @debug "Projects::cancel()"
    @post "projects/#{Utils.parseProjectId projectId}/builds/#{buildId}/cancel", {}, (data) => fn data if fn

  retry: (projectId, buildId, fn = null) =>
    @debug "Projects::retry()"
    @post "projects/#{Utils.parseProjectId projectId}/builds/#{buildId}/retry", {}, (data) => fn data if fn

  erase: (projectId, buildId, fn = null) =>
    @debug "Projects::erase()"
    @post "projects/#{Utils.parseProjectId projectId}/builds/#{buildId}/erase", {}, (data) => fn data if fn

  play: (projectId, buildId, fn = null) =>
    @debug "Projects::play()"
    @post "projects/#{Utils.parseProjectId projectId}/builds/#{buildId}/play", {}, (data) => fn data if fn


module.exports = (client) -> new ProjectBuilds client
