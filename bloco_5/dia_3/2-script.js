function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let list = document.createElement('li');

    if (day === 24 | day === 31) {
      list.className = 'day holiday';
      list.innerHTML = day;
      daysList.appendChild(list);
    } else if (day === 4 | day === 11 | day === 18) {
      list.className = 'day friday';
      list.innerHTML = day;
      daysList.appendChild(list);
    } else if (day === 25) {
      list.className = 'day holiday friday';
      list.innerHTML = day;
      daysList.appendChild(list);
    } else {
      list.innerHTML = day;
      list.className = 'day';
      daysList.appendChild(list);
    }
  };
};
createDaysOfTheMonth();
