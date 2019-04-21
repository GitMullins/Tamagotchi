import eat from './components/eat';

import '../styles/main.scss';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
};

init();
