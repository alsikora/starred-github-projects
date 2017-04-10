import { loadData, insertInput } from './load';

/**
 * Starts application
 */
export default (() => {
    window.onload = () => {
        const form = document.forms['search_github'];
        form.addEventListener("submit", evt => {
            evt.preventDefault();
            const users = [];
            form.querySelectorAll('input').forEach(el => {
                if (el.value) {
                    users.push(el.value);
                }
            });

            loadData(users);
        });

        document.getElementById('add-field').addEventListener('click', insertInput);
    };
})();
