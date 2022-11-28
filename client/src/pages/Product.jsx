import { useState, useEffect } from 'react'
import { useShop } from '../context/shopContext'
import { useParams, Link } from 'react-router-dom'

export function Product() {
  const { getOneProd, getProdOpinion, addProdOpinion } = useShop()
  const [opinions, setOpinions] = useState([])
  const params = useParams()

  const [prod, setProd] = useState({
    id: params.id,
    name: "",
    description: "",
    images: "",
    price: "",
    seller: ""
  })

  useEffect(() => {
    (async () => {
      if (params.id) {
        const prod = await getOneProd(params.id)

        const res = await getProdOpinion(params.id)
        setProd({
          id: params.id,
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
          <img src={prod.images} className="rounded-lg shadow-2xl" />
          <div className="ml-8">
            <h1 className="text-5xl font-bold">{prod.name}</h1>
            <h1 className="text-5xl mt-5">${prod.price}</h1>

            {localStorage.getItem('user') &&
              <Link to={'/checkout/' + prod.id} >
                <button className="btn btn-primary w-36 mt-3">Buy</button>
              </Link>
            }

          </div>
        </div>
      </div>
      <div className="bg-base-200 pb-12">
        <div className="grid justify-items-center">
          <div className="container">
            <h1 className='text-4xl font-bold mb-8'>Description:</h1>
            <p className="py-6">{prod.description}</p>
          </div>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="grid justify-items-center">
          <div className="container">

            {localStorage.getItem('user') &&

              <form className="opinion w-full" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-8">Rate this product</h1>
                <div className="rating rating-lg">
                  <input type="radio" name="score" value={1} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={2} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={3} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={4} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                  <input type="radio" name="score" value={5} className="mask mask-star-2 bg-green-500" onChange={handleChange} />
                </div>
                <textarea className="textarea textarea-primary w-full" name='comment' placeholder="What do you think about this product?" onChange={handleChange}></textarea>
                <button className="btn btn-primary w-36 mt-2" type='submit'>Public Review</button>
              </form>

            }

            <h1 className="text-2xl font-bold mb-8 mt-8">Customer reviews</h1>
            {opinions.map((r) => (
              <>
                <div className="rating mt-4">
                  {r.score.$numberDecimal == 1
                    ? <input type="radio" name="" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 2
                    ? <input type="radio" name="" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 3
                    ? <input type="radio" name="" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 4
                    ? <input type="radio" name="" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="" className="mask mask-star-2 bg-green-500" disabled />
                  }

                  {r.score.$numberDecimal == 5
                    ? <input type="radio" name="" className="mask mask-star-2 bg-green-500" checked disabled />
                    : <input type="radio" name="" className="mask mask-star-2 bg-green-500" disabled />
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
