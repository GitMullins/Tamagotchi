import util from '../helpers/util';

const foods = [];

const domStringBuilder = () => {
  let domString = '';
  domString += '<button id="healthyFood">Eat good</button>';
  domString += '<button id="unhealthyFood">Eat bad</button>';
  document.getElementById('healthyFood').addEventListener('click', foods);
  foods.forEach(() => {
    const health = 100;
    domString += `<h3>${health}</h3>`;
    // domString += `<div class="container"> `
    util.printToDom('eat', domString);
  });
};
export default { domStringBuilder };
