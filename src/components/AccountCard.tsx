import { Grid, Text } from '@chakra-ui/react'

export default function AccountCard() {
    return (
        <Grid
            marginLeft={3}
            marginRight={3}
            p={3}
            shadow='2xl'
            borderWidth={0.3}
            w={'300px'}
            h={'100%'}
            borderRadius={5}
            gridTemplateRows={'1fr 1fr 1fr'}>
            <Text>Visa</Text>
            <Text>08330</Text>
            <Text>$130.00</Text>
        </Grid>
    )
}
