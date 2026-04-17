import { useEffect } from "react"
import axios from "../api/axiosConfig"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Suspense } from "react"


const Product = () => {
  const navigate = useNavigate()
  
  // @ts-ignore
//  const products = useSelector((state)=>state.products.products)
const [products, setProducts] = useState([])
const [hasMore, setHasMore] = useState(true)

  const fetchproduct = async () => {
  try {
    // 1. Calculate the next page
    const nextPage = Math.floor(products.length / 6) + 1;
    
    const { data } = await axios.get(`/products?_per_page=6&_page=${nextPage}`);

    // 2. Extract the array from the new JSON Server response format
    const incomingData = data.data;
    console.log("Incoming Data:", incomingData);

    if (incomingData.length === 0) {
      setHasMore(false);
    } else {
      // 3. THE SMART UPDATE: Filter out duplicates by ID
      setProducts((prev) => {
        // Create a list of IDs we already have in our state
        const existingIds = prev.map(p => p.id);
        
        // Only keep items from the API that aren't already in our 'prev' state
        const uniqueNewItems = incomingData.filter(item => !existingIds.includes(item.id));
        
        return [...prev, ...uniqueNewItems];
      });

      // 4. Properly stop the scroll if the server says there's no 'next' page
      if (data.next === null) {
        setHasMore(false);
      }
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setHasMore(false);
  }
};

  useEffect(()=>{
    fetchproduct()
  },[])

  const renderProducts = products.map((product)=>{
    return <div className=" w-[15rem] shadow-xl shadow-black/50 hover:scale-102" key ={product.id}>
      <img
      className="w-full h-[15rem] object-cover rounded-lg"
      src={product.url} alt="" />
      <h1
      className="text-2xl font-bold mt-2 mb-1 ml-2 text-[rgb(192,208,137)] w-full "
      >{product.title}</h1>
      <h3 className="mb-2 ml-2 text-[16px] text-[rgb(166,184,101)] hover:underline cursor-pointer" onClick={()=>{navigate(`/ProductDetails/${product.id}`)}}>{product.description.slice(0, 100)}...</h3>
      <p className="text-[rgb(203,237,78)] ml-2">${product.price}</p>
      <Link to={`/ProductDetails/${product.id}`} className="text-blue-500 ml-2 hover:underline">
        More info....
      </Link>
    </div>  })


  return (
    (
    <InfiniteScroll 
    className="overflow-auto flex flex-wrap"
    dataLength={products.length}
    next ={fetchproduct}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
     endMessage={<p className="w-full font-bold text-xl text-center m-10 text-[rgb(192,208,137)]">
        Yay! You have seen it all.....
      </p>} >
    <div className="flex gap-6 flex-wrap mt-10 px-18" >
      <Suspense fallback={<h1>Loading...</h1>}>
      {renderProducts}
      </Suspense>
       
       </div>
    </InfiniteScroll>  
  )
)
}

export default Product