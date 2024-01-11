export default class Validator {
  static validateUsername(username) {
    return username.search(/[^\w-]/) === -1 // экв. [^a-zA-Z_-]
      && !/\d{4}/.test(username) // не более 3-х цифр подряд
      && !/^-|^_|^\d/.test(username) // недопустимы символы в начале имени
      && !/-$|_$|\d$/.test(username); // недопустимы символы в конце имени
  }
}
