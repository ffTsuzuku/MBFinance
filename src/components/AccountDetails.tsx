import { Grid, Select, Text } from '@chakra-ui/react'

export default function AccountDetails() {
    return (
        <Grid p={5}>
            <Text fontWeight={'bold'} fontSize={'20px'}>
                0629 - Checking Account
            </Text>
            <Text fontWeight={'bold'} fontSize={'20px'}>
                Balance: 600.00
            </Text>
            const MonthsJSX = ['January', 'Febuary', 'March', 'April', 'May',
            'June', 'July', 'August' ];
            <Select placeholder='Filter By Month'>
                <option value='option2'>Febuary</option>
                <option value='option3'>March</option>
                <option value='option3'>April</option>
                <option value='option3'>May</option>
            </Select>
        </Grid>
    )
}
