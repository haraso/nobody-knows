export function createIntervalHandler(
  callback: () => void,
  {
    interval,
    autoRun = true,
    onStart: _onStart,
    onStop: _onStop
  }: {
    interval: number,
    autoRun?: boolean,
    onStop?: () => void,
    onStart?: () => void
  }
) {
  let intervalId: ReturnType<typeof setInterval>;
  function run() {
    if (intervalId) return;
    intervalId = setInterval(callback, interval);
    _onStart?.();
  }

  function stop() {
    if (!intervalId) return;
    clearInterval(intervalId);
    intervalId = undefined!;
    _onStop?.();
  }

  if (autoRun) run();

  function onStart(callback: () => void) {
    _onStart = callback;
    return handler;
  }
  function onStop(callback: () => void) {
    _onStop = callback;
    return handler;
  }
  const handler = {run, stop, onStart, onStop};
  return handler;
}