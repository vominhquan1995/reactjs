import * as moment from 'moment';

export function formatDateList(date) {
  return moment(date).format('DD/MM/YYYY');
}
