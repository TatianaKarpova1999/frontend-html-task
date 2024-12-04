import styled from "styled-components";

export const SidebarBg= styled.div`
    background-color: ${(props) => props.color === "light" ? "#e2e8f0" : "#4B5966"};
`;


export const SidebarWrapper = styled.div`
    ${(props) => props.className === "sidebar opened" ? 'width: 400px; overflow: hidden; padding: 30px;' : 'width: 125px; padding: 23px;'};
    background-color: ${(props) => props.color === "light" ? "#fff" : "#202127"};
    border-radius: 30px;
    margin: 0 auto;
    padding-top: 85px;
    position: relative;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    border: 4px solid ${(props) => props.color === "light" ? "#e2e8f0" : "#4B5966"};
    box-shadow:  0 0 0 2px ${(props) => props.color === "light" ? "#fff" : "#202127"}; 

    & span {
        ${(props) => props.className === "sidebar opened" ? 'opacity: 1; position: relative;' : 'opacity: 0; position: absolute; left: 100px; transition: 0.1s; pointer-events: none;'};
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px;
    margin-bottom: 40px;
`;


export const TextLogo = styled.span`
    color: ${(props) => props.color === "light" ? "#0000b5" : "#3B82F6"};
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    transition: 0.2s;
`;

export const SidebarToggle = styled.button`
    background-color: ${(props) => {
        if (props.color === "light") {
            if (props.className === "sidebar opened") {
                return '#e2e8f0';
            } else {
                return '#fff';
            }
        } else if (props.color === "dark") {
            if (props.className === "sidebar opened") {
                return '#4B5966';
            } else {
                return '#202127';
            }
        } 
    }};

    ${(props) => {
        if (props.className === "sidebar opened") {
            return 'right: -11px;';
        } else {
            return 'right: -50px;';
        }
    }};
    transition: 0.2s;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    position: absolute;
    top: 105px;

    svg {
        color: ${(props) => props.color === "light" ? "#4B5966" : "#f0f2ff"};      
    }
`;

export const SidebarItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 22px;
    margin-bottom: 200px;
    width: 100%;

    &:last-child {
        margin-bottom: 0;
        row-gap: 17px;
    }
`;

export const SidebarItem = styled.a`
    color: ${(props) => props.color === "light" ? "#97a5b9" : "#f0f2ff"};
    font-size: 25px;
    line-height: 40px;
    font-size: 25px;
    line-height: 40px;
    display: flex;
    align-items: center;
    column-gap: 20px;
    padding: 22px;
    text-decoration: none;
    border-radius: 27px;
    transition: 0.2s;
    min-height: 80px;
    box-sizing: border-box;

    @media (hover: hover) {
        &:hover {
            background-color: ${(props) => props.color === "light" ? "#f0f2ff" : "#2D2E34"};
            color: ${(props) => props.color === "light" ? "#091b31" : "#f0f2ff"};
            transition: 0.2s;
        }
    }

    &:active {
        background-color: ${(props) => props.color === "light" ? "#f0f2ff" : "#393A3F"};
        color: ${(props) => props.color === "light" ? "#0000b5" : "#f0f2ff"};
        transition: 0.1s;
    }
`;
