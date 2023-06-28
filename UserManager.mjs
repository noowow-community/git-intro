export function userManager(user) {
  this.createUser = function (user) {
    this.database.save(user)
    console.log('Save user', JSON.stringify(user))
  }

  this.deleteUser = function (user) {
    this.database.delete(user)
  }

  this.updateUser = function (user) {
    this.database.update(user)
  }

  this.listUser = function () {
    this.database.all()
  }
}