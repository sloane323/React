
// css 파일 import
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 공용으로 쓸 데이터컨텍스트 Provider 추가
import { DataProvider } from "./DataContext/DataContext";

// 라이브러리 컴포넌트 import
import { Routes, Route } from "react-router-dom";
import Layout from "./page/Layouts";
import Home from "./page/Home";
import Login from "./page/Login"
import ProductDetail from "./page/ProductDetail";
import Profile from "./page/Profile";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>

        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="loginform" element={<Login />}></Route>
            <Route path="product/:id" element={<ProductDetail />}></Route>
            <Route path="/mypage" element={<Profile />} />
                      </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;