import intersection from './intersection.js';
import request from './request';

/**
 * Displays results as links to projects' homepage
 *
 * @param {Array} projects
 */
const insertResult = (projects) => {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        document.getElementById('wrapper').removeChild(resultDiv);
    }

    const wrapper = document.createElement("div");
    wrapper.setAttribute('id', 'result');

    if(!projects.length){
        let span = document.createElement('span');
        span.innerText = 'No results';
        wrapper.appendChild(span);
    }

    projects.forEach(project => {
        let a = document.createElement('a');
        a.href = project.html_url;
        a.innerHTML = project.name;
        a.setAttribute('class', 'sg-box sg-link sg-link--gray sg-link--small sg-link--emphasised');
        a.setAttribute('target', '_blank');
        wrapper.appendChild(a);
    });
    document.getElementById('wrapper').appendChild(wrapper);
};

/**
 * Adds new input field for the next username
 */
const insertInput = () => {
    const input = document.createElement('input');
    input.setAttribute('class', 'sg-input sg-input--spaced-bottom sg-input--full-width');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Username');
    document.getElementById('users-inputs').appendChild(input);
};

/**
 * Gets and processes data
 *
 * @param {Array.<String>} users
 */
const loadData = (users) => {
    const response = request(users);
    response.then((starredProjects) => {
        insertResult(intersection(starredProjects));
    });
};

export { loadData, insertInput };