import styled from "styled-components";

export const SidebarWrapper = styled.div`
    background-color: ${(props) => props.color === "light" ? "#fff" : "#202127"};
`;

export const SidebarItem = styled.div`
    color: ${(props) => props.color === "light" ? "#97a5b9" : "#f0f2ff"};
`;