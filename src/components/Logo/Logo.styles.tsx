import styled from 'styled-components';
import {AntCloudOutlined} from '@ant-design/icons';
import {Typography} from 'antd';

export const LogoBox = styled('div')`
    display: flex;
    align-items: center;
    font-size: 20px; 
    cursor: pointer;
`

export const LogoIcon = styled(AntCloudOutlined)`
    font-size: 2.3em;
    color: white;
`

export const LogoText = styled(Typography)`
    font-size: 1.2em;
    margin-left: 10px;
    color: white;
`