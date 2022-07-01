import {
    Grid,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Text,
    Flex,
    Stat,
    StatLabel,
    StatHelpText,
    StatArrow
} from '@chakra-ui/react'

import { Doughnut } from 'react-chartjs-2'

import { IoIosArrowDown } from 'react-icons/io'
import AccountCard from './AccountCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import RecentTransactions from './RecentTransactions'
import { Mousewheel, Scrollbar } from 'swiper'
import FinanceChart from './FinanceChart'

export default function Dashboard() {
    const AccountJSX = []
    for (let i = 0; i < 10; i++) {
        AccountJSX.push(
            <SwiperSlide>
                <AccountCard width={'300px'} />
            </SwiperSlide>
        )
    }
    return (
        <Grid gridTemplateRows={'3.5fr 1fr'} gridRowGap={2}>
            <Grid gridTemplateColumns={'2.5fr 1fr'} p={3}>
                <Grid
                    w={'100%'}
                    h={'100%'}
                    p={'50px'}
                    gridTemplateRows='.5fr .5fr .5fr 5fr'
                >
                    <Heading w={'100%'} color={'green.400'}>
                        Hello Deep!
                    </Heading>
                    <Heading>Overview</Heading>
                    <Grid gridTemplateColumns={'1fr 1fr'}>
                        <Menu>
                            <MenuButton
                                textAlign={'left'}
                                w={'50%'}
                                shadow={'xl'}
                                as={Button}
                                rightIcon={<IoIosArrowDown />}
                            >
                                <Text ml={3}>08933 - Visa</Text>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Stat ml={'auto'}>
                            <StatHelpText>
                                <StatArrow type='increase' />
                                23.36%
                            </StatHelpText>
                            <StatLabel fontSize={'30px'}>
                                FICO Score: 850
                            </StatLabel>
                        </Stat>
                    </Grid>
                    <Flex p={3} shadow='dark-lg' borderRadius={7}>
                        <FinanceChart />
                    </Flex>
                </Grid>
                <RecentTransactions />
            </Grid>
            <Flex
                maxW={'100%'}
                overflowX={'hidden'}
                p={'0px 0px 10px 40px'}
                mb={10}
                flexWrap='wrap'
            >
                <Text w={'100%'} m={0} p={0} fontSize={'2xl'} h={'20px'}>
                    Account
                </Text>
                <Swiper
                    className='mySwiper'
                    slidesPerView={6}
                    spaceBetween={300}
                    loop={false}
                    mousewheel={true}
                    scrollbar={{
                        hide: false
                    }}
                    modules={[Mousewheel, Scrollbar]}
                >
                    {AccountJSX}
                </Swiper>
            </Flex>
        </Grid>
    )
}
