import { Link, useParams  } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>UrlParameterページです</h1>
            <Link to="/Page2/999">URL Parameter</Link>
            <p>パラメーターは{id}です</p>
        </div>
    );
}