module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement >= 20) {
    return item
  }
  return {
    ...item,
    enhancement: item.enhancement + 1
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
