BaseModel = require '../BaseModel'
Utils = require '../Utils'

class Pipelines extends BaseModel
  all: (projectId, fn = null) =>
    @debug "Pipelines::all()"
    @get "projects/#{Utils.parseProjectId projectId}/pipelines", (data) => fn data if fn

  retry: (projectId, pipelineId, fn = null) =>
    @debug "Pipelines::retry()"
    @get "projects/#{Utils.parseProjectId projectId}/pipelines/#{pipelineId}/retry", (data) => fn data if fn

  cancel: (projectId, pipelineId, fn = null) =>
    @debug "Pipelines::cancel()"
    @get "projects/#{Utils.parseProjectId projectId}/pipelines/#{pipelineId}/cancel", (data) => fn data if fn

module.exports = (client) -> new Pipelines client
