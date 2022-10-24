import { useState, useEffect } from 'react'
import { useShop } from '../context/shopContext'
import { useNavigate, useParams, Link } from 'react-router-dom'

export function Product() {
  const { getOneProd, getProdOpinion, addProdOpinion } = useShop()
  const [prod, setProd] = useState({
    name: "",
    description: "",
    images: "",
    price: "",
    seller: ""
  })
  const [opinions, setOpinions] = useState([])
  const params = useParams()

  useEffect(() => {
    (async () => {
      if (params.id) {
        const prod = await getOneProd(params.id)

        const res = await getProdOpinion(params.id)
        setProd({
          name: prod.name,
          description: prod.description,
          images: prod.images.url,
          price: prod.price.$numberDecimal,
          seller: prod.seller
        })
        setOpinions(res)
      }
    })();
  }, []);

  let user = { _id: 0 }
  if (localStorage.getItem('user'))
    user = JSON.parse(localStorage.getItem('user'))


  const [opinion, setOpinion] = useState({
    user_id: user._id,
    score: '',
    comment: "",
    product_id: params.id
  })

  const handleChange = ({ target: { name, value } }) =>
    setOpinion({ ...opinion, [name]: value })

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await addProdOpinion(opinion)
      location.reload()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={prod.images} className="max-w-4xl rounded-lg shadow-2xl" />
          <div className="ml-8">
            <h1 className="text-5xl font-bold">{prod.name}</h1>
            <h1 className="text-5xl mt-5">${prod.price}</h1>
            <p className="py-6">{prod.description}</p>
            <Link to='/checkout' params={prod.price}>
              <button className="btn btn-primary w-36">Comprar</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="grid justify-items-center">
          <div className="container">

            {localStorage.getItem('user') &&

              <form className="opinion w-full" onSubmit={handleSubmit}>
                <h1 className="text-5xl font-bold mb-8">Califica este producto</h1>
                <div className="rating rating-lg">
                  <input type="radio" name="score" value={1} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={2} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={3} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={4} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={5} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                </div>
                <textarea className="textarea textarea-primary w-full" name='comment' placeholder="¿Qué pienas de este producto?" onChange={handleChange}></textarea>
                <button className="btn btn-primary w-36 mt-2" type='submit'>Calificar</button>
              </form>

            }

            <h1 className="text-5xl font-bold mb-8 mt-8">Opiniones de clientes</h1>
            {opinions.map((r) => (
              <>
                <div className="rating mt-4">
                  {r.score.$numberDecimal == 1
                    ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 2
                    ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 3
                    ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 4
                    ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 5
                    ? <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" disabled />
                  }
                </div>
                <p className='mb-4'>{r.comment}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
