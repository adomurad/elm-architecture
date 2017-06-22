const {h} = require("hyperapp");

const layout = (state, actions) =>
        <nav class='navbar navbar-default'>
            <div class='container'>
                <ul class='nav navbar-nav'>
                    <li><a href='/'>Posts</a></li>
                    <li><a href='/register'>Register</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </div>
        </nav>
    ;

const withLayout = (state, actions, html) =>
        <div>
            {layout(state, actions)}
            {html}
        </div>
    ;

module.exports = withLayout;