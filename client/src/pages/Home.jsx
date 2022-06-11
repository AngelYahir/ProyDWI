import React from 'react'

export function Home() {
  return (
    <>
    <div class="carousel w-full"><font></font>
  <div id="slide1" class="carousel-item relative w-full"><font></font>
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" /><font></font>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><font></font>
      <a href="#slide4" class="btn btn-circle">❮</a> <font></font>
      <a href="#slide2" class="btn btn-circle">❯</a><font></font>
    </div><font></font>
  </div><font></font>
  <div id="slide2" class="carousel-item relative w-full"><font></font>
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" /><font></font>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><font></font>
      <a href="#slide1" class="btn btn-circle">❮</a> <font></font>
      <a href="#slide3" class="btn btn-circle">❯</a><font></font>
    </div><font></font>
  </div> <font></font>
  <div id="slide3" class="carousel-item relative w-full"><font></font>
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" /><font></font>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><font></font>
      <a href="#slide2" class="btn btn-circle">❮</a> <font></font>
      <a href="#slide4" class="btn btn-circle">❯</a><font></font>
    </div><font></font>
  </div> <font></font>
  <div id="slide4" class="carousel-item relative w-full"><font></font>
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" /><font></font>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"><font></font>
      <a href="#slide3" class="btn btn-circle">❮</a> <font></font>
      <a href="#slide1" class="btn btn-circle">❯</a><font></font>
    </div><font></font>
  </div><font></font>
</div>
</>
  )
}
