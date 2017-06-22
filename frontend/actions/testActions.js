module.exports = {
    
    do(state, actions, evt) {
            return Object.assign(state, { type: "panel panel-body panel-warning" });
        }
};