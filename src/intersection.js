/**
 * Finds intersection of users' projects
 *
 * @param {Array} projects - every array's index contains projects from one user
 * @returns {Array} array of objects
 */
const intersection = (projects = []) => {
    if (projects.length < 2 || projects.indexOf(undefined) > -1) {
        return [];
    }
    let intersection = projects[0];

    for (let i = 1, max = projects.length; i < max; i++) {
        let tempIntersection = [];
        intersection.forEach(el => {
            tempIntersection.push(...projects[i].filter(obj => el.id === obj.id));
        });
        intersection = tempIntersection;
    }

    return intersection;
};

export default intersection;