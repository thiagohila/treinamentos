export const localStore = (key, initial) => {
  const toString = (value) => JSON.stringify(value, null, 2);
  const toObj = JSON.parse;

  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, toString(initial));
  }

  return {
    get: () => {
      // Simulador de api call
      const data = toObj(localStorage.getItem(key));
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data)
        }, 1000);
      });
    },
    post: (newValue) => {
      // Simulador de api call
      const oldData = toObj(localStorage.getItem(key));
      newValue.id = oldData.length + 1;
      newValue.modules = [{id:1}];
      const newData = [...oldData, newValue]

      localStorage.setItem(key, toString(newData));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(newValue)
        }, 1000);
      });
    },
    put: (newValue) => {
      // Simulador de api call
      const oldData = toObj(localStorage.getItem(key));
      const index = oldData.findIndex(obj => obj.id == newValue.id);
      const newData = oldData;
      newData[index] = newValue;

      localStorage.setItem(key, toString(newData));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(newValue)
        }, 1000);
      });
    },
    delete: (value) => {
      // Simulador de api call
      const oldData = toObj(localStorage.getItem(key));
      const newData = oldData.filter(obj => obj.id != value.id);

      localStorage.setItem(key, toString(newData));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000);
      });
    }
  };
};