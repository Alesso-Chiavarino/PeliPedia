import { setErrorAction, clearErrorAction } from "../features/errors/errorSlice";
import { useAppDispatch } from "./store";

import { type ErrorState } from "../types/Error";

export const useErrorsActions = () => {

    const dispatch = useAppDispatch()

    const setError = (error: ErrorState) => {
        dispatch(setErrorAction(error.message))
    }

    const clearError = () => {
        dispatch(clearErrorAction())
    }

    return {
        setError,
        clearError
    }

}