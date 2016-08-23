function UserModel() {
    this.firstname = 'Bob';
    this.lastname = 'Smith';
    this.toString = function () {
      return this.firstname + ' ' + this.lastname;
    }
}

export default UserModel;
