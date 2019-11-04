import { 
  ThemeProvider, 
  createGlobalStyle 
} from 'styled-components';

export function findUniqueMessage(message) {
	  return `${message.uuid}:${message.content}`;
	}

export const GlobalStyle = createGlobalStyle `
body {
  background-color: ${props =>
    props.theme.mode ==='dark' ? '#111' :'#EEE'};
  color: ${props =>
    props.theme.mode ==='dark' ? '#EEE' :'#111'};
 }
 `;

 