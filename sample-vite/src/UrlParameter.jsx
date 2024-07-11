import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    const location  = useLocation();
    const query = new URLSearchParams("uselocation():"+location.search);
    console.log("query:"+query);
    return (
        <div>
            <h1>UrlParameterページです</h1>
            <p>パラメーターは{id}です</p>
            {/* <p>クエリパラメーターは{query.get("name")}です</p> */}
            <p>クエリパラメーターは{query.get("name")?`${query.get("name")}です` : "存在しません"}</p>
        </div>
    );
}