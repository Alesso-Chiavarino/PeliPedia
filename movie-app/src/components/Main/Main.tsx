import { Stack, IStackTokens } from '@fluentui/react';
// import { CompoundButton } from '@fluentui/react/lib/Button';
import { MoviesContainer } from '../MoviesContainer/MoviesContainer';

export const Main = () => {

    const stackTokens: IStackTokens = { childrenGap: 40 };

    return (
        <main>
            <Stack horizontal tokens={stackTokens}>
                <MoviesContainer />
            </Stack>
        </main>
    )
}