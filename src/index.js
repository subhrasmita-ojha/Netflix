import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Collections from './Collections';
import Sdata from './Sdata';

const nfCollections = (values) =>{
  return(
  <Collections
  imgSrc={values.imgSrc}
  title={values.title}
  SerieName={values.SerieName}
  link={values.link}
  />
  );
}

ReactDOM.render(
<>
<h2 className='heading_style'>List Of My Fav Netflix Series</h2>
{Sdata.map(nfCollections)}
</>,
  document.getElementById('root')
);


