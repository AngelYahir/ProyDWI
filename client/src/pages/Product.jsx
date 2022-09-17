import { useState, useEffect } from 'react'
import { useShop } from '../context/shopContext'
import { useNavigate, useParams, Link } from 'react-router-dom'

export function Product() {
  const navigate = useNavigate()
  const { getOneProd } = useShop()
  const [prod, setProd] = useState({
    name: "",
    description: "",
    images: "",
    price: "",
    seller: ""
  })
  const params = useParams()

  useEffect(() => {
    (async () => {
      if(params.id) {
        const prod = await getOneProd(params.id)
        setProd({
          name: prod.name,
          description: prod.description,
          images: prod.images.url,
          price: prod.price.$numberDecimal,
          seller: prod.seller
        })
      }
    })();
  }, [params.id, getOneProd]);

  console.log(prod.price)

  return (
    <>
      <div className='justify-content-center'>
        <img src={prod.images} alt="" />
        <h1>{prod.name}</h1>
        <h3>${prod.price}</h3>
        <Link to='/checkout'>
          <button className='btn btn-primary w-42'>Comprar</button>
        </Link>
      </div>
    </>
  )
}
