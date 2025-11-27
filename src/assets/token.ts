import {theme} from 'antd';

export const myToken = ({primaryThemeColor}:{
    primaryThemeColor: string | undefined
    // algorithm: Function;
}) => {
    const token = theme.useToken().token;
    console.log(token.colorBgContainer)
    return {
        // Seed Token
        colorPrimary: primaryThemeColor,
        borderRadius: 2,
        algorithm: theme.compactAlgorithm,

        // Alias Token
        colorBgContainer: '#f6ffed',
      
}}