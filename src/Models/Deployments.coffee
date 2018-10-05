BaseModel = require '../BaseModel'
Utils = require '../Utils'

class Deployments extends BaseModel
  all: (projectId, fn = null) =>
    @debug "Deployments::all()"
    @get "projects/#{Utils.parseProjectId projectId}/deployments", (data) => fn data if fn

module.exports = (client) -> new Deployments client
