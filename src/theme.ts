// theme.ts
import { mode } from '@chakra-ui/theme-tools'
// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const styles = {
    global: (props) => ({
        body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('gray.100', '#383839')(props)
        }
    })
}

const colors = {
    white: '#FFFFFF',
    red100: '#FF5959',
    gray100: '#7B7B7B',
    blue100: '#64ffff',
    blue: '#0AA7FF',
    purple100: '#E2E2FF',
    black100: '#636366',
    black500: '#383839',
    green500: '#54989C'
}

const shadows = {
    base: '0px 4px 4px rgba(0, 0, 0, 0.25);'
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme

export { colors, shadows }
