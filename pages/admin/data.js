import {getAllReservation} from "~/services/api/admin/reservation";
import {getALlConsultation} from "~/services/api/admin/consultation";

let myEvents = [{
  title: 'test', start: '2024-04-26T14:00:00', end: '2024-04-26T15:00:00',
}]

function spanCreator(data) {
  let span = document.createElement('span')
  span.className = 'text-white';
  span.innerHTML = data;
  return span;
}

const tblHeader = [{
  id: 1, title: "id"
}, {
  id: 2, title: "title"
}, {
  id: 3, title: "service"
}, {
  id: 4, title: "start time"
}, {
  id: 5, title: "bring more people"
}, {
  id: 6, title: "end time"
}]
export {spanCreator, tblHeader}


