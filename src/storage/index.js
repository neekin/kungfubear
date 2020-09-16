const STORAGE_KEY = "wxx";
Array.prototype.clone = function() {
  let a = [];
  for (let i = 0, l = this.length; i < l; i++) {
    a.push(this[i]);
  }
  return a;
};
export default {
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;

      this.setItem(module_name, val);
    } else {
      let val = this.getStorage();
      val[key] = value;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
      else return {};
    }
    return this.getStorage()[key];
  },
  getStorage() {
    let result = window.localStorage.getItem(STORAGE_KEY) || "{}";

    return JSON.parse(result);
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (val[module_name]) delete val[module_name][key];
    } else {
      delete val[key];
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
};
