import { Grid, Flex, Text, useColorModeValue } from '@chakra-ui/react'

import { FaCcVisa } from 'react-icons/fa'

import { colors } from '../theme'
export default function AccountCard() {
    const bgColor = useColorModeValue(colors.blue, colors.black100)
    //const accountIconColor = useColorModeValue(colors.white, colors.black100)
    return (
        <Grid
            gridRowGap={20}
            alignContent={'space-between'}
            backgroundColor={bgColor}
            p={4}
            borderRadius={5}
            color={colors.white}
        >
            <Flex
                justifyContent={'space-between'}
                w={'100%'}
                alignItems={'center'}
            >
                <Text fontWeight={'bold'}>6309</Text>
                <FaCcVisa fontSize={'30px'} />
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Text fontWeight={'bold'}>Checking Account</Text>
                <Text fontWeight={'bold'}>$500.00</Text>
            </Flex>
        </Grid>
    )
}
