import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ImageList from './components/ImageList';

function App() {
  const [data, setData] = useState([])

  function handleFetchImages() {
    fetch("https://image-mock-data.firebaseio.com/images.json")
    .then(res => res.json())
    .then(result => {
      setData(result)
    })
  }

  useEffect(() => {
    handleFetchImages()
  }, [])

  return (
    <div className="container">
      <ImageList images={data} />
    </div>
  );
}

export default App;
