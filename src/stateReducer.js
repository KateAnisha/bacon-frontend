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

        case "updateCategories": {
            const index = currentState.categories.findIndex(category => category.id === action.category.id)
            const categories = [...currentState.categories]
            categories[index] = action.category
            return {
                ...currentState,
                categories
            }
        }

        case "updateTransactions": {
            const index = currentState.transactions.findIndex(transaction => transaction.id === action.transaction.id)
            const transactions = [...currentState.transactions]
            transactions[index] = action.transaction
            return {
                ...currentState,
                transactions
            }
        }

        case "setBudget": {
            return {
                ...currentState,
                budget: action.budget
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
        
        case "addCategory": {
            return {
                ...currentState,
                categories: [action.data, ...currentState.categories]
            }
        }

        default:
            return currentState
    }
}

export const stateContext = createContext()