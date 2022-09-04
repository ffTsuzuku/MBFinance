import { Box, Grid, useColorModeValue } from '@chakra-ui/react'

import AccountOverView from './components/AccountOverView'
import Navbar from './components/Navbar'

function App() {
    return (
        <Grid>
            <Navbar />
            <Box p={5}>
                <AccountOverView />
            </Box>
        </Grid>
    )
}

export default App
