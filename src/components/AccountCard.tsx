import { Grid, Text, useColorModeValue } from '@chakra-ui/react'

interface AccountCardProps {
    width?: string | number
    height?: string | number
}
export default function AccountCard({ height, width }: AccountCardProps) {
    const shadow = useColorModeValue('lg', 'dark-lg')
    return (
        <Grid
            p={3}
            shadow={shadow}
            borderWidth={0.3}
            w={width ?? '100%'}
            h={height ?? '100%'}
            borderRadius={5}
            gridTemplateRows={'1fr 1fr 1fr'}
        >
            <Text>Visa</Text>
            <Text>08330</Text>
            <Text>$130.00</Text>
        </Grid>
    )
}
