export const myToken = ({primaryThemeColor,dark}:{
    primaryThemeColor: string | undefined
    dark: boolean
}) => {

    return {
        // Seed Token
        colorPrimary: primaryThemeColor,
        borderRadius: 2,

        // Alias Token
        colorBgContainer: dark ? '#ffffff' : '#f6ffed',
}}