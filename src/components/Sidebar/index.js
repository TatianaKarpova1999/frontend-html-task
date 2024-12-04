import styled from "styled-components";

export const SidebarWrapper = styled.div`
    background-color: ${(props) => props.color === "light" ? "#fff" : "#202127"};
    max-width: 340px;
    border-radius: 30px;
    padding: 50px;
    margin: 0 auto;
    padding-top: 85px;
`;


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 60px;
`;


export const TextLogo = styled.span`
    color: ${(props) => props.color === "light" ? "#0000b5" : "#3B82F6"};
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
`;

export const SidebarToggle = styled.button`
    background-color: ${(props) => {
        if (props.color === "light") {
            if (props.className === "opened") {
                return '#e2e8f0';
            } else {
                return '#fff';
            }
        } else if (props.color === "dark") {
            if (props.className === "opened") {
                return '#4B5966';
            } else {
                return '#202127';
            }
        } 
    }};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    svg {
        color: ${(props) => props.color === "light" ? "#4B5966" : "#f0f2ff"};      
    }
`;

export const SidebarItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 22px;
    margin-bottom: 200px;

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
    padding: 20px;
    text-decoration: none;
    border-radius: 30px;
    transition: 0.2s;

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
