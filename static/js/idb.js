const idbinit = () => {
  const noop = async () => null;
  let get = noop,
    set = noop,
    keys = noop,
    __clear__ = noop,
    del = noop;
  if (!indexedDB) {
  } else {
    class WebStore {
      constructor(DataBase = "WebCache", storeName = "KeyStore") {
        this.storeName = storeName;
        this._dbase = new Promise((resolve, reject) => {
          const request = indexedDB.open(DataBase, 1);
          request.onerror = e => (console.log(e), resolve(null));
          request.onsuccess = () => {
            resolve(request.result);
          };
          request.onupgradeneeded = () => {
            request.result.createObjectStore(storeName);
          };
        });
      }
      __IDBAct__(what, cb) {
        return this._dbase
          .then(
            db =>
              new Promise((resolve, reject) => {
                const transaction = db.transaction(this.storeName, what);
                transaction.oncomplete = () => resolve();
                transaction.onabort = transaction.onerror = () => reject();
                cb(transaction.objectStore(this.storeName));
              })
          )
          .catch(e => (console.log(e), null));
      }
    }
    let store;

    const __defaultStore__ = () => (!store ? new WebStore() : store);

    get = (key, store = __defaultStore__()) => {
      let req;
      return store
        .__IDBAct__("readonly", dat => {
          req = dat.get(key);
        })
        .then(() => req.result)
        .catch(e => (console.log(e), null));
    };

    set = (key, val, store = __defaultStore__()) => {
      try {
        return store.__IDBAct__("readwrite", dat => {
          dat.put(val, key);
        });
      } catch (e) {
        return null;
      }
    };

    del = (key, store = __defaultStore__()) => {
      try {
        store.__IDBAct__("readwrite", dat => {
          dat.delete(key);
        });
      } catch (e) {
        return null;
      }
    };

    __clear__ = (store = __defaultStore__()) => {
      try {
        console.warn("clearing Store:", store);
        return store.__IDBAct__("readwrite", dat => {
          dat.clear();
        });
      } catch (e) {
        return e;
      }
    };

    keys = (store = __defaultStore__()) => {
      const keys = [];
      return store
        .__IDBAct__("readonly", store => {
          // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
          // And openKeyCursor isn't supported by Safari.
          (store.openKeyCursor || store.openCursor).call(
            store
          ).onsuccess = function() {
            if (!this.result) {
              return;
            }
            keys.push(this.result.key);
            this.result.continue();
          };
        })
        .then(() => keys)
        .catch(_ => null);
    };
  }
  return { get, set, __clear__, keys, del };
};
export const IDB = idbinit();
