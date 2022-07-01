import { Grid, useBreakpointValue } from '@chakra-ui/react'

import Dashboard from './components/Dashboard'
import Menu from './components/Menu'

function App() {
    const menuWidth = useBreakpointValue({ base: '60px' })

    return (
        <Grid gridTemplateColumns={`${menuWidth} 1fr`} h={'100vh'}>
            <Menu />
            <Dashboard />
        </Grid>
    )
}

export default App
