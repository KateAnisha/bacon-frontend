import { createContext } from "react"

export default function stateReducer (currentState, action) {
    switch (action.type) {
        case "setTransactions": {
            return {
                ...currentState,
                transactions: action.transactions
            }
        }

        case "setCategories": {
            return {
                ...currentState,
                categories: action.categories
            }
        }

        case "setToken": {
            return {
                ...currentState,
                token: action.token
            }
        }

        case "addTransaction": {
            return {
                ...currentState,
                transactions: [action.data, ...currentState.transactions]
            }
        }

        default:
            return currentState
    }
}

export const stateContext = createContext()