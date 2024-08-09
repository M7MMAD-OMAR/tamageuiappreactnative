import {H2, Paragraph, XStack, YStack} from 'tamagui'
import {ToastControl} from 'app/CurrentToast'
import ConfigurationGuideLink from "../../components/app/ConfigurationGuideLink";

export default function TabOneScreen() {
    return (
        <YStack f={1} ai="center" gap="$7" px="$10" pt="$5">
            <H2>ss</H2>

            <ToastControl/>

            <XStack ai="center" jc="center" fw="wrap" gap="$3" pos="absolute" b="$8">
                <Paragraph fos="$5">Add</Paragraph>

                <Paragraph fos="$5" px="$2" py="$1" col="$blue10" bg="$blue5" br="$3">
                    tamagui.config.ts
                </Paragraph>

                <Paragraph fos="$5">to root and follow the</Paragraph>

                <ConfigurationGuideLink bgColor={"$purple5"} hoverBgColor={"$purple6"} pressBgColor={"$purple4"}
                                        textColor={"$purple10"} link={"https://"} text={"Configuration guide"}/>


            </XStack>
        </YStack>
    )
}
