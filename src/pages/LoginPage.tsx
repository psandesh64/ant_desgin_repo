import React from 'react'
import antdLogo from './../assets/svg/antd-logo.svg'
import { Image } from 'antd'

const LoginPage = () => {
  return (
    <div className='main-container'>
        <div className='sub-container'>
            <div className='login-logo'>
                <Image
                    width={30}
                    height={30}
                    alt='antd-logo'
                    src={antdLogo}
                    preview={false}
                />
                <div className='logo-text'>Ant Design</div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
