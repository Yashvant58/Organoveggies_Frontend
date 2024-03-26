import {Link} from 'react-router-dom';
import Footer from './Footer.js';
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Blog(prop) {

    const navigate=useNavigate();
      // eslint-disable-next-line
    const [userData,setUserData]=useState("");
    const callAboutPage=async()=>{
    try{
        const res=await fetch(`${prop.baseUrl}/blog`,{
          method:"GET",
          headers:{
            Accept:"apllication/json",
            "Content-Type":"application/json"
          },
          mode:"cors",
          credentials:"include"
        });
        const data=await res.json();
        
        setUserData(data);
        if(!res.status===200){
          const error =new Error(res.error);
          throw error;
        }
            }
            catch (err){
            //   navigate('/signin')
            }
        }
            useEffect(() => {
                callAboutPage()
              })
  return (
 <>
<div className="heading">
    <h1>Our Blogs</h1>
    <p> <Link className="link"to="/home">Home &gt;&gt;</Link> Blogs </p>
</div>

<section className="blogs">

    <h1 className="title"> Our <span>Blogs</span> <Link to="/blog">View All &gt;&gt;</Link> </h1>

    <div className="box-container">

        <div className="box">
            <div className="image">
                <img src="./image/blog-1.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <Link to="/blog"> <i className="fas fa-calendar"></i> 10th Aug, 2019 </Link>
                    <Link to="/blog"> <i className="fas fa-user"></i> By Admin </Link>
                </div>
                <h3>Whole Wheat Flour vs Regular Wheat Flour – Here’s what’s Healthier</h3>
                <p>White flour is what most people reach for first when they go shopping, and it is the star ingredient in a variety of baked goods and bread. However, not all flours are made equal. White flour is manufactured from refined and processed wheat grains, so the nutritional value is a little low. Whole-wheat flour is prepared from crushed wheat kernels and incorporates every part of the bran. The wheat germ and bran give the flour a deeper color and higher nutritional value.</p>
                <Link to="/blog" className="btn">Read More</Link>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="./image/blog-2.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <Link to="/blog"> <i className="fas fa-calendar"></i> 02nd July, 2020 </Link>
                    <Link to="/blog"> <i className="fas fa-user"></i> By Admin </Link>
                </div>
                <h3>Is Black Salt Better than Regular Salt? Uses and Health Benefits</h3>
                <p>Himalayan Black salt is unlike any other salt. It has a very distinct taste, and looks different too. Himalayan Black salt is first produced as Pink Salt, which is a form of rock salt. The Himalayan Pink Salt is then treated with herbs, seeds, and spices and finally heated to high temperatures to bring out its unique taste.Black salt is extensively used in various dishes and street foods.
                    Black salt helps enhance the flavour of chaat thanks to its in-depth flavor profile.</p>
                <Link to="/blog" className="btn">Read More</Link>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="./image/blog-3.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <Link to="/blog"> <i className="fas fa-calendar"></i> 13th Dec, 2020 </Link>
                    <Link to="/blog"> <i className="fas fa-user"></i> By Admin </Link>
                </div>
                <h3>Organic vs Non Organic Food Facts</h3>
                <p>Often, we come across this question – what is organic food and why is it better than regular food? The answer is simple, the term ‘organic’ refers to the way the food is produced. Organic means lesser or no use of chemicals, no preservatives, no artificial flavour or fertilizers, etc. In order for food to be labelled as organic, they must be free of chemicals and additives.

                    No pesticides or added chemicals,Nitrate levels are lower,Rich in Nutrition,It’s worth every rupee in Organic foods. </p>
                <Link to="/blog" className="btn">Read More</Link>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="./image/blog-4.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <Link to="/blog"> <i className="fas fa-calendar"></i> 19th Oct, 2021 </Link>
                    <Link to="/blog"> <i className="fas fa-user"></i> By Admin </Link>
                </div>
                <h3>Can Diabetic People Consume Ragi Everyday?</h3>
                <p>Ragi or in other words Finger Millets from ancient times, is a food of choice for millions of Indians. From ragi mudde (ragi balls) in Karnataka, to bhakri in Maharashtra, or even the contemporary ragi biscuits consumed in various places across India, finger millet is consumed in many forms. What’s great about ragi is that it has a distinct taste and is loaded with nutrients.The health benefits of ragi are many, but we would like to highlight how ragi is a perfect food grain for diabetics and why they should add ragi to their everyday diet.</p>
                <Link to="/blog" className="btn">Read More</Link>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="./image/blog-5.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <Link to="/blog"> <i className="fas fa-calendar"></i> 11th Jan, 2023 </Link>
                    <Link to="/blog"> <i className="fas fa-user"></i> By Admin </Link>
                </div>
                <h3>Going Back To Our Roots</h3>
                <p>Have you ever wondered how food gets on your plate?

                    It’s quite difficult to understand the long, mysterious journey from underneath the ground right up to the grocery store and onto your kitchen table.
                    
                    After a lot of researching, soul-searching, speaking to people, digging up facts and understanding the bigger picture, we assure that switching to an organic lifestyle could easily be the single-most effective way to curb physical and mental health problems and help in creating a sustainable universe.First things first, let’s try to comprehend the necessary internal.</p>
                <Link to="/blog" className="btn">Read More</Link>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src="./image/blog-6.jpg" alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <Link to="/blog"> <i className="fas fa-calendar"></i> 17th Mar, 2023 </Link>
                    <Link to="/blog"> <i className="fas fa-user"></i> By Admin </Link>
                </div>
                <h3>Benefits of Organic Pulses</h3>
                <p>Pulses have numerous amount of benefits attached to it. To make your diet a healthy one, include a lot of pulses into it. They are high in fibre and thus help in easy digestion and keep the bowel function normal. It helps in lowering blood cholesterol and maintains the required level of insulin and glucose in the body. It helps ward off cardiovascular diseases and diabetes.  Most of the pulses contain antioxidants and phytoestrogens that help prevent hormone-related cancers. Pulses are completely gluten-free thus happy treats for your tummy. Apart from these.</p>
                <Link to="/blog" className="btn">Read More</Link>
            </div>
        </div>
       

    </div>

</section>
<div className="whatsapp">
    <Link to="https://wa.me/917905938368 " target="_blank"><img src="./image/whatsapp.png" width="50px" alt=""/></Link>
</div>


<Footer/>
<section className="credit">© 2024,Mr.Yashvant Prajapati E-commerce Website || All rights reserved.</section>

 </>
  )
}

export default Blog