import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    data() {
        return {};
    },
    state: {
        tasks: [{
            text: 'Выполнить задание на vue',
            id: 1,
            status: true,
        }],
    },
    mutations: {
        addTask(state, task) {
            let max = 0;

            state.tasks.forEach((elem) => {
                if (elem.id >= max) {
                    max = elem.id + 1;
                }
            })

            state.tasks.push(
                {
                    id: max,
                    text: task,
                    status: false,
                }
            )
        },
        removeTask(state, id) {
            state.tasks = state.tasks.filter((elem) => elem.id !== id)
        },
        changeTask(state, id) {
            console.log('id', id);
            const currentTask = state.tasks.find((elem) => elem.id == id);
            console.log('currentTask', currentTask)
            const index = state.tasks.indexOf(currentTask);
            console.log('index', index)
            const currentElem = state.tasks[index];
            console.log('currentElem', currentElem)
            currentElem.status = !currentElem.status;
        }


    },
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    },
    actions: {
        addTaskAction(context, task) {
            context.commit('addTask', task);
        },
        removeTaskAction(context, id) {
            if (confirm('Вы точно хотите?'))
                context.commit('removeTask', id);
        },
        changeTaskAction(context, id) {
            context.commit('changeTask', id);
        },

    },
});