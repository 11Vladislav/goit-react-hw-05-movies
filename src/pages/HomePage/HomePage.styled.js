import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    color: #000;
    font-size: 1.2rem;
    text-decoration: none;
    max-width: 100px;
    &:hover {
        color: orangered;
    }
`;

export const MovieList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   flex-grow: 1; 
`;

export const MovieItem = styled.li`
`;

export const Image = styled.img`
  margin-bottom: 15px;
  display: block;
  max-width: 100%;
  width: 250px;
  height: auto;
`;

