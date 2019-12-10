import React from 'react';
import './Cards.css';



function Cards() {
  console.log(process);
  console.log(process.env);
  console.log(process.env.PUBLIC_URL);
return(
      
  <div>
    <section>
      <div className="card">
        <img className="card-img-top" src={process.env.PUBLIC_URL+'/img/agnodice.png'} />
        <div className="card-body">
          <h5 className="card-title">Marine</h5>
        </div>
      </div>
    </section>
    

    <section>
      <div className="card">
        <img className="card-img-top" src={process.env.PUBLIC_URL+'/img/AnnetteKellerman.png'} />
        <div className="card-body">
          <h5 className="card-title">Camille</h5>
        </div>
      </div>
    </section>

    <section>
      <div className="card">
        <img className="card-img-top" src={process.env.PUBLIC_URL+'/img/NellyBly.png'} />
        <div className="card-body">
          <h5 className="card-title">Peggy</h5>
        </div>
      </div>
    </section>

    <section>
      <div className="card">
        <img className="card-img-top" src={process.env.PUBLIC_URL+'/img/wuzetian.png'} />
        <div className="card-body">
          <h5 className="card-title">Sue</h5>
        </div>
      </div>
    </section>
  </div> 
)};

export default Cards;



      