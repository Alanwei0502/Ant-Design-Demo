export const setStorage = (key: string, value: any, isLocalStorage: boolean = true) => {
  const saveValue = typeof value === 'object'
    ? JSON.stringify(value)
    : value;

  isLocalStorage
    ? localStorage.setItem(key, saveValue)
    : sessionStorage.setItem(key, saveValue);
}

export const getStorage = (key: string, isLocalStorage: boolean = true) => {
  const value: any = isLocalStorage
    ? localStorage.getItem(key)
    : sessionStorage.getItem(key);

  return typeof value === 'object'
    ? JSON.parse(value)
    : value;
}