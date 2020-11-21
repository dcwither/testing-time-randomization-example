export function today() {
  return new Date().toDateString();
}

export function isToday(date) {
  return today() === date.toDateString();
}



export function isInPast(date) {
  return new Date() >= date;
}