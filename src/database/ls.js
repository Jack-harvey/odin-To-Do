export function create(storeName) {
  localStorage.setItem(storeName, JSON.stringify([]));
}

export function add(storeName, object) {
  const store = getStore(storeName);
  store.push(object);
  saveToLocalStorage(storeName, store);
}

export function read(storeName, id) {
  const record = getRecord(storeName, id);
  console.log("ls read");
  console.log(record);
}

export function update(storeName, id, newRecord) {
  const store = getStore(storeName);
  const index = getIndex(storeName, id);
  const spread = { ...newRecord };
  spread.id = store[index].id;

  console.log(`old values`);
  console.log(store[index]);
  store[index] = spread;
  console.log(`new values`);
  console.log(store[index]);

  saveToLocalStorage(storeName, store);
}

export function remove(storeName, id) {
  const store = getStore(storeName);
  const index = getIndex(storeName, id);

  store.splice(index, 1);
  console.log("removed entry");

  saveToLocalStorage(storeName, store);
}

const getRecord = function (storeName, id) {
  const store = getStore(storeName);
  let record = store.filter((item) => item.id === id);
  return record;
};

const getStore = function (storeName) {
  let store = JSON.parse(localStorage.getItem(storeName));

  if (!store) {
    create(storeName);
    store = JSON.parse(localStorage.getItem(storeName));
  }

  return store;
};

const getIndex = function (storeName, id) {
  const store = getStore(storeName);
  const index = store.findIndex(function (item, i) {
    return item.id === id;
  });

  return index;
};

const saveToLocalStorage = function (storeName, store) {
  localStorage.setItem(storeName, JSON.stringify(store));
  console.log("saved to local storage");
};
