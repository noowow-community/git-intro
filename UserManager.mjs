export function userManager(user) {
  this.createUser = function (user) {
    this.databse.save(user)
  }

  this.listUser = function () {
    this.databse.all()
  }
}