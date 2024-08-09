import {config as configBase} from '@tamagui/config/v3'
import {createTamagui} from 'tamagui'


const customConfig = {
    ...configBase,
    themes: {
        ...configBase.themes,
        light: {
            ...configBase.themes.light,
            groupPrimary: 'hsl(272, 66.0%, 16.0%)', // Primary for group
            groupSecondary: 'hsl(273, 61.0%, 81.7%)', // Secondary for group
            selectorPrimary: 'hsl(114,68%,36%)', // Primary for selector
            selectorSecondary: 'hsl(71,61%,82%)', // Secondary for selector
        },
        dark: {
            ...configBase.themes.dark,
            groupPrimary: 'hsl(294,91%,43%)', // Primary for group
            groupSecondary: 'hsl(273, 61.0%, 81.7%)', // Secondary for group
            selectorPrimary: 'hsl(342,68%,36%)', // Primary for selector
            selectorSecondary: 'hsl(71,61%,82%)', // Secondary for selector
        },
    },
};

export const config = createTamagui(customConfig)

export default config

export type Conf = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {
    }
}
