import { render, screen } from '@testing-library/react';
import App from './App';
import AdminLoginPage from './components/Admin/AdminLoginPage';
import AddProduct from './components/Admin/Addproduct';
import { getByTestId, getByText } from '@testing-library/dom';
import Updateproduct from './components/Admin/Updateproduct';
import Viewproduct from './components/Admin/Viewproduct';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//admin login

test('Login in Admin Login', () => {
  render(
    
      <AdminLoginPage/>

  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

test('Addproduct in Admin', () => {
  render(
    
      <AddProduct/>

  );
  expect(getByTestId(document.documentElement, 'submit1')).toBeInTheDocument();
});

// test('Updateproduct in Admin', () => {
//   render(
    
//       <Updateproduct/>

//   );
//   expect(getByTestId(document.documentElement, 'submit3')).toBeInTheDocument();
// });

// test('Viewproduct in Admin', () => {
//   render(
    
//       <Viewproduct/>

//   );
//   expect(getByTestId(document.documentElement, 'submit3')).toBeInTheDocument();
// });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ environment: 'dev', service: 'fakeService' }),
}))
