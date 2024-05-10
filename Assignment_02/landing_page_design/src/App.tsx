import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import lux_bed from "./assets/lux-bed.png";


function App() {
  const categories = [
    {
      id: 1,
      name: "Sofa",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipzIWQ7awM8g21NY1KcCwTW0UpqgDJE1TAGwGw0I1qg&s",
    },
    {
      id: 2,
      name: "Bed",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipzIWQ7awM8g21NY1KcCwTW0UpqgDJE1TAGwGw0I1qg&s",
    },
    {
      id: 3,
      name: "Dresser",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSamY7dBSViR7mSE5tl3F-VmqAg49KJ6L26a2F490KA&s",
    },
    {
      id: 4,
      name: "Shelf",
      url: "https://target.scene7.com/is/image/Target/GUEST_c2b529f3-8d52-4703-90fc-2aeb77a88696?wid=488&hei=488&fmt=pjpeg",
    },
    {
      id: 5,
      name: "Lamp",
      url: "https://images.thdstatic.com/productImages/10e09f49-efa5-4b17-8a58-8c036acb669f/svn/white-gold-jonathan-y-table-lamps-jyl4026a-64_600.jpg",
    },
    {
      id: 6,
      name: "Decor",
      url: "https://assets.ajio.com/medias/sys_master/root/20230419/frmc/643f8f83907deb497af15895/-473Wx593H-466056936-multi-MODEL.jpg",
    },
  ]
  let products = [
    {
      id: 1,
      name: "Comfortable Sofa",
      price: 80.99,
      src: "https://specials-images.forbesimg.com/imageserve/6570ba30aae8dd5c5a6671ac/Most-Comfortable-Couches--Harmony-Modular-Motion-Reclining-Sofa--84--117--/960x0.jpg?fit=scale"
    },
    {
      id: 2,
      name: "Elegant Side Table",
      price: 80.99,
      src: "https://dreamon.pk/cdn/shop/files/6000204298616.jpg?v=1687254250"
    },
    {
      id: 3,
      name: "Classy Padded Chair",
      price: 80.99,
      src: "https://i.pinimg.com/736x/4d/7d/27/4d7d27fb977394ddb891eb50f5b07b45.jpg"
    }
  ]


  let allProducts = [
    {
      id: 1,
      name: "Wooden Shelf",
      price: 80.99,
      src: "https://whalenfurniture.com/wp-content/uploads/2023/09/00764053521546_SW-scaled-2-1024x1024.jpg"
    },
    {
      id: 2,
      name: "Leather Sofa",
      price: 499.99,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7Oi-C-WKzvqhRRDVKVXQSykYAirFK1-pQkN5-0LawQ&s"
    },
    {
      id: 3,
      name: "Modern Coffee Table",
      price: 129.95,
      src: "https://thehomestore.com.pk/cdn/shop/files/15_d0c091cb-945a-43b3-b457-fff2633179f0.jpg?v=1687769882"
    },
    {
      id: 4,
      name: "Lounge Chair",
      price: 299.99,
      src: "https://www.fortytwo.sg/media/catalog/product/cache/1/image/2896x/9df78eab33525d08d6e5fb8d27136e95/l/s/ls308xy2-_-_1__1_1.jpg"
    },
    {
      id: 5,
      name: "Dining Table Set",
      price: 699.99,
      src: "https://designerbed.pk/wp-content/uploads/2023/08/e9ce0eadb68df8d7211d305b8b4535ef.jpg"
    },
    {
      id: 6,
      name: "Bed Frame",
      price: 399.99,
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 7,
      name: "Office Desk",
      price: 199.99,
      src: "https://lifely.com.au/cdn/shop/products/5_1f3b4aab-8bc9-4c7c-8490-4e57d75dc0ed.png?v=1681698742"
    },
    {
      id: 8,
      name: "Bookshelf",
      price: 149.99,
      src: "https://m.media-amazon.com/images/I/519845uEQHL._AC_.jpg"
    },
    {
      id: 9,
      name: "TV Stand",
      price: 179.99,
      src: "https://m.media-amazon.com/images/I/519845uEQHL._AC_.jpg"
    }
  ]

  const blogs = [
    {
      id: 1,
      title: "Top 10 furniture brands",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7Oi-C-WKzvqhRRDVKVXQSykYAirFK1-pQkN5-0LawQ&s"
    },
    {
      id: 2,
      title: "Top 10 furniture brands",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7Oi-C-WKzvqhRRDVKVXQSykYAirFK1-pQkN5-0LawQ&s"
    },
    {
      id: 3,
      title: "Top 10 furniture brands",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptate.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7Oi-C-WKzvqhRRDVKVXQSykYAirFK1-pQkN5-0LawQ&s"
    }
  ]



  return (
    <div className="App">

      {/* <!-- Top Navbar --> */}
      <div className="container-fluid sticky-top p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
          <div className="container">
            {/* <!-- The brand image or text --> */}
            <a className="navbar-brand brand-color hover-effect" href="#"><strong>Furnilux</strong></a>

            {/* <!-- The toggler icon for <md sizes --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- The actual navigation --> */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              {/* <!--    nav -> item -> link     --> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active brand-color hover-effect" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link brand-color hover-effect" href="#">Categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link brand-color hover-effect" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link brand-color hover-effect" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link brand-color hover-effect" href="#">Pages</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link brand-color hover-effect" href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* <!-- The search form  --> */}
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link brand-color hover-effect" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active brand-color hover-effect" href="#">SignUp</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <!-- Hero Image --> */}
      <div className="px-4 pt-5  text-center d-flex align-items-center justify-content-center" id='hero-image' >
        <div className='container'>
          <h1 className="display-4 fw-bold brand-color">Furnlinux - Your Brand <br />for Stylish Living</h1>
          <div className="col-lg-10 mx-auto">
            <p className="lead mb-4 mx-5 text-center color-white">Codestars is a digital publishing company specialising in fun, practical and comprehensive
              online courses in the most in-demand coding, technology and business skills topics.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3 button-style">Join Today!</button>

            </div>
          </div>
        </div>

        <div className="border-1 carousel-cards-wrapper position-absolute d-flex justify-content-center align-items-center z-index-3 flex-wrap">
          {categories.map((category) => (
            <div className='card me-2 shadow bg-body categories-hover'>
              <div className='d-flex p-2'>
                <div>
                  <img className='carousel-image' src={category.url} alt="" />
                </div>
                <div className='align-self-center'>
                  <span className='px-2'>{category.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- Products --> */}
      <div className='container text-center mt-4 pt-4'>
        <div className='row mt-4 pt-4'>
          <h2 className='brand-color'>Elevate Your Living Room</h2>
        </div>
      </div>

      {/* <!-- Products --> */}
      <div className='container-fluid'>
        <div className='container mt-4 pt-4 '>
          <div className="card-group">
            {products.map((product) => (
              <div className="card me-2 mb-5 hover-shadow shadow-sm">
                <img src={product.src} className="card-img-top h-100" alt="..." />
                <div className="card-body d-flex justify-content-between">
                  <div className='d-flex flex-column align-items-start'>
                    <span className='d-flex align-items-center gap-2 mb-2'>
                      <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://w7.pngwing.com/pngs/66/597/png-transparent-hardwood-wood-stain-house-painter-and-decorator-wood-flooring-wood-texture-material-wood-material.png" alt="" />
                      <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://www.arch2o.com/wp-content/uploads/2020/07/Arch2O-65-types-of-wood-every-designer-needs-to-know-about-12-700x467.jpg" alt="" />
                      <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1j49tDgDthAUOSBZ7xmCE9lPHSqPssH8J5zyqsyU66PqNLEJfbaXXZA_PlorbKl83TY&usqp=CAU" alt="" />
                      <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?cs=srgb&dl=pexels-fwstudio-33348-164005.jpg&fm=jpg" alt="" />
                      <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://blenderartists.org/uploads/default/original/3X/0/d/0d147ff8b0193c4e5ecb76308f2f5162c9e1f8ed.jpg" alt="" />
                    </span>
                    <h5 className="mb-0 brand-color-products">{product.name}</h5>
                    <p className="brand-color-products"> {product.price}</p>
                  </div>
                  <div>
                    <img style={{ height: '25px', width: '25px' }} src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* <!-- Slider --> */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active indicator-color" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className='indicator-color'></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className='indicator-color'></button>
        </div>
        <div className="carousel-inner d-flex carousel-bg-gd" style={{ height: '400px' }}>
          <div className="carousel-item d-flex align-items-center justify-content-around">
            <div>
              <p>Luxirius Bed</p>
              <p>Disover Lorem ipsum dolor sit amet consectetur, <br />bradipisicing elit. Architecto eum, <br /> nostrum totam ipsum ea ex expedita,<br /> animi omnis dolor porro voluptatibus quia aut voluptatum</p>
              <p>$299</p>
              <span className='d-flex align-items-center gap-2 mb-2'>
                <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://w7.pngwing.com/pngs/66/597/png-transparent-hardwood-wood-stain-house-painter-and-decorator-wood-flooring-wood-texture-material-wood-material.png" alt="" />
                <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://www.arch2o.com/wp-content/uploads/2020/07/Arch2O-65-types-of-wood-every-designer-needs-to-know-about-12-700x467.jpg" alt="" />
                <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1j49tDgDthAUOSBZ7xmCE9lPHSqPssH8J5zyqsyU66PqNLEJfbaXXZA_PlorbKl83TY&usqp=CAU" alt="" />
              </span>
              <button className="btn btn-outline-primary button-style">Buy Now</button>
            </div>
            <div>
              <img src={lux_bed} style={{ height: '250px', width: '350px' }} className="" alt="..." />
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>


      {/* <!-- Products --> */}
      <div className='container text-center mt-4 pt-4'>
        <div className='row mt-4 pt-4'>
          <h2 className='brand-color'>All Products</h2>
        </div>
      </div>


      <div className='container-fluid'>
        <div className='container pt-4 mt-5'>
          <div className="row row-cols-md-3 g-4">
            {allProducts.map((product) => (
              <div className="col">
                <div className="card hover-shadow shadow-sm h-100">
                  {/* <div  style={{ height: '300px' }}> */}
                  <img src={product.src} className="card-img-top h-100" alt="..." />
                  {/* </div> */}

                  <div className="card-body d-flex justify-content-between">
                    <div className='d-flex flex-column align-items-start'>
                      <span className='d-flex align-items-center gap-2 mb-2'>
                        <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://w7.pngwing.com/pngs/66/597/png-transparent-hardwood-wood-stain-house-painter-and-decorator-wood-flooring-wood-texture-material-wood-material.png" alt="" />
                        <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://www.arch2o.com/wp-content/uploads/2020/07/Arch2O-65-types-of-wood-every-designer-needs-to-know-about-12-700x467.jpg" alt="" />
                        <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1j49tDgDthAUOSBZ7xmCE9lPHSqPssH8J5zyqsyU66PqNLEJfbaXXZA_PlorbKl83TY&usqp=CAU" alt="" />
                        <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?cs=srgb&dl=pexels-fwstudio-33348-164005.jpg&fm=jpg" alt="" />
                        <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://blenderartists.org/uploads/default/original/3X/0/d/0d147ff8b0193c4e5ecb76308f2f5162c9e1f8ed.jpg" alt="" />
                      </span>
                      <h5 className="mb-0 brand-color-products">{product.name}</h5>
                      <p className="brand-color-products"> {product.price}</p>
                    </div>
                    <div>
                      <img style={{ height: '25px', width: '25px' }} src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>


      {/* <!-- Slider --> */}
      <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active indicator-color" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className='indicator-color'></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className='indicator-color'></button>
        </div>
        <div className="carousel-inner d-flex carousel-bg-gd" style={{ height: '400px' }}>
          <div className="carousel-item d-flex align-items-center justify-content-around">
            <div>
              <p>Luxirius Bed</p>
              <p>Disover Lorem ipsum dolor sit amet consectetur, <br />bradipisicing elit. Architecto eum, <br /> nostrum totam ipsum ea ex expedita,<br /> animi omnis dolor porro voluptatibus quia aut voluptatum</p>
              <p>$299</p>
              <span className='d-flex align-items-center gap-2 mb-2'>
                <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://w7.pngwing.com/pngs/66/597/png-transparent-hardwood-wood-stain-house-painter-and-decorator-wood-flooring-wood-texture-material-wood-material.png" alt="" />
                <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://www.arch2o.com/wp-content/uploads/2020/07/Arch2O-65-types-of-wood-every-designer-needs-to-know-about-12-700x467.jpg" alt="" />
                <img style={{ height: '15px', width: '15px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1j49tDgDthAUOSBZ7xmCE9lPHSqPssH8J5zyqsyU66PqNLEJfbaXXZA_PlorbKl83TY&usqp=CAU" alt="" />
              </span>
              <button className="btn btn-outline-primary button-style">Buy Now</button>
            </div>
            <div>
              <img src={lux_bed} style={{ height: '250px', width: '350px' }} className="" alt="..." />
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      <div className='container text-center mt-4 pt-4'>
        <div className='row mt-4 pt-4'>
          <h2>Blogs & Insights</h2>
          <h5>Explore Our Blog for DesignInspiration and Tips</h5>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='container text-center mt-4 pt-4 '>
          <div className="card-group">
            {blogs.map((blog) => (
              <div className="card me-2 mb-5 hover-shadow shadow-sm">
                <img src={blog.src} className="card-img-top h-100" alt="..." />
                <div className="d-flex position-absolute carousel-cards opacity-75 bg-white p-2 shadow ml-3 h-100 overflow-hidden">
                  <div className='d-flex flex-column justify-content-end m-4'>
                    <h5 className="mb-0">{blog.title}</h5>
                    <p className=""> {blog.desc}</p>
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className="container-fluid carousel-bg-gd mt-5" >
        <div className='container'>
          <footer className="py-5">
            <div className="row" >
              <div className="col-6 col-md-2 mb-3" >
                <h5>Furnilux</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3" >
                <h5>Abouts US</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5>What is Popular</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3" >
                <form>
                  <h5>Get 15% Off your first Order!</h5>
                  <p>Subscribe to our newsletter, Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-outline-primary button-style" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" >
              <p>© 2024 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>

    </div>
  );
}

export default App;
