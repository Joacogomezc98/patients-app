import { AddIcon } from '../icons/addIcon';
import { Arrow } from '../icons/arrow';
import { CalendarIcon } from '../icons/calendar';
import { CloseIcon } from '../icons/close';

export const getColorFromInitials = (initials: string) => {
  const colors = [
    '#6dbc70',
    '#ff6b6b',
    '#4d90fe',
    '#ffb74d',
    '#ab47bc',
    '#26a69a',
    '#ef5350',
  ];
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

export const getInitials = (str: string) => {
  const initials = str
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase();
  //max 2 initials
  return initials.length > 2 ? initials.slice(0, 2) : initials;
};

export const getIcons = (name: string) => {
  const icons: Map<string, JSX.Element> = new Map();

  //Arrows
  icons.set('arrowDown', <Arrow degree={270} />);
  icons.set('arrowDownBlue', <Arrow degree={270} color="#007bff" />);

  icons.set('arrowUp', <Arrow degree={90} />);
  icons.set('arrowUpBlue', <Arrow degree={90} color="#007bff" />);

  icons.set('arrowLeft', <Arrow degree={0} />);

  icons.set('arrowRight', <Arrow degree={180} />);

  //Add
  icons.set('add', <AddIcon />);

  //Close
  icons.set('close', <CloseIcon />);

  //Calendar
  icons.set('calendar', <CalendarIcon />);
  return icons.get(name);
};
