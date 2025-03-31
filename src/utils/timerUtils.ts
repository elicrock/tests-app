let timerInterval: NodeJS.Timeout | null = null;
let timer: number = 10;

export function startTimer(callback: (formattedTime: string) => void): void {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    timer--;

    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    callback(formattedTime);

    if (timer <= 0) {
      clearTimer();
    }
  }, 1000);
}

export function clearTimer(): void {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
