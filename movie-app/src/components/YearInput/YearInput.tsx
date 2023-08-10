import { TextField } from '@fluentui/react'
import { type HandleTextField } from '../../types/Form';
import './YearInput.scss'

interface YearInputProps {
    handleTextField: (e: HandleTextField) => void;
}

export const YearInput = ({ handleTextField }: YearInputProps) => {
    return (
        <TextField className='year-input' label="Año de la película " onChange={handleTextField} />
    )
}
