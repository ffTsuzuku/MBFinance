// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const colors = {
    white: '#FFFFFF',
    gray100: '#7B7B7B',
    blue: '#0AA7FF',
    purple100: '#E2E2FF',
    black500: '#383839'
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme

export { colors }
