import { Box, Grid, useColorModeValue } from '@chakra-ui/react'

import AccountOverView from './components/AccountOverView'
import AccountList from './components/AccountList'
import Navbar from './components/Navbar'

function App() {
    return (
        <Grid>
            <Navbar />
            <Grid p={5} gridRowGap={10}>
                <AccountOverView />
                <AccountList />
            </Grid>
        </Grid>
    )
}

export default App
