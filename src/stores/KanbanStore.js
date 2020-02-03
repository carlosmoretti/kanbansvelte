import { writable } from 'svelte/store';

export const boardName = writable('Inicial');
export const boards = writable([]);