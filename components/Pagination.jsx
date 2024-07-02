import React from 'react'
import { useRouter } from 'next/router'

const Pagination = (productsLength) => {
    const router = useRouter()

        //  {  {router.query.page > 0 && (  )}{router.query.page < (productsLength -1) && ()} 
  
       
  return (
    <nav class="pagination-outer" aria-label="Page navigation">
    <ul class="pagination">
  
       
              <li class="page-item">
             <a href="#" class="page-link" onClick={() => changePage('previous')} aria-label="Previous">
             <span aria-hidden="true">«</span>
         </a> 
    </li>


 
 
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item active"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>

      
          <li class="page-item">
            <a href="#" class="page-link" aria-label="Next" onClick={() => changePage('next')}>
          <span aria-hidden="true">»</span>
      </a>
      </li>

    </ul>
</nav>



  )
}

export default Pagination
