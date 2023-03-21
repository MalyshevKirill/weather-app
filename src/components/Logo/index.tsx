import React, {useCallback} from 'react';
import {LogoBox, LogoIcon, LogoText} from './Logo.styles';
import {useNavigate} from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        navigate('/')
    }, [navigate])

    return <LogoBox onClick={handleClick}>
        <LogoIcon/>
        <LogoText>Cloudy</LogoText>
    </LogoBox>
};

export default Logo