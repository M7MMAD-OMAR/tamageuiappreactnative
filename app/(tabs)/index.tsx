import {ExternalLink} from '@tamagui/lucide-icons'
import {Anchor, H2, Paragraph, SizableText, XStack, YStack} from 'tamagui'
import {ToastControl} from 'app/CurrentToast'

export default function TabOneScreen() {
    return (
        <YStack f={1} ai="center" gap="$8" px="$10" pt="$5">
            <H2>Muhmad Omar Haj Hmdo </H2>

            <ToastControl/>

            <SizableText size="$3">SizableText</SizableText>
            <XStack gap="$2">
                <SizableText theme="alt1" size="$3">
                    alt1
                </SizableText>
                <SizableText theme="alt2" size="$3">
                    alt2
                </SizableText>
            </XStack>
            <Paragraph size="$2" fontWeight="800">
                Paragraph
            </Paragraph>
        </YStack>
    )
}
