import { BrowserRouter ,Link } from 'react-router-dom';
//BrowserRouterタグ配下で ルーティングが有効になる
//Link = <a>タグに相当するもの
//Switch = コンポーネントを出し分ける
//Route = ルーティングの設定  //Switchの中で、Routeにマッチしたものを表示する

import { Router } from './router/Router';

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
          <Router  />
      </BrowserRouter>
    );
}