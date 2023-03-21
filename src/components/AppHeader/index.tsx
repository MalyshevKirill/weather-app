import {FC} from 'react';
import CountrySearch from '../CountrySearch';
import {HeaderContainer} from './AppHeader.styles';
import Logo from '../Logo';
import {StyledHeader} from './AppHeader.styles';

const AppHeader: FC = () => (
    <StyledHeader>
        <HeaderContainer>
            <Logo />
            <CountrySearch/>
        </HeaderContainer>
    </StyledHeader>
)

export default AppHeader