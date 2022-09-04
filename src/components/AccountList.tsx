import { Grid, Text, useColorModeValue } from '@chakra-ui/react'
import { colors } from '../theme'
import AccountCard from './AccountCard'

export default function AccountList() {
    const titleFontColor = useColorModeValue(colors.black100, colors.purple100)
    return (
        <Grid gridRowGap={5}>
            <Text
                fontWeight={'extrabold'}
                color={titleFontColor}
                fontSize='20px'
            >
                Accounts
            </Text>

            <AccountCard />
            <AccountCard />
            <AccountCard />
        </Grid>
    )
}
