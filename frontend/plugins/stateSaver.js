module.exports = function stateSaver() {

    const stateName = "app-state";

    const stateRepository = {
        save(state) {
            localStorage.setItem(stateName, JSON.stringify(state));
        },
        load() {
            return JSON.parse(localStorage.getItem(stateName));
        }
    };

    return {
        state: stateRepository.load(),
        events: {
            render(state, actions, view) {
                stateRepository.save(state);
                return view;
            }
        }
    };
};