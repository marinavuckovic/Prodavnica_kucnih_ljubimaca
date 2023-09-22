import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
export const HomePage = () => {
    const navigate = useNavigate();
  
    const goToShopPage = () => {
      navigate('/shop');
    }
    const {user} = useContext(UserContext);
    const goToSellingPage = () => {
    {user?.userId ? (
        navigate('postnewad')
      ) : (
        navigate('/login')
      )}
    }

    return <>
    

    <div className="looking-for-div">
        <p className="home-title">what are you looking for? <br />
        
        <button className="buying-pet-button" onClick={goToShopPage}>buying pet</button>
        <button className="selling-pet-button" onClick ={goToSellingPage}>selling pet</button>
        </p>
      
    </div>

    <div className="browse-categories">
        <h1 className="h-browse-cate">browse categories</h1>
        </div>
    <div className="pets">
        <div className="dogs">
           < NavLink to="/shop/dogs" > <img src="https://www.dailypaws.com/thmb/-p5VyaOMxdnepW4PwgbPqFe_Ba0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rottweiler-headshot-678833089-2000-e87e6d01c6964debad70bedee2094120.jpg" alt="" className="dog-img" />
           <p className="pet-text"> dogs</p>  </NavLink>
        </div>

        <div className="cats">
        < NavLink to="/shop/cats" > <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg" alt="" className="cat-img" />
        <p className="pet-text"> cats</p>  </NavLink>
        </div>

        <div className="birds">
        < NavLink to="/shop/birds" > <img src="https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="bird-img" />
        <p className="pet-text"> birds</p>  </NavLink>
        </div>

        <div className="fish">
        < NavLink to="/shop/fish" > <img src="https://i.guim.co.uk/img/media/508a81fbec626742e8417bdf449df106f61538fc/0_452_4300_2580/master/4300.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=01e153091f75c604c08dc099ed08ae5d" alt="" className="fish-img" />
        <p className="pet-text"> fish</p>  </NavLink>

        </div>

        <div className="rabbit">
        < NavLink to="/shop/rabbit" > <img src="https://t3.ftcdn.net/jpg/02/47/33/08/360_F_247330858_RvSJWAhMbfrqsM5VUmjLD4gzzSKUaJls.jpg" alt="" className="rabbit-img" />
        <p className="pet-text"> rabbit</p>
  </NavLink>
        </div>

        </div>
<div className="post-free-ad">
{/* <img src="https://www.fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876.jpg" alt="" /> */}
<button className="post-free-button" onClick={goToSellingPage}><p className="p-post-add">POST FREE AD</p></button>
</div>



        
       
     
    
    </>
   
}