import {React , useState , useEffect} from 'react'
import "./NewCollection.css"
import new_collections from '@/public/Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  const [new_collections, setNew_Collections] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/newcollections").then((response)=>response.json()).then((data)=>setNew_Collections(data))
  }, [])
  
  return (
    <>
      <div className="new_collection">
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collection">
            {new_collections.map((item , i )=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
    </>
  )
}

export default NewCollection
