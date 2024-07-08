import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Page1"
                //Page1 を関数に統一する → props内 matchから、path + url情報を取得する
                render={({ match: { url } }) => (
                    //matchからulrの情報を受け取る
                    <Switch>
                        {console.log(url)}
                        <Route exact path={url}>
                            <Page1 />
                        </Route>
                        <Route path={`${url}/detailA`}>
                            <Page1DetailA />
                        </Route>
                        <Route path={`${url}/detailB`}>
                            <Page1DetailB />
                        </Route>
                    </Switch>
                )}
            />
            <Route path="/Page2"><Page2 /></Route>
        </Switch>
    );
}