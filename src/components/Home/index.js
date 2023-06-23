import {HeaderContainer,MortIcon,ElecticianIcon,ADImg,ADIMGC,AccountantIcon,CorousalContainer,EventIcon,BankIcon,InsuranceIcon,FinanceIcon,FBTitle,ChatityIcon,OfflineIcon,ECTitle,GSTitle,DrivingLisenseIcon,LandPlaneIcon,FlyPlaneIcon,OnlineIcon,GALSTitle,TVIcon,MobileIcon,CouncilIcon,InternetIcon,ElectricityIcon,TechIcon,HousingTitle,GardeningIcon,CleanersIcon,UACTitle,RealestateIcon,PlumberIcon,HomeServiceTitle,UtilitiesTitle,HomeIcon,PhotosVideosLogo,SpiritualityIcon,SpiritualityLifestyleTitle,HealthIcon,TechnologyAndInnovationTitle ,StratupIcon,HealthAndWellnessTitle,MusicIcon,OTTIcon,SportsIcon,MoviesIcon,EntertainmentIcon,NewsIcon,InfoAndEduContainer,MediaAndEntertainmentTitle,TrainingIcon,AiToolIcon,EducationIcon,VisaIcon,TravelIcon,InformationTitle,StudyIcon, Logo,LocationLanguage,ServicesContainer,BusinessIcon1,BusinessIcon5, BusinessIcon4, BusinessIcon3,BusinessIcon2,HomeMainContainer,LeftContainer,BusinessItem, RightContainer,BusinessTitle, MiddleContainer,BusinessAndServicesContainer,  SearchContainer, SearchInput, SearchIcon, BlogsIcon} from './homeStyledComponents';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
const Home = () => (
    <>
    <HeaderContainer>
    <Logo src="https://www.prabisha.co.uk/wp-content/uploads/2022/09/PC-Logo-NEW-for-Website-Page-PNG-1-300x140.png" alt="Logo"/>
    <LocationLanguage>UK | London | English</LocationLanguage>
    </HeaderContainer>
    <HomeMainContainer>
    <LeftContainer>
    </LeftContainer>
    <MiddleContainer>
    <SearchContainer>
        <SearchInput type="text" placeholder="Search" />
        <SearchIcon />
      </SearchContainer>

      <ServicesContainer>
    <BusinessAndServicesContainer>
        <BusinessTitle>Business and Services</BusinessTitle>
        <BusinessItem>
       <BusinessIcon1/> Business Listing
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon2/> Offers/gifts
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon3/> Classifieds
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon4/> Jobs info
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon1/> SMBS 
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon5/> Restaurants
        </BusinessItem>
    </BusinessAndServicesContainer>


    <InfoAndEduContainer>
        <InformationTitle>Information and Education</InformationTitle>
        <BusinessItem>
       <TravelIcon/> Travel
        </BusinessItem>
        <BusinessItem>
       <VisaIcon/> Visa Info
        </BusinessItem>
        <BusinessItem>
       <EducationIcon/> Education Info
        </BusinessItem>
        <BusinessItem>
       <StudyIcon/> Learning tools
        </BusinessItem>
        <BusinessItem>
       <AiToolIcon/> AI tools
        </BusinessItem>
        <BusinessItem>
       <TrainingIcon/> Trainings
        </BusinessItem>
    </InfoAndEduContainer>
    <InfoAndEduContainer>
        <MediaAndEntertainmentTitle>Media And Entertainment</MediaAndEntertainmentTitle>
        <BusinessItem>
       <BlogsIcon/> Blogs
        </BusinessItem>
        <BusinessItem>
       <PhotosVideosLogo/> Stock Photos / Videos
        </BusinessItem>
        <BusinessItem>
       <NewsIcon/> News 
        </BusinessItem>
        <BusinessItem>
       <EntertainmentIcon/>  Entertainment
        </BusinessItem>
        <BusinessItem>
       <MoviesIcon/> Movies
        </BusinessItem>
        <BusinessItem>
       <OTTIcon/> OTT
        </BusinessItem>
        <BusinessItem>
       <MusicIcon/> Music
        </BusinessItem>
        <BusinessItem>
       <SportsIcon/> Sports
        </BusinessItem>
    </InfoAndEduContainer>
    <InfoAndEduContainer>
    <HealthAndWellnessTitle>Health And Wellness</HealthAndWellnessTitle>
        <BusinessItem>
       <HealthIcon/> Health and Wellness
        </BusinessItem>
        
        </InfoAndEduContainer>

        <InfoAndEduContainer>
    <TechnologyAndInnovationTitle>Technology And Innovation</TechnologyAndInnovationTitle>
        <BusinessItem>
       <StratupIcon/> Startup
        </BusinessItem>
        
        <BusinessItem>
       <TechIcon/> Tech
        </BusinessItem>
        
        </InfoAndEduContainer>

        <InfoAndEduContainer>
    <SpiritualityLifestyleTitle>Spirituality and Lifestyle</SpiritualityLifestyleTitle>
        <BusinessItem>
       <SpiritualityIcon/> Spirituality
        </BusinessItem>
        
        </InfoAndEduContainer>


        
        

</ServicesContainer>
        <UtilitiesTitle>Utilities</UtilitiesTitle>
        <ServicesContainer>
        

        <InfoAndEduContainer>
    <HomeServiceTitle>Home Services</HomeServiceTitle>
        <BusinessItem>
       <CleanersIcon/> Cleaners
        </BusinessItem>
        
        <BusinessItem>
       <PlumberIcon/> Plumbers
        </BusinessItem>

         
        <BusinessItem>
       <ElecticianIcon/> Electricians
        </BusinessItem>
        <BusinessItem>
       <GardeningIcon/> Gardeners
        </BusinessItem>
        
        </InfoAndEduContainer>

        

        <InfoAndEduContainer>
    <UACTitle>Utilities And Communication</UACTitle>
        <BusinessItem>
       <ElectricityIcon/> Electricity
        </BusinessItem>
        
        <BusinessItem>
       <MobileIcon/> Mobile
        </BusinessItem>

         
        <BusinessItem>
       <InternetIcon/> Internet
        </BusinessItem>
        <BusinessItem>
       <TVIcon/> Tv
        </BusinessItem>
        
        </InfoAndEduContainer>

        <InfoAndEduContainer>
    <GALSTitle>Government Services</GALSTitle>
        <BusinessItem>
       <CouncilIcon/> Council Services
        </BusinessItem>
        <BusinessItem>
        <FlyPlaneIcon/> Traveling to India
        </BusinessItem>
       
        <BusinessItem>
       <LandPlaneIcon/> Traveling from India
        </BusinessItem>
        <BusinessItem>
       <DrivingLisenseIcon/> Driver's License (DL)
        </BusinessItem>
        
        </InfoAndEduContainer>
        <InfoAndEduContainer>
    <HousingTitle>Housing Services</HousingTitle>
        <BusinessItem>
       <HomeIcon/> Tolet (Rental Properties)
        </BusinessItem>
        
        <BusinessItem>
       <RealestateIcon/> Brokers (Real Estate Agents)
        </BusinessItem>
        
        </InfoAndEduContainer>

        <InfoAndEduContainer>
    <GSTitle>Indian Grocery Stores</GSTitle>
        <BusinessItem>
       <OnlineIcon/> Online
        </BusinessItem>
        
        <BusinessItem>
       <OfflineIcon/> Offline (physical stores)
        </BusinessItem>
        
        </InfoAndEduContainer>

        <InfoAndEduContainer>
    <ECTitle>Events and Charities</ECTitle>
        <BusinessItem>
       <EventIcon/> Events
        </BusinessItem>
        
        <BusinessItem>
       <ChatityIcon/> Charities
        </BusinessItem>
        
        </InfoAndEduContainer>

        <InfoAndEduContainer>
    <FBTitle>Finance and Banking</FBTitle>
        <BusinessItem>
       <FinanceIcon/> Finance and Banking
        </BusinessItem>
        
        <BusinessItem>
       <BankIcon/> Bank Account
        </BusinessItem>

        <BusinessItem>
       <InsuranceIcon/> Insurance
        </BusinessItem>

        <BusinessItem>
       <MortIcon/> Mortgage
        </BusinessItem>
        
        <BusinessItem>
       <AccountantIcon/> Accountant
        </BusinessItem>
        
        </InfoAndEduContainer>
        </ServicesContainer>



    </MiddleContainer>
    <RightContainer>
    <CorousalContainer>
<Slider {...settings} >
<ADIMGC>
<ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420840/Ad4_babkso.png' alt="ad1"/>
</ADIMGC>
<ADIMGC><ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420817/Ad3_mno9wu.png' alt="ad2"/></ADIMGC>
<ADIMGC>
<ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420806/Ad2_gzakvh.png' alt='ad3'/></ADIMGC>
<ADIMGC><ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420790/Ad1_vnoegz.png' alt='ad4'/></ADIMGC>

</Slider>
</CorousalContainer>

    </RightContainer>

    </HomeMainContainer>
    </>

)

export default Home;