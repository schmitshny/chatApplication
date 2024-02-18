import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from '.';

describe('getFromLocalStorage', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should return the parsed value for a valid key', () => {
    const mockValue = { a: 1 };
    const key = 'testKey';
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockValue));

    const result = getFromLocalStorage(key);
    expect(result).toEqual(mockValue);
  });

  it('should return null for a non-existing key', () => {
    const key = 'nonExistingKey';
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

    const result = getFromLocalStorage(key);
    expect(result).toBeNull();
  });

  it('should return null and log an error for invalid JSON', () => {
    const key = 'invalidJsonKey';
    const consoleSpy = vi.spyOn(console, 'error');
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('invalid json');

    const result = getFromLocalStorage(key);
    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalled();
  });
});

describe('setToLocalStorage', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should save the value to localStorage', () => {
    const key = 'testKey';
    const value = { a: 1 };
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(vi.fn());

    setToLocalStorage(key, value);

    expect(setItemSpy).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should handle exceptions and log an error', () => {
    const key = 'testKey';
    const value = { a: 1 };
    const error = new Error('Test error');
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn());
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw error;
    });

    setToLocalStorage(key, value);

    expect(consoleSpy).toHaveBeenCalledWith(`Error saving value for key "${key}" to localStorage`, error);
  });
});

describe('removeFromLocalStorage', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should call localStorage.removeItem with the correct key', () => {
    const key = 'testKey';
    const removeItemSpy = vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(vi.fn());

    removeFromLocalStorage(key);

    expect(removeItemSpy).toHaveBeenCalledWith(key);
  });
});
