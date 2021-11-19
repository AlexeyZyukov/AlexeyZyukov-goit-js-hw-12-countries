import { error, info, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function onNoCountry() {
  info({
    title: 'Error',
    text: 'Please check the name ...',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}

export function onOutputInfo() {
  error({
    title: 'Too much found',
    text: 'Please specify request ...',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}
export function onError() {
  alert('There is no data to search');
}
