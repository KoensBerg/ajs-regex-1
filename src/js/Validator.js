export default class Validator {
  static validateUsername(username) {
    return username.search(/[^\w-]/) === -1
      && !/\d{4}/.test(username)
      && !/^-|^_|^\d/.test(username)
      && !/-$|_$|\d$/.test(username);
  }
}
