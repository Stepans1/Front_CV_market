import React, {useEffect, useState} from 'react';
import '../styles/Demo.css';
import axios from "axios"; // Import the CSS file properly
import image from "../images/image.png";
import classes from "../styles/main.module.css";
import PostCard from "./PostCard";
const Demo = () => {
    let [posts, setPosts] = useState([]);
    function selectProducts(){
        axios.get('http://localhost:8088/post/getHeaders' )
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        selectProducts();
    }, []);
    return (
        <div>
            <header>
                <div className={"colored"}>
                    <h1 className={"main-header"}>IT Market</h1>
                </div>

                <nav>
                    <ul>
                        <li><a href="#">boss</a></li>
                        <li><a href="#">employy</a></li>
                        <li><a href="#">login</a></li>
                        <li><a href="#">RU</a></li>
                    </ul>
                </nav>
                <div className="search-container">
                    {/*<input type="text" placeholder="Atrasanas vieta" /> /!* Added closing tag for input *!/*/}
                    {/*<input type="text" placeholder="Type" />*/}
                  <label>Pamegini atrast ar atslegvardu</label>
                    <input type="text" placeholder="Atslēgvārds" /> {/* Added closing tag for input */}
                </div>
               <div className="search-container">

                   <select>
                       <option selected value="0">Pure CSS Select</option>
                       <option value="1">No Wrapper</option>
                       <option value="2">No JS</option>
                       <option value="3">Nice!</option>
                   </select>
                   <select>
                       <option selected value="0">Pure CSS Select</option>
                       <option value="1">No Wrapper</option>
                       <option value="2">No JS</option>
                       <option value="3">Nice!</option>
                   </select>
                   <select>
                       <option selected value="0">Pure CSS Select</option>
                       <option value="1">No Wrapper</option>
                       <option value="2">No JS</option>
                       <option value="3">Nice!</option>
                   </select>
                   <select>
                       <option selected value="0">Pure CSS Select</option>
                       <option value="1">No Wrapper</option>
                       <option value="2">No JS</option>
                       <option value="3">Nice!</option>
                   </select>
                   <select>
                       <option selected value="0">Pure CSS Select</option>
                       <option value="1">No Wrapper</option>
                       <option value="2">No JS</option>
                       <option value="3">Nice!</option>
                   </select>
               </div>
            </header>
            <div className="button-container text-box">

                    <button className="btn btn-white btn-animate">Atrast</button>
                    <button className="btn btn-white btn-animate">Filter</button>

                {/*<button className="small-button">filters</button>*/}

            </div>





            <main>

                <section>
                    <h2>kategorijam</h2>
                    {/* Commented out the invalid HTML comment */}
                </section>
                {/*<div className="card">*/}
                {/*    <img src={image} alt="Logo" className="logo"/>*/}
                {/*        <div className="info">*/}
                {/*            <h2 className="title">Название работы</h2>*/}
                {/*            <p className="company">Название компании</p>*/}
                {/*            <p className="location">Местоположение</p>*/}
                {/*        </div>*/}
                {/*        <input type="checkbox" className="checkbox" />*/}
                {/*</div>*/}
                <div className={classes.productList}>
                    {posts.length ?
                        posts.map((post) =>
                            <PostCard key={post.id} id={post.id} post_header={post.post_header} salary={post.salary} post_type={post.post_type} company={post.company}  />

                        )
                        :
                        <p>Product list is empty</p>
                    }
                </div>
            </main>
            <hr/>
        </div>
    );
};

export default Demo;
