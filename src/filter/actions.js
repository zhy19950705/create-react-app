import { SET_FILTER } from './actionTypes';

export const setFilter = filterTypes => ({
    type: SET_FILTER,
    filter: filterTypes
})