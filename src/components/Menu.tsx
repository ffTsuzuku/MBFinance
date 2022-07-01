import { Flex, Grid, Icon } from '@chakra-ui/react'

import { CgProfile } from 'react-icons/cg'
import { AiFillHome } from 'react-icons/ai'

export default function Menu() {
    return (
        <Grid
            pt={10}
            w={'100%'}
            h={'100%'}
            shadow={'dark-lg'}
            justifyContent={'center'}
            gridTemplateRows={'repeat(2, 50px)'}
            gridRowGap={5}>
            <Icon
                as={CgProfile}
                w={10}
                h={10}
                cursor={'pointer'}
                color={'green.600'}
                _hover={{ color: 'green.300' }}
            />
            <Icon
                as={AiFillHome}
                w={10}
                h={10}
                cursor={'pointer'}
                color={'green.600'}
                _hover={{ color: 'green.300' }}
            />
        </Grid>
    )
}
