const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing',
  },
  arr: ['a', 'b', 'c'],
};

const obj2 = deepCopy(obj1);
obj2.address.city = 'shanghai';
obj2.arr[0] = 'a1';
console.log(obj1.address.city);
console.log(obj1.arr[0]);

function deepCopy(obj = {}) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let ret;

  if (obj instanceof Array) {
    ret = [];
  } else {
    ret = {};
  }

  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用!
      ret[key] = deepCopy(obj[key]);
    }
  }

  return ret;
}
