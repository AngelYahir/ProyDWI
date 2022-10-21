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
      if (params.id) {
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

  const raiting = [
    {
      cal: 5,
      desc: 'Excelente producto y la página toda GOD 20/10'
    },
    {
      cal: 4,
      desc: 'Me gusto mucho el producto, es exacto lo que buscaba'
    },
    {
      cal: 4,
      desc: 'Me gusto mucho el producto, es exacto lo que buscaba'
    },
    {
      cal: 5,
      desc: 'Me gusto mucho el producto, es exacto lo que buscaba'
    },
    {
      cal: 1,
      desc: 'Me descepciono bastante una basura -10/10'
    }
  ]


  return (
    <div className="container mt-4">
      <div className="grid grid-flow-col">
        <div className='justify-content-center'>
          <img src={prod.images} alt="" style={{ width: 1000 }} />
        </div>
        <div>
          <h1>{prod.name}</h1>
          <h3>Descripción</h3>
          <p>{prod.description}</p>
          <h1>${prod.price}</h1>
          <Link to='/checkout'>
            <button className='btn btn-primary w-42'>Comprar</button>
          </Link>
        </div>
      </div>

      <div className='mt-5 ml-4'>
        <h1>Valoraciones</h1>
        {raiting.map((r) => (
          <>
            <div className="rating mt-4">
              {r.cal == 1
                ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              }

              {r.cal == 2
                ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              }

              {r.cal == 3
                ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              }

              {r.cal == 4
                ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              }

              {r.cal == 5
                ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
              }
            </div>
            <p className='mb-4'>{r.desc}</p>
          </>
        ))}


      </div>
    </div>
  )
}
