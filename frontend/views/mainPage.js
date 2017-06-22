const {h} = require("hyperapp");

module.exports = (state, actions) => 
    <div class={state.type}>test
        <button onclick={actions.test.do}>button</button>
        <a href="/register" route-link="true">test link</a>
    </div>
    ;
