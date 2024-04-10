import { Outlet,useLocation } from "react-router-dom";
export const Page1 = () => {
    const location = useLocation();
    console.log(location.pathname); // 現在のパス名をログに出力
    
    return (
        <div>
            <h1>Page1ページです</h1>
                <Outlet />
        </div>
    );
};