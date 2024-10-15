import moment from "moment";

export function daysFromTo(start: number, end: number) {
  return moment(start).diff(moment(end), 'days');
}

export function startOfToday() {
  return moment().startOf('day').toDate().getTime();
}

export function startOfADay(timestamp: number) {
  return moment(timestamp).startOf('day').toDate().getTime();
}

export function formatDate(timestamp: number) {
  return moment(timestamp).format('DD. MM. YYYY');
}

export function formatDelay(delay: number) {

  const delayStr = moment.utc(delay)
    .format('HH[h] mm[m] ss[s]')
    .split(' ')
    .filter((timeStr)=>!timeStr.includes('00'))
    .join(' ');

  if (delayStr === '') return '00s';  

  return delayStr;
}

export function msToSec(ms: number) {
  return (ms / 1000) | 0;
}