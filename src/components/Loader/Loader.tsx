import { Spinner, ISpinnerStyles } from '@fluentui/react/lib/Spinner';

export const Loader = () => {

    const spinnerStyles: Partial<ISpinnerStyles> = {
        circle: {
            width: '60px',
            height: '60px',
        }
    }

    return <Spinner styles={spinnerStyles} />
}