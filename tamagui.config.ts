import {config as configBase} from '@tamagui/config/v3'
import {createTamagui} from 'tamagui'
import {tokens} from "@tamagui/themes";
import * as themes from './theme-output'


const customConfig = {
    ...configBase,
    themes: {
        ...configBase.themes,
        light: {
            ...configBase.themes.light,
            background: '#f8f8f8',
            backgroundHover: tokens.color.red2Light,
            backgroundPress: tokens.color.red4Light,
            backgroundFocus: tokens.color.red5Light,
            borderColor: tokens.color.red4Light,
            borderColorHover: tokens.color.red6Light,
            borderColorPress: tokens.color.red12Light,
            borderColorFocus: tokens.color.red11Light,
            color: tokens.color.gray10Light,
            colorHover: tokens.color.red9Light,
            colorPress: tokens.color.red8Light,
            colorFocus: tokens.color.red8Light,
            shadowColor: tokens.color.red4Light,
            shadowColorHover: tokens.color.red6Light,
            shadowColorPress: tokens.color.red8Light,
            shadowColorFocus: tokens.color.red8Light,
            groupPrimary: 'hsl(272, 66.0%, 16.0%)', // Primary for group
            groupSecondary: 'hsl(273, 61.0%, 81.7%)', // Secondary for group
            selectorPrimary: 'hsl(114,68%,36%)', // Primary for selector
            selectorSecondary: 'hsl(71,61%,82%)', // Secondary for selector
        },
        dark: {
            ...configBase.themes.dark,
            background: '#121212',
            backgroundHover: tokens.color.red2Dark,
            backgroundPress: tokens.color.red4Dark,
            backgroundFocus: tokens.color.red5Dark,
            borderColor: tokens.color.red4Dark,
            borderColorHover: tokens.color.red6Dark,
            borderColorPress: tokens.color.red12Dark,
            borderColorFocus: tokens.color.red11Dark,
            color: tokens.color.gray11Dark,
            colorHover: tokens.color.red9Dark,
            colorPress: tokens.color.red8Dark,
            colorFocus: tokens.color.red8Dark,
            shadowColor: tokens.color.red4Dark,
            shadowColorHover: tokens.color.red6Dark,
            shadowColorPress: tokens.color.red8Dark,
            shadowColorFocus: tokens.color.red8Dark,
            groupPrimary: 'hsl(294,91%,43%)', // Primary for group
            groupSecondary: 'hsl(273, 61.0%, 81.7%)', // Secondary for group
            selectorPrimary: 'hsl(342,68%,36%)', // Primary for selector
            selectorSecondary: 'hsl(71,61%,82%)', // Secondary for selector
        },
    },

};

const config = createTamagui({
    ...configBase,
    tokens,
    themes,
})
export default config

export type Conf = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {
    }
}


export const toastTheme = "purple";
