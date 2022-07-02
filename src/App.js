import Counter from "./component/counter/counter";
import Home from "./component/home/home";
import Register from "./component/register/register";
import Store from "./component/store/store";
import Navbar from "./component/navbar/navbar";
import Product from "./component/product/product";
import Todo from "./views/todo/Todo";
import Notfound from "./component/notFound/notFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/register" element= {<Register />}/>
        <Route path="/store" element= {<Store />}/>
        <Route path="/counter" element= {<Counter />}/>
        <Route path="/todo" element= {< Todo/>}/>
        <Route path="/product/:id" element= {<Product />}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
