import '../../tamagui-web.css'

import React, {useEffect, useState} from 'react'
import {useColorScheme} from 'react-native'
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
import {useFonts} from 'expo-font'
import {SplashScreen, Stack} from 'expo-router'
import {Provider} from './Provider'

import {Session} from '@supabase/supabase-js'
import {supabase} from "../utils/supabase";
import Auth from "../components/Auth";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router'

// export const unstable_settings = {
// Ensure that reloading on `/modal` keeps a back button present.
// initialRouteName: '(tabs)',
// }

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [interLoaded, interError] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    })

    useEffect(() => {
        if (interLoaded || interError) {
            // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
            SplashScreen.hideAsync()
        }
    }, [interLoaded, interError])

    if (!interLoaded && !interError) {
        return null
    }

    const colorScheme = useColorScheme()
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])


    return (
        <Provider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                {/*<View>*/}
                {session && session.user ? <RootLayoutNav key={session.user.id}/> : <Auth/>}
                {/*</View>*/}
            </ThemeProvider>
        </Provider>
    )
}

function RootLayoutNav() {

    return (

        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: true, // عرض الرأس
                    // title: 'My Custom Title', // تخصيص العنوان
                    // headerStyle: {
                    //     backgroundColor: '#340b60', // تخصيص لون الخلفية للرأس
                    // },
                    // headerTintColor: '#fcfcfc', // تخصيص لون النص في الرأس
                    // headerTitleStyle: {
                    //     fontWeight: 'bold', // تخصيص نمط النص في الرأس
                    // },
                    // headerRight: () => (
                    //     <Button
                    //         onPress={() => alert('This is a button!')}> hi</Button>
                    // ), // إضافة زر في الرأس
                    // animation: 'fade', // تخصيص الرسوم المتحركة
                }}
            />

            <Stack.Screen
                name="modal"
                options={{
                    title: 'Tamagui + Expo',
                    presentation: 'modal',
                    animation: 'slide_from_right',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                }}
            />
        </Stack>

    )
}
