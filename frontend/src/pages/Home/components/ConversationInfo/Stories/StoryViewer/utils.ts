export const resetAndStartTimer = (
  timerRef: React.MutableRefObject<number | undefined>,
  updateStoryIndex: () => void,
  duration: number,
  cleanupFunction: (timer: number | undefined) => void,
) => {
  cleanupFunction(timerRef.current);
  timerRef.current = window.setTimeout(() => {
    updateStoryIndex();
  }, duration);
};
