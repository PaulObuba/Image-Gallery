import React, { useState, useEffect } from 'react';
import Footer from './componets/Footer';
import ImageCard from './componets/ImageCard';
import SearchImage from './componets/SearchImage';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&
         pretty=true`)
      .then(response => response.json())
      .then(data => { setImages(data.hits); setLoading(false) })
      .catch(error => console.log(error))
  }, [term]);
  return (
    <>
    <div className='container mx-auto'>
      <SearchImage setTerm={setTerm} />

      {images.length === 0 && <h1 className='text-6xl text-center mx-auto m-32 '> </h1>}

      {loading ? <h1 className='text-6xl text-center mx-auto mt-32 '>
                    Loading...
                </h1> : <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center items-items-center gap-4'>
                           {images.map(image => <ImageCard key={image.id} image={image} />)}
                        </div>}
    </div>
    <Footer />
    </>
  );
}

export default App;
