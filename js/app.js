;(function (module) {
  let penguinsListEl = document.querySelector('#listOfPenguins')
  let penguinInfoView = new module.PenguinInfoView(penguinsListEl)
  let penguinInfoModel = new module.PenguinInfoModel()
  let penguinInfoController = new module.PenguinInfoController(penguinInfoView, penguinInfoModel)

  // penguinInfoView.render({
  //   name: 'Chinstrap',
  //   imageUrl: 'http://www.penguinworld.com/types/emperor_files/emperorl-2.jpg',
  //   size: '5.0kg (m), 4.8kg (f)',
  //   favoriteFood: 'krill',
  //   index: 2,
  //   count: 5,
  //   previousIndex: 1,
  //   nextIndex: 3
  // })

  window.penguinInfoView = penguinInfoView
})(window.module)
