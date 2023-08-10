import { TextField, ITextFieldStyles } from '@fluentui/react'
import { type HandleTextField } from '../../types/Form';

interface YearInputProps {
    handleTextField: (e: HandleTextField) => void;
}

export const YearInput = ({ handleTextField }: YearInputProps) => {

    const textFieldStyles: Partial<ITextFieldStyles> = {
        root: {
            width: '10%',
        },
        fieldGroup: {
            borderColor: '#0078D4',
            backgroundColor: '#27272A',
            selectors: {
                '::after': {
                    borderColor: '#0078D4',
                },
            },
        },
        field: {
            background: '#27272A',
            color: '#fff',
            '::placeholder': {
                color: '#909497',
            }
        },
        subComponentStyles: {
            label: {
                color: '#0078D4',
            },

        }
    };

    return (
        <TextField styles={textFieldStyles} placeholder='2023' onChange={handleTextField} />
    )
}
