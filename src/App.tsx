import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// them thanh phan Login trong thu muc pages/login/index.tsx
// o phia component Login, export default
// Voi import default thi co the doi ten
import Login from './pages/login';
// Voi import khong default thi co the as
import {USER_LOGIN as LOGIN_USER} from './pages/login';

import TableCustom from './pages/table';
import Student from './pages/student';

import {Routes, Route, Link} from 'react-router-dom';
import ClientLayout from './pages/layouts/ClientLayout';
import Product from './pages/product/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import HomePage from './pages/homepage';
import AdminHomePage from './pages/adminHomePage';
import ProductDetail from './pages/product/ProductDetail';
import ProductForm from './pages/product/ProductForm';
type Student = {
  name: string,
  age: string,
  phone: string,
  address: string
}
type Students = Student[];
function App() {
  // Khi state thay đổi bằng phương thức setState thì view mới render lại
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<String>('');
  // State trạng thái hiển thị bảng
  const[isShowTable, setShowTable] = useState<boolean>(true);
  const headCells = [
    {
      label: 'Ten',
      key: 'name'
    },
    {
      label: 'Tuoi',
      key: 'age'
    },
    {
      label: 'Dia chi',
      key: 'address'
    },
    {
      label: 'SDT',
      key: 'phone'
    },
  ];


  const [students, setStudents] = useState<Students>([
    {
      name: 'Ahihi',
      age: '10',
      address: 'HN',
      phone: '123123123'
    }
  ])
  const [nameValue, setnameValue] = useState<string>('');
  const [ageValue, setageValue] = useState<string>('');
  const [addressValue, setaddressValue] = useState<string>('');
  const [phoneValue, setphoneValue] = useState<string>('');
  
  const onAddStudent = () => {
    const newStudents = [
      ...students,
      {
        name: nameValue,
        age: ageValue,
        address: addressValue,
        phone: phoneValue
      }
    ];
    setStudents(newStudents);
  }
  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>Update count</button>
      <p>{count}</p>

      <button onClick={() => setName('ahihi')}>Update name</button>
      <p>Name: {name}</p>
   
      
      {/* Them view Login vao trong App */}
      {/* Khong co the dong */}
      {/* viewName la ten cua 1 trong so cac prop truyen vao */}
      <Login
        viewName={'Login view from APP'}
        username='Hu' // voi gia tri la string thi co the k can ngoac
        password='123123123'
      />
           {/* <Student/> */}
           <button onClick={() =>setShowTable(!isShowTable)}
    >{isShowTable===true? 'Ẩn' : 'Hiện'} bảng</button>



      <form action="">
        <input type="text" 
        placeholder='name'
        onChange={(event) => setnameValue(event.target.value)}
        />
        <input type="number" 
        placeholder='age'
        onChange={(event) => setageValue(event.target.value)}
        />
        <input type="text" 
        placeholder='address'
        onChange={(event) => setaddressValue(event.target.value)}
        />
        <input type="text" 
        placeholder='phone'
        onChange={(event) => setphoneValue(event.target.value)}
        />
        <button type='button' onClick={() => onAddStudent()}>Add sv</button>
      </form>
            {/* Them component Table vao trong App */}
      {
        isShowTable === true
          ? <TableCustom rows={students} headCells={headCells} />
          : null
      }

  <Routes>
        <Route path='/' element={<ClientLayout />}>
          {/* / */}
            <Route index element={<HomePage />} />
            {/* /product */}
            <Route path='product' element={<Product />} />
        </Route>

        <Route path='admin' element={<AdminLayout />}>
          {/* /admin */}
            <Route index element={<AdminHomePage />} />
            {/* /admin/product */}
            {/* <Route path='product' element={<Product />} /> */}
            <Route path='product'>
              <Route index element={<Product />} />
              <Route path=':id' element={<ProductDetail />} />
              <Route path=':id/edit' element={<ProductForm />} />
            </Route>
        </Route>
      </Routes>

    </div>


  );
}

export default App;