import {Link, Tabs} from 'expo-router'
import {Button, useTheme} from 'tamagui'
import {Atom, AudioWaveform} from '@tamagui/lucide-icons'

export default function TabLayout() {
    const theme = useTheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.purple10.val,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Tab One 11',
                    tabBarIcon: ({color}) => <Atom color={color}/>,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Button mr="$4" bg="$purple8" color="$purple12">
                                Hello!
                            </Button>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Tab Two 2222',
                    tabBarIcon: ({color}) => <AudioWaveform color={color}/>,
                }}
            />
        </Tabs>
    )
}
