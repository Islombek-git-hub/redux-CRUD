import { COUNTER } from "../constants/todos"

export const inc = () => ({type: COUNTER.INC})

export const dec = () => ({type: COUNTER.DEC})