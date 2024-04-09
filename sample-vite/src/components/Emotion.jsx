/** @jsxImportSource @emotion/react */
/** @jsx jsx */
// import { jsx, css } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {
    const containerStyle = css`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        width: 500px;
    `;
    const titleStyle = css({
        color: "skyBlue",
    });
    return(
        <>
            <div css={containerStyle}>
                <p css={titleStyle}>Emotion</p>
                <SButton>FIGHT!!</SButton>
            </div>
        </>
    )
}

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