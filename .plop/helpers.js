/**
 * Funtion to add custom utility helpers to the plop instance.
 * Refer: https://plopjs.com/documentation/#sethelper
 */
module.exports = function utils(plop) {
  /**
   * In-built helpers
   *  
   * camelCase: changeFormatToThis
      snakeCase: change_format_to_this
      dashCase/kebabCase: change-format-to-this
      dotCase: change.format.to.this
      pathCase: change/format/to/this
      properCase/pascalCase: ChangeFormatToThis
      lowerCase: change format to this
      sentenceCase: Change format to this,
      constantCase: CHANGE_FORMAT_TO_THIS
      titleCase: Change Format To This
      pkg: Look up package.json
   */
  plop.setHelper('timestamp', function() {
    const timestamp = new Date();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${monthNames[timestamp.getMonth()]}, ${timestamp.getDate()} ${timestamp.getFullYear()}`;
  });
};
