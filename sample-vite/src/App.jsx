import { BrowserRouter ,Link ,Switch ,Route} from 'react-router-dom';
//BrowserRouterタグ配下で ルーティングが有効になる
//Link = <a>タグに相当するもの
//Switch = コンポーネントを出し分ける
//Route = ルーティングの設定  //Switchの中で、Routeにマッチしたものを表示する

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export default function App() {
    return (
      <BrowserRouter>
          <div>
              <Link to="/">Home</Link>
              <br />
              <Link to="/Page1">Page1</Link>
              <br />
              <Link to="/Page2">Page2</Link>
              {/* <Home />
              <Page1 />
              <Page2 /> */}
          </div>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/Page1"><Page1 /></Route>
              <Route path="/Page2"><Page2 /></Route>
          </Switch>
      </BrowserRouter>
    );
}