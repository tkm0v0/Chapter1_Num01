import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';

import { Page2 } from '../Page2';

import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';

//exactとは?
//<Route />にexactを記述すると、pathに指定したパス文字列と、location.pathName（windowオブジェクトのlocation.pathName）が完全一致した場合のみコンポーネントを返すようになります。
//[React Routerのexactとは何か](https://qiita.com/gombeedoe/items/6f4ea0e37775bac01c0d)

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route 
                path="/Page1"
                //Page1 を関数に統一する → props内 matchから、path + url情報を取得する
                render={({ match: { url } }) => (
                    //matchからulrの情報を受け取る
                    <Switch>
                        {
                            //Page1のルーティング情報を取得
                            page1Routes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    {route.children}
                                </Route>
                            ))
                        }
                    </Switch>
                )}
            />
            <Route 
                path="/Page2"
                render={({ match: { url } }) => (
                    <Switch>
                        {
                            page2Routes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    {route.children}
                                </Route>
                            ))
                        }
                    </Switch>
                )}
            />
            <Route path="/Page2"><Page2 /></Route>
        </Switch>
    );
}