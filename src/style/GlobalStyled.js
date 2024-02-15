import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;
