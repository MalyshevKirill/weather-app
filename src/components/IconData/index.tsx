import {FC} from 'react';
import {Tooltip} from 'antd';
import {IconDataContainer, IconDataText} from './IconData.styles';

export interface IconDataProps {
    Icon: any,
    data: string | number,
    tooltipText?: string
}

const IconData: FC<IconDataProps> = (
    {
        Icon,
        data,
        tooltipText
    }
) => {
    return <Tooltip title={tooltipText} placement="bottom">
        <IconDataContainer>
            <Icon/>
            <IconDataText>{data}</IconDataText>
        </IconDataContainer>
    </Tooltip>
}

export default IconData