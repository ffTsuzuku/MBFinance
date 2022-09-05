import { Box, Button, Grid, Select, Text } from '@chakra-ui/react'
import { colors, shadows } from '../theme'

import ExpenseChart from './ExpenseChart'

export default function AccountDetails() {
    const MonthsJSX = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ].map((month) => <option key={month}>{month}</option>)
    return (
        <Grid p={5} gridRowGap={5}>
            <Text fontWeight={'bold'} fontSize={'20px'}>
                0629 - Checking Account
            </Text>
            <Text fontWeight={'bold'} fontSize={'20px'}>
                Balance: 600.00
            </Text>
            <Grid gridTemplateColumns={'3fr 1fr'} gridColumnGap={3}>
                <Select
                    placeholder='Filter By Month'
                    bgColor={colors.green500}
                    color={colors.white}
                    fontWeight={'extrabold  '}
                >
                    {MonthsJSX}
                </Select>
                <Button
                    variant={'solid'}
                    bgColor={colors.green500}
                    color={colors.white}
                >
                    Filter
                </Button>
            </Grid>
            <Box borderRadius={3} shadow={shadows.base} p={3}>
                <ExpenseChart />
            </Box>
        </Grid>
    )
}
