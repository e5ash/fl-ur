let ERRORS = {
  10: 'Ошибка, ### не введен.',
  20: 'Ошибка, почта введена не верно.',
  30: 'Ошибка, телефон введен не верно.',
  40: 'Надежный',
  41: 'Не надежный',
  42: 'Нормальный',
}

export function getError(value, field) {
  let error = ERRORS[value];
  if (field) {
    error = String(error).replace('###', field.toLowerCase());
  }
  console.log(error);
  return error;
}
