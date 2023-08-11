import { Stack, ActionButton, IButtonStyles } from '@fluentui/react';
interface PaginationBtnsProps {
    prevPage: () => void;
    nextPage: () => void;
    page: number;
    total_pages: number;
}

export const PaginationBtns = ({ prevPage, nextPage, total_pages, page }: PaginationBtnsProps) => {

    const LeftButtonStyle: IButtonStyles = {
        root: {
            backgroundColor: '#27272A',
            color: 'white',
            border: 'none',
            display: 'flex',
            selectors: {
                ':hover': {
                    backgroundColor: '#626567',
                },
            },
        },
        icon: {
            color: 'white',
        },
        iconHovered: {
            color: 'white',
        },
        label: {
            color: 'white',
        },
    };

    const RightButtonStyle: IButtonStyles = {
        ...LeftButtonStyle,
        flexContainer: {
            flexDirection: 'row-reverse',
        },
    }

    return (
        <div>
            <Stack
                horizontal
                horizontalAlign="space-between"
            >
                <ActionButton
                    iconProps={{ iconName: 'DoubleChevronLeftMed' }}
                    ariaLabel="Anterior"
                    onClick={prevPage}
                    styles={LeftButtonStyle}
                    style={page === 1 ? { backgroundColor: '#131314' } : {}}
                    disabled={page === 1}
                >
                    Anterior
                </ActionButton>
                <ActionButton
                    iconProps={{ iconName: 'DoubleChevronLeftMedMirrored' }}
                    ariaLabel="Siguiente"
                    onClick={nextPage}
                    styles={RightButtonStyle}
                    style={page === total_pages ? { backgroundColor: '#131314' } : {}}
                    disabled={page === total_pages}
                >
                    Siguiente
                </ActionButton>
            </Stack>
        </div>
    )
}