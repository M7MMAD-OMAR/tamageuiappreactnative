import {config as configBase} from '@tamagui/config/v3'
import {createTamagui} from 'tamagui'


const customConfig = {
    ...configBase,
};

const config = createTamagui(customConfig)

export default config

export type Conf = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {
    }
}


export const toastTheme = "green";
