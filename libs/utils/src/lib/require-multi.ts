export function isClass(obj) {
  return !!obj.prototype && !!obj.prototype.constructor.name;
}

export function requireAll(rc) {
  return rc.keys().map(rc);
}

export function requireAllClasses(rc) {
  return rc
    .keys()
    // .filter(filePath => !filePath.includes('base'))
    .flatMap(key => Object.values(rc(key)))
    .filter(isClass);
}
