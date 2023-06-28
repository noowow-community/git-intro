export function userManager(user) {
  this.createUser = function (user) {
    this.databse.save(user)
  }

  this.deleteUser = function (user) {
    this.databse.delete(user)
  }
}