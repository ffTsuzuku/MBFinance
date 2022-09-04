import { useState } from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    Flex,
    Text,
    useColorMode,
    useColorModeValue,
    DrawerFooter
} from '@chakra-ui/react'
import { colors } from '../theme'
import { HiOutlineMenu } from 'react-icons/hi'

export default function Navbar() {
    const { toggleColorMode } = useColorMode()
    const [isOpen, setIsOpen] = useState(false)

    const fontColor = useColorModeValue(colors.gray100, colors.purple100)
    const menuFontColor = useColorModeValue(colors.blue, colors.purple100)
    const menuBgColor = useColorModeValue(colors.white, colors.black500)
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} p={5}>
            <Text fontWeight={'extrabold'} color={fontColor}>
                MBFinance
            </Text>
            <HiOutlineMenu
                onClick={() => setIsOpen(true)}
                color={fontColor}
                fontSize={'25px'}
                cursor={'pointer'}
            />
            <Drawer
                placement={'right'}
                onClose={() => setIsOpen(false)}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent
                    color={menuFontColor}
                    borderRadius={'10px 0px 0px 10px'}
                    fontWeight={'bold'}
                    bgColor={menuBgColor}
                >
                    <DrawerBody
                        mt={50}
                        justifyContent={'center'}
                        textAlign={'center'}
                    >
                        <Text my={3}>Some contents...</Text>
                        <Text my={3}>Some contents...</Text>
                        <Text my={3} onClick={toggleColorMode}>
                            Toggle Theme
                        </Text>
                    </DrawerBody>
                    <DrawerFooter
                        textAlign={'center'}
                        justifyContent={'center'}
                    >
                        <Text>Logout</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}
