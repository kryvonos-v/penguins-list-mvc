;(function (module) {
  function PenguinInfoController (view, model) {
    this._view = view
    this._model = model

    this.initialize()
  }

  PenguinInfoController.prototype.initialize = function () {
    var self = this

    this._view.onClickGetPenguin = this.onClickGetPenguin.bind(this)
    this._model.asyncGetPenguinsList(null, function (data) {
      self._view.render(self._model)
    })
  }

  PenguinInfoController.prototype.onClickGetPenguin = function (event) {
    let penguinIndex = event.target.dataset.penguinIndex
    this._model.setCurrentIndex(parseInt(penguinIndex))
    this._view.render(this._model)
  }

  module.PenguinInfoController = PenguinInfoController
}(window.module))
