import React, {memo} from 'react';
import {AnimatePresence, Paragraph, Stack, useMedia, useTheme, XStack, YStack} from 'tamagui';
import MyTabs from "../constants/MyTabs";

const CustomTabBar = ({state, descriptors, navigation}) => {
    const theme = useTheme();
    const backgroundFocusColor = theme.groupSecondary.val;
    const backgroundColor = theme.background.val;
    const textColor = theme.color11.val;
    const textFocusColor = theme.groupSecondary.val;
    const media = useMedia();

    return (
        <Stack alignItems="center" mb="$3">
            <XStack
                jc="space-around"
                bg={backgroundColor}
                py={media.sm ? 1 : 4}
                br={12}
                shof={{width: 0, height: 2}}
                shop={0.25}
                shar={4}
                elevation={5}>

                {state.routes.map((route, index) => {
                    const {options} = descriptors[route.key];
                    const tab = MyTabs.find(tab => tab.name === route.name);
                    const label = tab?.label || options.tabBarLabel || options.title || route.name;
                    const Icon = tab?.icon;
                    const isFocused = state.index === index;

                    const handlePress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const handleLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <AnimatePresence key={route.key}>
                            <YStack
                                onPress={handlePress}
                                onLongPress={handleLongPress}
                                br={12}
                                px={media.sm ? 10 : 20}
                                mx={5}
                                mt={6}
                                ai="center"
                                jc="center"
                                animation="superBouncy"
                                enterStyle={{opacity: 0, transform: [{scale: 0.9}]}}
                                exitStyle={{opacity: 0, transform: [{scale: 0.9}]}}
                                style={{transition: 'color 0.3s ease-in-out'}}
                                cur={"pointer"}
                                o={isFocused ? 1 : 0.7}
                            >
                                {Icon && <Icon col={isFocused ? textFocusColor : textColor} fontSize="$2"/>}
                                <Paragraph col={isFocused ? textFocusColor : textColor}
                                           fos="$2">
                                    {label}
                                </Paragraph>
                            </YStack>
                        </AnimatePresence>
                    );
                })}
            </XStack>
        </Stack>
    );
};

export default memo(CustomTabBar);