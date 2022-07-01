import {
    Grid,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Text,
    Flex
} from '@chakra-ui/react'

import { IoIosArrowDown } from 'react-icons/io'
import AccountCard from './AccountCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'

export default function Dashboard() {
    return (
        <Grid gridTemplateRows={'3.5fr 1fr'} gridRowGap={2}>
            <Grid gridTemplateColumns={'2.5fr 1fr'} p={3}>
                <Grid
                    w={'100%'}
                    h={'100%'}
                    p={'50px'}
                    gridTemplateRows='1fr 1fr 1fr 5fr'>
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
                                rightIcon={<IoIosArrowDown />}>
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
                        <Heading>FICO Score 850</Heading>
                    </Grid>
                    <Flex p={3} shadow='dark-lg' borderRadius={7}></Flex>
                </Grid>
            </Grid>
            <Flex maxW={'100%'} overflowX={'hidden'}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'>
                    <SwiperSlide>
                        <AccountCard />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Flex>
        </Grid>
    )
}
