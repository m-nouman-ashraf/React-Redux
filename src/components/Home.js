import React from "react";

function Home() {
  return (
    <div>
      <div className='add-to-cart'>
        <img
          src='https://cdn.pixabay.com/photo/2013/07/12/15/53/shopping-cart-150504_1280.png'
          alt='Cart'
        />
      </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854305_1280.png' />
        </div>
        <div className='text-wrapper item'>
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
