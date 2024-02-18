export const getFromLocalStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch (error) {
    console.error(`Error parsing value for key "${key}" from localStorage`, error);
    return null;
  }
};

export const setToLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving value for key "${key}" to localStorage`, error);
  }
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
