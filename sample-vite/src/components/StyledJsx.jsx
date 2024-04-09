export const StyledJsx = () => {
    return(
        <>
            <div className="container">
                <p className="title">Styled JSX</p>
                <button className="button">FIGHT!!</button>
            </div>
            <style jsx="true">{`
                .container {
                    border: solid 2px #392eff;
                    border-radius: 20px;
                    padding: 8px;
                    margin: 8px;
                    width: 500px;
                }
                .title {
                    color: skyBlue;
                }
                .button {
                    background-color: #abedd8;
                    border: none;
                    padding: 8px;
                    margin: 8px;
                    border-radius: 8px;
                    cursor: pointer;
                }
                .button:hover {
                    background-color: #46cdcf;
                    opacity: 0.8;
                }
            `}
            </style>
        </>
    )
}