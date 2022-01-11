import axios from 'axios'

export function getCharactersData(payload) {
    return { type: 'GET_CHARACTERS_DATA', payload }
}

export function setCharactersData(payload) {
    return { type: 'SET_CHARACTERS_DATA', payload }
}