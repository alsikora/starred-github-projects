const URL = 'https://api.github.com/users/';

/**
 * Makes a request to the server
 *
 * @param {Array.<String>} users
 * @returns {Promise}
 */
const request = (users) => {
    //@todo: deal with pagination
    const promises = users.map(user => fetch(URL + user + '/starred?page=1&per_page=100'));
    return Promise
        .all(promises)
        .then((responses) => {
            let err = false;
            responses = responses.map(res => {
                if (!res.ok) {
                    err = true;
                }
                return res.json();
            });
            return err ? Promise.reject() : Promise.all(responses);
        })
        .catch(err => console.log(err));
};

export default request;