import { BrowserRouter ,Link ,Switch ,Route} from 'react-router-dom';
//BrowserRouterタグ配下で ルーティングが有効になる
//Link = <a>タグに相当するもの
//Switch = コンポーネントを出し分ける
//Route = ルーティングの設定  //Switchの中で、Routeにマッチしたものを表示する

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';

export default function App() {
    return (
      <BrowserRouter>
          <div>
              <Link to="/">Home</Link>
              <br />
              <Link to="/Page1">Page1</Link>
              <br />
              <Link to="/Page2">Page2</Link>
          </div>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/Page1" 
                //Page1 を関数に統一する → props内 matchから、path + url情報を取得する
                render={(props)=> (
                    //propsは、history,location,matchの情報を受け取る
                    <Switch>
                      {console.log(props)}
                        <Route exact path="/page1">
                          <Page1 /> 
                        </Route>
                        <Route path="/page1/detailA">
                          <Page1DetailA /> 
                        </Route>
                        <Route path="/page1/detailB">
                            <Page1DetailB /> 
                        </Route>
                    </Switch>
                  ) }
                  />
              <Route path="/Page2"><Page2 /></Route>
          </Switch>
      </BrowserRouter>
    );
}