import React from 'react'

const Inspiration = () => {
  return (
    // <section className="inspiration py-5">
    //       <div className="container">
    //         <div className="row align-items-center">
    //           <div className="col-md-4">
    //             <h2 className="inspiration-title">Inspiration for your room.</h2>
    //             <p className="inspiration-description">
    //               Ignite your creativity with our room inspiration collection.
    //               Explore endless design possibilities for your perfect space.
    //             </p>
    //           </div>
    //           <div className="col-md-8">
    //             <img src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/8e80c521-f47e-47db-950e-7d794f5fb025?placeholderIfAbsent=true" alt="Room inspiration" className="w-100" />
    //           </div>
    //         </div>
    //       </div>
    // </section>
    <section className="inspiration-section py-5 px-4 px-lg-5 inspisec">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-start gap-4">
      <div className="flex-shrink-0" style={{ minWidth: "240px", width: "305px" }}><br /><br /><br /><br /><br /><br />
      <h1 className="inspiration-heading m-0">
        Inspiration for your office
      </h1>
      <p className="inspiration-description mt-5 mb-0">
        Ignite your creativity with our room inspiration collection. Explore endless design possibilities for your perfect space.
      </p>
    </div>


        {/* <InspirationImage src="https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/c86e8104-1653-46ba-94f9-bc50a252317d?placeholderIfAbsent=true" /> */}
        <figure className="">
      <img
        src='https://www.floydsuk.com/wp-content/uploads/2021/06/Page-36-Main-500x500.jpg'
        alt="Room inspiration"
        className="inspiration-image"
      />
    </figure>
      </div>
    </div>
  </section>
  )
}

export default Inspiration
