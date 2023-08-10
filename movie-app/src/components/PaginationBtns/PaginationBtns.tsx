import { Stack, ActionButton } from '@fluentui/react';

interface PaginationBtnsProps {
    prevPage: () => void;
    nextPage: () => void;
}

export const PaginationBtns = ({ prevPage, nextPage }: PaginationBtnsProps) => {
    return (
        <div>
            <Stack
                horizontal
                horizontalAlign="space-between"
            // tokens={{ childrenGap: 10 }} 
            >
                <ActionButton
                    iconProps={{ iconName: 'DoubleChevronLeftMed' }}
                    ariaLabel="Anterior"
                    onClick={prevPage}
                    style={{ color: 'white' }}
                >
                    Anterior
                </ActionButton>
                <ActionButton
                    iconProps={{ iconName: 'DoubleChevronLeftMedMirrored' }}
                    ariaLabel="Siguiente"
                    onClick={nextPage}
                    style={{ color: 'white' }}
                >
                    Siguiente
                </ActionButton>
            </Stack>
        </div>
    )
}