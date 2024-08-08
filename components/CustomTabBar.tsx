import React from 'react';
import {AnimatePresence, Stack, Text, Theme, XStack, YStack} from 'tamagui';
import MyTabs from "../constants/MyTabs";


const CustomTabBar = ({state, descriptors, navigation}) => {
    return (
        <Theme name="light">
            <Stack alignItems={"center"} mb={"$3"}>
                <XStack justifyContent="space-around" backgroundColor="#fff" paddingVertical={10} borderRadius={20}
                        shadowColor="#000" shadowOffset={{width: 0, height: 2}} shadowOpacity={0.25} shadowRadius={3.84}
                        elevation={5}>
                    {state.routes.map((route, index) => {
                        const {options} = descriptors[route.key];
                        const tab = MyTabs.find(tab => tab.name === route.name);
                        const label = tab ? tab.label : (options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name);
                        const Icon = tab ? tab.icon : null;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <AnimatePresence key={route.key}>
                                <YStack
                                    onPress={onPress}
                                    onLongPress={onLongPress}
                                    borderRadius={20}
                                    paddingHorizontal={20}
                                    paddingVertical={3}
                                    marginHorizontal={5}
                                    alignItems="center"
                                    justifyContent="center"
                                    animation="bouncy"
                                    enterStyle={{opacity: 0, transform: [{scale: 0.9}]}}
                                    exitStyle={{opacity: 0, transform: [{scale: 0.9}]}}
                                    style={{opacity: isFocused ? 1 : 0.7}}
                                >
                                    {Icon && <Icon color={isFocused ? '$color15' : '$color13'} size={20}/>}
                                    <Text color={isFocused ? '$color15' : '$color13'} marginTop={2}
                                          fontSize={14}>{label}</Text>
                                </YStack>
                            </AnimatePresence>
                        );
                    })}
                </XStack>
            </Stack>
        </Theme>
    );
};

export default CustomTabBar;