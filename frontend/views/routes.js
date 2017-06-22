const {h} = require("hyperapp");

const withLayout = require("./layout");
const mainPage = require("./mainPage");

const route = function(viewFactory) {
    return (state, actions) => withLayout(state, actions, viewFactory(state, actions));
};

module.exports = [
    ['/', route(mainPage)],
    ['/register', route(() => <div>register</div>)],
    ['*', route(() => <h1>not found</h1>)]
];