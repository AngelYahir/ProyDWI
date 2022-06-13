import React from "react";

export function Home() {
  return (
    <>
      <div class="carousel w-full">
        <font></font>
        <div id="slide1" class="carousel-item relative w-full">
          <font></font>
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
            class="w-full"
          />
          <font></font>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <font></font>
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>{" "}
            <font></font>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
            <font></font>
          </div>
          <font></font>
        </div>
        <font></font>
        <div id="slide2" class="carousel-item relative w-full">
          <font></font>
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            class="w-full"
          />
          <font></font>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <font></font>
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>{" "}
            <font></font>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
            <font></font>
          </div>
          <font></font>
        </div>{" "}
        <font></font>
        <div id="slide3" class="carousel-item relative w-full">
          <font></font>
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            class="w-full"
          />
          <font></font>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <font></font>
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>{" "}
            <font></font>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
            <font></font>
          </div>
          <font></font>
        </div>{" "}
        <font></font>
        <div id="slide4" class="carousel-item relative w-full">
          <font></font>
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            class="w-full"
          />
          <font></font>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <font></font>
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>{" "}
            <font></font>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
            <font></font>
          </div>
          <font></font>
        </div>
        <font></font>
      </div>
      <p>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-13 sm:px-3 lg:max-w-7xl lg:px-8">
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </p>
      <p>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-3 lg:max-w-7xl lg:px-8">
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </p>
      <p>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-3 lg:max-w-7xl lg:px-8">
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </p>
    </>
  )
}
