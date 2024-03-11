

import { Button } from '@mui/material';
import React from 'react'

const Pagination = ({limit, currentPage, totalProducts}) => {
  
  const Page = urlQuery?.page || 1;
  const Limit = urlQuery?.limit || 10;

  
  
  return (
    <nav className='pagination'>
 {
  [...Array(numberOfPages).keys()].map(page => (
    <Button 
      key={page}
      onClick={() => onPageChange(page + 1)}
    >
      {page + 1} 
    </Button>
  ))
}
      
    </nav>
  )
}

export default Pagination
