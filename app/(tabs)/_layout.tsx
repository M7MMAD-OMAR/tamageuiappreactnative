import {Link, Tabs} from 'expo-router'
import {Button, useTheme} from 'tamagui'
import {Atom, AudioWaveform} from '@tamagui/lucide-icons'
import CustomTabBar from "../../components/CustomTabBar";
import React from "react";

export default function TabLayout() {
    const theme = useTheme()

    return (
        <Tabs tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarActiveTintColor: theme.red10.val,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Tab One',
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
                    title: 'Tab Two',
                    tabBarIcon: ({color}) => <AudioWaveform color={color}/>,
                }}
            />
        </Tabs>
    )
}
