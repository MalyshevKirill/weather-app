import {StyledContainer} from './Container.styles';
import {FC, ReactNode} from 'react';

interface ContainerProps {
    children?: ReactNode;
    className?: string
}

const Container:FC<ContainerProps> = ({children, className}) => (
    <StyledContainer className={className}>
        {children}
    </StyledContainer>
)

export default Container