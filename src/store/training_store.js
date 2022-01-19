import { subscribe, writable } from 'svelte/store';

export const modal = writable(null);
export const windowStyle = writable({});

export const trainings = writable(
    [
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
                    name: "Segundo treino",
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
    ]
);