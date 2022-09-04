import { Grid, Flex, Text, useColorModeValue } from '@chakra-ui/react'

import { TiArrowSortedUp } from 'react-icons/ti'

import { colors, shadows } from '../theme'
export default function AccountOverView() {
    const containerColor = useColorModeValue(colors.blue, colors.black100)
    const containerTextColor = useColorModeValue(colors.white, colors.purple100)
    return (
        <Grid gridRowGap={3}>
            <Flex
                shadow={shadows.base}
                borderRadius={5}
                width={'200px'}
                color={containerTextColor}
                bgColor={containerColor}
                p={3}
                alignItems={'center'}
            >
                <Text fontWeight={'bold'}>Net Worth: $450,000</Text>
                <TiArrowSortedUp fill={colors.blue100} fontSize={'20px'} />
            </Flex>

            <Flex
                shadow={shadows.base}
                borderRadius={5}
                width={'120px'}
                color={containerTextColor}
                bgColor={containerColor}
                p={3}
                alignItems={'center'}
            >
                <Text fontWeight={'bold'}>FICO: 800</Text>
                <TiArrowSortedUp fill={colors.red100} fontSize={'20px'} />
            </Flex>
        </Grid>
    )
}

/* Container */
