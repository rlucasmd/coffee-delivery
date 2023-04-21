import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { SuccessfulOrder } from "./pages/SuccessfulOrder";

function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/order" element={<Order />}/>
        <Route path="/successful-order" element={<SuccessfulOrder />}/>
      </Route>
    </Routes>
  );
}

export { Router };