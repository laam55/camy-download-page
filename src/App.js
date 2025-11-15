import './App.css';

const QueryString = {
  TRANSACTION_ID: 't',
};

function App() {
  const query = new URLSearchParams(window.location.search);
  const transId = query.get(QueryString.TRANSACTION_ID);

  return (
    <iframe
      className='iframe-download-page'
      src={`${process.env.REACT_APP_FUN_DOWNLOAD_URL}${transId}`}
      title='PhotoBooth Download Page'
    />
  );
}

export default App;
