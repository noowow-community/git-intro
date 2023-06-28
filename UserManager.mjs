export function userManager(user) {
  this.createUser = function (user) {
    this.databse.save(user)
    console.log('Save user', JSON.stringify(user))
  }
}