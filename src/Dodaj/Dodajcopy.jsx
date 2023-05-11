
import {useParams} from 'react-router-dom'
import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useFetch1 } from '../useFetch1'
import './Dodaj.css'
import { useLocation } from "react-router";
import axios from "axios";




const Dodaj = () => {
    const {data1} = useFetch1()
    const {id} = useParams();
    const [pokaz, setPokaz] = useState(id);
    const location = useLocation();

    const [post1, setPost1] = useState([]);
    const [title, setTitle] = useState({});
    const [opis, setOpis] = useState({});
    const [desc, setDesc] = useState({});
    const [bodzce, setBodzce] = useState([]);
    const [ratingSlaby, setRatingSlaby] = useState([]);
    const [ratingSzczesliwy, setRatingSzczesliwy] = useState([]);
    const [ratingRozgniewany, setRatingRozgniewany] = useState([]);
    const [ratingSmutny, setRatingSmutny] = useState([]);
    const [ratingLekliwy, setRatingLekliwy] = useState([]);
    const [ratingZniesmaczony, setRatingZniesmaczony] = useState([]);
    const [ratingZaskoczony, setRatingZaskoczony] = useState([]);

    const path = location.pathname.split("/")[2];



 useEffect(() => {
  const getPost1 = async () => {
    const res = await axios.get("/posts/");
    setPost1(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc); 
    setOpis(res.data.opis); 
    setBodzce(res.data.bodzce); 
    setRatingSlaby(res.data.ratingSlaby);  
    setRatingSzczesliwy(res.data.ratingSzczesliwy); 
    setRatingRozgniewany(res.data.ratingRozgniewany); 
    setRatingSmutny(res.data.ratingSmutny);  
    setRatingLekliwy(res.data.ratingLekliwy); 
    setRatingZniesmaczony(res.data.ratingZniesmaczony);    
    setRatingZaskoczony(res.data.ratingZaskoczony);  
  };
  getPost1();
}, [path]);


 return (
    
<div className='cocktail'>

   
       {post1.filter(osoba => osoba._id === path).map(filteredPerson => (
        <article key={filteredPerson._id} className="dodaj">
            <div className='cocktail-footer'>
              <h5>{filteredPerson.title}</h5>
              <p >{filteredPerson.desc}</p>
              <p >{filteredPerson.opis}</p>
              <p >{filteredPerson.bodzce}</p>

      {filteredPerson.title === "Rozgniewany"  && <> {filteredPerson.ratingRozgniewany} </>}
   {filteredPerson.title === "Szczęśliwy"  && <>{filteredPerson.ratingSzczesliwy} </> }
{filteredPerson.title === "Słaby"  && <>{filteredPerson.ratingSlaby} </>  }
{filteredPerson.title === "Smutny"  && <> {filteredPerson.ratingSmutny} </>}
   {filteredPerson.title === "Lękliwy"  && <>{filteredPerson.ratingLekliwy} </> }
{filteredPerson.title === "Zniesmaczony"  && <>{filteredPerson.ratingZniesmaczony} </>  }
{filteredPerson.title === "Zaskoczony"  && <>{filteredPerson.ratingZaskoczony} </>  }
              
              
             
              <h5>{new Date(filteredPerson.createdAt).toLocaleDateString()}</h5>
              <Link to={`/`} className='btn btn-primary btn-details'>Powrót</Link>
            </div>
          
          </article>
          
      ))}
       
        
        
   
</div>
      
    
  )
}

export default Dodaj



//albo
{/*useEffect(() => {
  const getPost1 = async () => {
    const res = await axios.get("/posts/" + path);
    setPost1(res.data);
   console.log(res)    
  };
  getPost1();
}, [path]);


{posts.map((filteredPerson) => (
        <div className='cocktail-footer'>
             
                <p>{filteredPerson.username}</p>
             
              <p >{filteredPerson.title}</p>
              <p >{filteredPerson.desc}</p>
              <Link to={`/`} className='btn btn-primary btn-details'>Powrót</Link>
            </div>
      ))}

*/}