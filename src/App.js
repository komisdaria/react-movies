import Preloader from './components/Preloader';
// import Book from './components/Book';
// import Form from './components/Form';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

function App(props) {
  return props.isLoad ? <Preloader /> : (
    <>
      <Header />
      {/* <Form />
      <Book name='JS' year='2020' price='1200' />
      <Book name='React' year='2021' price='800' /> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
