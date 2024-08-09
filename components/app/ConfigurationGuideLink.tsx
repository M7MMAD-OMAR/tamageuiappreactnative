import {ExternalLink} from '@tamagui/lucide-icons'
import {Anchor, XStack} from 'tamagui'

const ConfigurationGuideLink = ({bgColor, hoverBgColor, pressBgColor, textColor, link, text}) => (
    <XStack
        ai="center"
        gap="$1.5"
        px="$2"
        py="$1"
        br="$3"
        bg={bgColor}
        hoverStyle={{bg: hoverBgColor}}
        pressStyle={{bg: pressBgColor}}
    >
        <Anchor
            href={link}
            textDecorationLine="none"
            col={textColor}
            fos="$5"
        >
            {text}
        </Anchor>
        <ExternalLink size="$1" col={textColor}/>
    </XStack>
);

export default ConfigurationGuideLink;