import ClientsDetails from './components/ClientsDetails';
import Dates from './components/Dates';
import Footer from './components/Footer';
import Header from './components/Header';
import MainDetails from './components/MainDetails';
import Notes from './components/Notes';
import Table from './components/Table';

function App() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:max-auto bg-white rounded shadow">
        <div>
          <Header handlePrint={handlePrint} />
          <MainDetails />
          <ClientsDetails />
          <Dates />
          <Table />
          <Notes />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
