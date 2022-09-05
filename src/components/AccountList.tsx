import {
    Grid,
    Text,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react'
import { colors } from '../theme'
import AccountCard from './AccountCard'

export default function AccountList() {
    const titleFontColor = useColorModeValue(colors.black100, colors.purple100)
    const columnCount = useBreakpointValue({
        base: '1fr',
        md: '.5fr .5fr',
        lg: 'repeat(auto-fill, 320px)'
    })
    return (
        <Grid gridRowGap={5}>
            <Text
                fontWeight={'extrabold'}
                color={titleFontColor}
                fontSize='20px'
            >
                Accounts
            </Text>

            <Grid
                gridTemplateColumns={columnCount}
                gridColumnGap={5}
                gridRowGap={5}
            >
                <AccountCard />
                <AccountCard />
                <AccountCard />
            </Grid>
        </Grid>
    )
}
