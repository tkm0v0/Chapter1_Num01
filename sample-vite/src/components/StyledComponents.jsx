import styled  from "styled-components";

export const StyledComponents = () => {
    return(
        <>
            <SContainer >
                <STitle>Styled Components</STitle>
                <SButton>FIGHT!!</SButton>
            </SContainer>
        </>
    )
}

const SContainer = styled.div`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    width: 500px;
`;

const STitle = styled.p`
    color: skyBlue;
`;

const SButton = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #46cdcf;
        opacity: 0.8;
    }
`;