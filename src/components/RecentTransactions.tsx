import {
    Flex,
    Grid,
    Heading,
    Text,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'

import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi'

export default function RecentTransactions() {
    const TransactionsJSX = []
    for (let i = 0; i < 20; i++) {
        TransactionsJSX.push(
            <Flex
                justifyContent={'space-between'}
                shadow='2xl'
                w='100%'
                my={'10px'}
                p={3}
                borderRadius={'5px'}
                borderWidth='.4px'
            >
                <Text>08633</Text>
                <Text>$30.00</Text>
            </Flex>
        )
    }
    return (
        <Grid
            gridTemplateRows={'1fr 6fr .5fr'}
            h={'650px'}
            overflowY={'hidden'}
            p={'50px'}
        >
            <Flex justifyContent={'space-between'}>
                <Heading>Recent Transactions</Heading>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem command='⌘T'>New Tab</MenuItem>
                        <MenuItem command='⌘N'>New Window</MenuItem>
                        <MenuItem command='⌘⇧N'>Open Closed Tab</MenuItem>
                        <MenuItem command='⌘O'>Open File...</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex flexWrap={'wrap'}>{TransactionsJSX}</Flex>
        </Grid>
    )
}
