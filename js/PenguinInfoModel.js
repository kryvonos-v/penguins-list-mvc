;(function (module) {
  var Endpoint = {
    penguis: 'https://codepen.io/beautifulcoder/pen/vmOOLr.js'
  }

  function PenguinInfoModel () {
    // Anybody can read this data, but should not change
    this.penguinsList = []
    this.currentIndex = 0

    Object.defineProperties(this, {
      penguinsCount: {
        get () {
          return this.penguinsList.length
        }
      },

      currentPenguin: {
        get () {
          return this.penguinsList[this.currentIndex]
        }
      },

      previousIndex: {
        get () {
          return this.currentIndex === 0
          ? this.penguinsCount - 1
          : this.currentIndex - 1 
        }
      },

      nextIndex: {
        get () {
          return this.currentIndex === this.penguinsCount - 1
          ? 0
          : this.currentIndex + 1
        }
      }
    })
  }

  PenguinInfoModel.prototype.setCurrentIndex = function (index) {
    this.currentIndex = index
  }

  PenguinInfoModel.prototype.asyncGetPenguinsList = function (payload, callback) {
    var xml = new XMLHttpRequest()
    var self = this

    xml.open('GET', Endpoint.penguis, true)
    xml.onload = function () {
      if (xml.status >= 200 && xml.status < 300) {
        self.penguinsList = JSON.parse(xml.responseText)
      }

      callback(self.penguinsList)
    }
    xml.send()
  }

  module.PenguinInfoModel = PenguinInfoModel
})(window.module)
