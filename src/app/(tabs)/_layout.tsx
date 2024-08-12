import {Tabs} from 'expo-router'
import CustomTabBar from "@components/CustomTabBar";
import React from "react";


// MyTabs
export default function TabLayout() {

    return (
        <Tabs tabBar={(props) => <CustomTabBar {...props} />}/>
    )
}
