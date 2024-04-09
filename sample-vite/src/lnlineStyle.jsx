export const InlineStyles = () => {
    const containerStyle ={
        border: "solid 2px #392eff",
        borderRadius: "20px",
        padding: "8px",
        margin: "8px",
        width: "500px"
    };
    const titleStyle ={
        color: "skyBlue",
    };
    const buttonStyle ={
        backgroundColor: "#abedd8",
        border: "none",
        padding: "8px",
        margin: "8px",
        borderRadius: "8px",
        cursor: "pointer",
    };
    return(
        <div style={containerStyle}>
            <p style={titleStyle}>インラインスタイル</p>
            <button style={buttonStyle}>FIGHT!!</button>
        </div>
    )
}