const { h, app, Router } = require("hyperapp");

const routes = require("./views/routes");

//PLUGINS
const routeLinker = require("./plugins/routeLinker");
const stateSaver = require("./plugins/stateSaver");

//ACTIONS
const testActions = require("./actions/testActions");

const state = {
    type: "panel panel-body panel-primary"
}

app({
    state: state,
    view: routes,
    actions: {
        test: testActions 
    },
    mixins: [Router, routeLinker, stateSaver]
});
