
import { Product } from '../components';
import chunk from 'lodash/chunk'
import React from 'react'
import { useRouter } from 'next/router'




const ProductsHandle = ({ productsInfo }) => {
  const router = useRouter()
  let { page, limit } = router.query;

  const Products = chunk(productsInfo, limit)
  var QueryPage = Number(router.query.page);


  const changePage = (direction) => {
    // Atualiza a URL para a próxima ou anterior página, mantendo o limite igual
    const currentPage = QueryPage;
    const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage.toString() },
    });
  };

  const HandleLimit = (event) => {
    const selectedValue = event.target.value;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, limit: selectedValue.toString() },
    });


  }


  return (
    <div>
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {Products[page]?.map((product) => <Product key={product._id} product={product} />)}
      </div>



      <nav className="pagination-outer" aria-label="Page navigation">
        <ul className="pagination">


          {QueryPage >= 1 && ( 
                      <li className="page-item">
                      <a href="#" className="page-link" onClick={() => changePage('previous')} aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
          )}
    


          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item "><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>


          {QueryPage < Products.length - 1 && ( 
            <li className="page-item">
            <a href="#" className="page-link" aria-label="Next" onClick={() => changePage('next')}>
              <span aria-hidden="true">»</span>
            </a>
          </li>
          )}



          <li className="page-item ">
            <select onChange={HandleLimit}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </li>
        </ul>

      </nav>


    </div>
  )

};


export default ProductsHandle
