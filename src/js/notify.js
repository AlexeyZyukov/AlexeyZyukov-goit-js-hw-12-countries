import { error, info, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function onNoCountry() {
  info({
    title: 'Помилка! Σ(‘◉⌓◉’)',
    text: 'Введіть коректно запит ...(Ukraine)',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}

export function onOutputInfo() {
  error({
    title: 'Знайдено забагато збігів Σ(‘◉⌓◉’)',
    text: 'Будь ласка, введіть більш конкретний запит ...(USA)',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}
export function onError() {
  alert('Дані для пошуку країни відсутні ... (；☉_☉)');
}
