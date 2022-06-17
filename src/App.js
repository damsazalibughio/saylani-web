import './App.css';
import Navbar from './components/Navbar';
import SaylaniCard from './components/SaylaniCard';
import Slider from './components/Slider';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import Aos from 'aos';
import TitleIcon from './components/TitleIcon';
import MonthlyWorkCard from './components/MonthlyWorkCard';
import UpComProjectMiniCard from './components/UpComProjectMiniCard';
import ImageGallery from './components/ImageGallery';
import {RiArrowUpSLine} from "react-icons/ri"


function App() {
 
  Aos.init({duration:2000});
  
  return (
    <div className="">
      <Navbar/>
      <Slider/>    
      {/* introduction */}
      <section className='introduction mb-5'>       
        <TitleIcon titleOne={'INTRO'} titleTwo={'DUCTION'} imgLink={'../favicon.png'} />

        <div className="container saylani-container" >
          <p  data-aos="fade-left">
          Established in May 1999 by famous spiritual and religious scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor, giving people a chance to live a dignified life and spreading happiness.
          </p>
          <p  data-aos="fade-right">
            We are an organization that believes in lighting up the lives of underprivileged people across the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark. With over 60 different sectors, we feed thousands of hungry people each day, hundreds more are given the hope of life through medical health care, many are educated to become leaders of tomorrow and several are given the opportunity to stand on their feet financially.
          </p>
          <p  data-aos="fade-left">
            Today, we are proud to say that our physical presence extends throughout Pakistan with a vast network of 125 branches operating in major cities including Karachi, Lahore, Islamabad, Rawalpindi, Hyderabad and Faisalabad. Apart from Pakistan, we have overseas offices in the UK, USA and UAE as well. Our worldwide branches are operating under the guidance of a team of over 3,500 working professionals who help almost 150,000 people on a daily basis.
          </p>
          <p  data-aos="fade-right">
            We strongly believe that a little help goes a long way and our work would not be possible without the generous support of our valuable donors. Our local and international donors have graciously lent us a hand by supporting our causes and enabling us to serve the needs of people in need.
          </p>           
        </div>
      </section>

      {/* montly work */}
      <section className='monthly-work-box d-flex align-items-center' >         
        <div className="container">
          <div className="row">
          <MonthlyWorkCard title={'DAILY DASTRAKHAN'} imgLink={'../food.png'} animateCard={'fade-up'} monthlyData={'150,000'} />
          <MonthlyWorkCard title={'FAMILY ADOPTION'} imgLink={'../family.png'} animateCard={'fade-down'} monthlyData={'8,500'} />
          <MonthlyWorkCard title={'MEDICAL'} imgLink={'../medical.png'} animateCard={'fade-up'} monthlyData={'53,765'} />
          <MonthlyWorkCard title={'EDUCATION'} imgLink={'../education_png.png'} animateCard={'fade-down'} monthlyData={'180,000'} />
          </div>
        </div>
     
      </section>

      <section className='our-objectives'>     
      <TitleIcon titleOne={'What We'} titleTwo={'Are Doing'} imgLink={'../favicon.png'} />
      
      <div class="container" >
        <div class="row">             
          <SaylaniCard title={'ONLINE SADQAH'}  imgLink={'../sadqah.png'} animateCard ={'fade-right'}/>
          <SaylaniCard title={'WELFARE'}  imgLink={'../welfare.png'} animateCard ={'fade-down'}/>
          <SaylaniCard title={'MEDICAL'}  imgLink={'../medical2.png'} animateCard ={'fade-left'}/>
          <SaylaniCard title={'DASTARKHWAN'}  imgLink={'../sadqah.png'} animateCard ={'fade-right'}/>
          <SaylaniCard title={'RO PLANT'}  imgLink={'../roplant.png'} animateCard ={'fade-up'}/> 
          <SaylaniCard title={'EDUCATION'}  imgLink={'../education2.png'} animateCard ={'fade-left'}/>

        </div>
      </div> 
      </section>

      <section className='upcoming-projects bg-white'>
      <div className="container my-5">
           
        
        <div className="row">         
          <div className="col-lg-8 col-md-12 mt-5">
          <h3 className='text-primary mb-3'>MISSION & UPCOMING PROJECTS </h3>
          <div className='line-style'></div>
            <div className="row mt-3">             
            <UpComProjectMiniCard title={'HEPATITIS'} imgLink={'../hepatitis.png'} alt={'Hepatitis'}  animateCard ={'fade-left'} />
            <UpComProjectMiniCard title={'HOUSING SOCIETY'} imgLink={'../housing.png'} alt={'HOUSING SOCIETY'}  animateCard ={'fade-right'} />
            <UpComProjectMiniCard title={'IT LITERACY'} imgLink={'../it.png'} alt={'IT LITERACY'}  animateCard ={'fade-left'} />
            <UpComProjectMiniCard title={'THARPARKAR'} imgLink={'../tharparkar.png'} alt={'THARPARKAR'}  animateCard ={'fade-right'} />
            </div>
          </div>

          <div className="col-lg-4 col-md-12  my-5">
            <h3 className="text-primary"> Upcoming Events</h3>
            <div className='line-style'></div>
            <div className="mx-3" >
              <marquee behavior="scroll" direction="up" scrollamount="2" width="60%" height='250px'>
                <p>Saylani Welfare Distributing Ration & Clothes to affected people of Balochistan .More Details</p>
                <p>Entry Test Accouncement (Graphic Designing & Video Editing/Animation Course) On Sunday 3rd March 2019 @ 11:00Am Vanue: 4rh Floor, Saylani Welfare International Trust HeadOffice Bahadurabad .More Details</p>
                <p>PIAIC Entrance Exam Merit Ranking List Announced.More Details</p>
                <p>President of Pakistan (Dr. Arif Alvi) Visited Saylani Welfare International Trust HeadOffice Karachi. More Details</p>
                <p>Dr Jamil Ahmed (Additional Inspector General of Police) & Atiqmir Visit Saylani Welfare International Trust, Saylani Mass I.T. Training .More</p>
              
              </marquee>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className ='image-gallery'>
     
      <TitleIcon titleOne={'Image'} titleTwo={'Gallery'} imgLink={'../favicon.png'} />

      <div className='container my-5'>
       <div className="row">
       <ImageGallery imgLink={'../rashan2.jpg'} alt={'rashan2'} />
       <ImageGallery imgLink={'../hazrat.jpg'} alt={'hazrat'} />
       <ImageGallery imgLink={'../food.jpg'} alt={'food'} />
       <ImageGallery imgLink={'../hazrat2.jpg'} alt={'hazrat2'} />       
       </div>
      </div>
      </section>   
       
      <Footer/>
      <a class="scrollToTop " href="# " style={{display: "block"}}>
       <RiArrowUpSLine size='50' color='white'/>
      </a>
    </div>
  );
}

export default App;
