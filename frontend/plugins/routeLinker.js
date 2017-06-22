module.exports = function () {
    return {
        events: {
            loaded: (state, actions) => {
                window.addEventListener('click', function (event) {
                    var element = event.target;
                    if (element.tagName.toLowerCase() === 'a' && element.getAttribute('href') && element.getAttribute("route-link")) {
                        event.preventDefault();
                        actions.router.go(element.pathname);
                    }
                });
            }
        }
    };
};