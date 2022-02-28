import styled from 'styled-components';
import MoonIcon from './MoonIcon';
import { Link } from 'react-router-dom'

const Header = ({ theme, toggleTheme }) => {
   return(
      <header>
         <ContainerDiv>
            <Link to='/'>Countries Info.</Link>
            <ThemeButton onClick={toggleTheme}>
               <MoonIcon theme={theme} />
               
            </ThemeButton>
         </ContainerDiv>
      </header>
   );
}

const ContainerDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   a {
      cursor: pointer;
      font-size: 26px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
   }
   
   a {
      @media (max-width: 800px) {
         font-size: 1.2rem;
      }
	}
`;
const ThemeButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--text);
   font-size: 1.25rem;
   font-weight: 400;
   cursor: pointer;
   @media (max-width: 1080px) {
      font-size: 1rem;
   }
   svg {
      width: 1rem;
      height: 1.1rem;
      fill: var(--text);
      margin-right: .5rem;
   }
`;

export default Header;