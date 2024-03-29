/* eslint import/prefer-default-export: "off" */
/* eslint security/detect-unsafe-regex: "off" */

export function formatDate(date) {
  const newDate = new Date(date);
  let dd = newDate.getDate();
  let mm = newDate.getMonth() + 1; // January is 0!

  const yyyy = newDate.getFullYear();

  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  const formatedDate = `${dd}/${mm}/${yyyy}`;
  return formatedDate;
}
