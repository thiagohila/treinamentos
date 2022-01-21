import { subscribe, writable } from 'svelte/store';
import { localStore } from '../database/local_store.js'

const initialData = [
    {
        id: 1,
        status: 1,
        name: "Primeiro treino",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        workload: "10",
        activationDate: "2022-01-01",
        deactivationDate: "2022-02-01",
        modules: [
            {
                id: 1,
                status: 1,
                name: "Primeiro modulo",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                classes: [
                    {
                        id: 1,
                        name: "Primeira aula",
                        content:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        id: 2,
                        name: "Segunda aula",
                        content:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
            },
            {
                id: 2,
                status: 0,
                name: "Segundo modulo",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                classes: [
                    {
                        id: 1,
                        name: "Primeira aula",
                        content:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        id: 2,
                        name: "Segunda aula",
                        content:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        id: 3,
                        name: "Terceira aula",
                        content:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
            },
        ],
    }
];
const api = localStore("trainings_storage", initialData);

function createTrainingsStore() {
    const { subscribe, update, set } = writable({ data: [], isLoading: false });

    return {
        subscribe,
        getTrainings: async () => {
            update(state => (state = { ...state, isLoading: true }));

            return api.get().then((result) => {
                update(state => (state = { ...state, data: result }));
            }).catch(() => {
                alert("erro get");
            }).finally(() => update(state => (state = { ...state, isLoading: false })));
        },

        createTraining: async training => {
            update(state => (state = { ...state, isLoading: true }));

            return api.post(training).then((result) => {
                update(state => (state = { ...state, data: [...state.data, result] }));
            }).catch(() => {
                alert("erro post");
            }).finally(() => update(state => (state = { ...state, isLoading: false })));
        },

        updateTraining: async training => {
            update(state => (state = { ...state, isLoading: true }));

            return api.put(training).then((result) => {
                update(state => {
                    const index = state.data.findIndex(obj => obj.id == result.id);
                    const newData = state.data;
                    newData[index] = result;
                    return (state = { ...state, data: newData });
                })
            }).catch(() => {
                alert("erro edit");
            }).finally(() => update(state => (state = { ...state, isLoading: false })));
        },

        deleteTraining: async training => {
            const confirmation = confirm("Tem certeza que deseja remover este treinamento?");
            if (!confirmation) return;

            update(state => (state = { ...state, isLoading: true }));

            return api.delete(training).then((result) => {
                update(state => {
                    const newData = state.data.filter(obj => obj.id != training.id);
                    return (state = { ...state, data: newData });
                })
            }).catch(() => {
                alert("erro edit");
            }).finally(() => update(state => (state = { ...state, isLoading: false })));
        }
    }
}

export const trainingsStore = createTrainingsStore();