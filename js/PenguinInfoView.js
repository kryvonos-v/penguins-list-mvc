;(function (module) {
  function PenguinInfoView (element) {
    this._element = element
    this.onClickGetPenguin = null
  }

  PenguinInfoView.prototype.render = function (model) {
    var penguinInfo = model.currentPenguin

    this._element.innerHTML = `
      <h3>${penguinInfo.name}</h3>
      <img class="penguin-image" src="${penguinInfo.imageUrl}" alt="${penguinInfo.name}">
      <p>
        Size: ${penguinInfo.size}
      </p>
      <p>
        Favorite food: ${penguinInfo.favoriteFood}
      </p>
      <p>
        <button id="prevPenguinBtn" class="button mr-20px" data-penguin-index="${model.previousIndex}">Previous</button>
        <button id="nextPenguinBtn" class="button" data-penguin-index="${model.nextIndex}">Next</button>
      </p>
    `

    this._initEventListeners()
  }

  PenguinInfoView.prototype._initEventListeners = function () {
    let prevPenguinBtn = this._element.querySelector('#prevPenguinBtn')
    prevPenguinBtn.addEventListener('click', this.onClickGetPenguin)

    let nextPenguinBtn = this._element.querySelector('#nextPenguinBtn')
    nextPenguinBtn.addEventListener('click', this.onClickGetPenguin)
  }

  module.PenguinInfoView = PenguinInfoView
})(window.module)

