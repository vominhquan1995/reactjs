import * as moment from 'moment';

export function formatDateDetail(date) {
    return moment(date).format('DD/MM/YYYY HH:mm');
}
