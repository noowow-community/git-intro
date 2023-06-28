export function userManager(user) {
  this.createUser = function (user) {
    this.databse.save(user)
  }

  this.updateUser = function (user) {
    this.databse.update(user)
  }
}