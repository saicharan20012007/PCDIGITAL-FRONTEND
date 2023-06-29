import {Link} from 'react-router-dom'

import {
    HeaderContainer,MortIcon,ElecticianIcon,ADImg,ADIMGC,AccountantIcon,CorousalContainer,EventIcon,BankIcon,InsuranceIcon,FinanceIcon,FBTitle,ChatityIcon,OfflineIcon,ECTitle,GSTitle,DrivingLisenseIcon,LandPlaneIcon,FlyPlaneIcon,OnlineIcon,GALSTitle,TVIcon,MobileIcon,CouncilIcon,InternetIcon,
    ElectricityIcon,
    TechIcon,
    
    TrendingDes,
    HousingTitle,
    TrendingTitle,
    PlusIcon1,
    LinkIcon,
    GardeningIcon,
    CleanersIcon,
    UACTitle,
    InfoIcon1,
    RealestateIcon,
    PlumberIcon,
    HomeServiceTitle,
    UtilitiesTitle,
    HomeIcon,
    PhotosVideosLogo,
    InfoAdd,
    SpiritualityIcon,
    SpiritualityLifestyleTitle,
    HealthIcon,
    InfoIcon2,
    PlusIcon2,
    PlusIcon3,
    InfoIcon3,
    TechnologyAndInnovationTitle,
    StratupIcon,
    HealthAndWellnessTitle,
    MusicIcon,
    OTTIcon,
    SportsIcon,
    MoviesIcon,
    EntertainmentIcon,
    LogoTitle,
    NewsIcon,
    InfoAndEduContainer,
    MediaAndEntertainmentTitle,
    TrainingIcon,
    AiToolIcon,
    EducationIcon,
    VisaIcon,
    TravelIcon,
    InformationTitle,
    StudyIcon,
    LocationLanguage,
    ServicesContainer,
    BusinessIcon1,
    BusinessIcon5,
    BusinessIcon4,
    BusinessIcon3,
    BusinessIcon2,
    HomeMainContainer,
    LeftContainer,
    BusinessItem,
    RightContainer,
    BusinessTitle,
    MiddleContainer,
    BusinessAndServicesContainer,
    SearchContainer,
    SearchInput,
    SearchIcon,
    BlogsIcon
  } from './homeStyledComponents';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next'; // Import the translation hook
const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { t, i18n } = useTranslation(); // Initialize the translation hook

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang); // Change the language using the i18n object
  };

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'bn', label: 'Bengali' },
    { value: 'ta', label: 'Tamil' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'te', label: 'Telugu' },
    { value: 'kn', label: 'Kannada' },
    { value: 'mr', label: 'Marathi' },
    { value: 'pa', label: 'Punjabi' },
    { value: 'ar', label: 'Arabic' },
    { value: 'ro', label: 'Romanian' },
    { value: 'uk', label: 'Ukrainian' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'pt', label: 'Portuguese' },
  ];



  const settings = {
    dots: false,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  return (
    <>
      <HeaderContainer>
        <LogoTitle>PC DIGITAL</LogoTitle>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon />
        </SearchContainer>
        <LocationLanguage>
          {t('')} UK | London | {/* Translate the static text */}
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </LocationLanguage>
      </HeaderContainer>
    <HomeMainContainer>
    <LeftContainer>
    <TrendingTitle>Trending Search </TrendingTitle>
    <TrendingDes>Best restaurants near me <LinkIcon/></TrendingDes>
    <TrendingDes>Top vacation destinations <LinkIcon/></TrendingDes>
    <TrendingDes>New Movies Releases <LinkIcon/></TrendingDes>
    <TrendingDes>Healthy recipes <LinkIcon/> </TrendingDes>

    <TrendingTitle>Trending News </TrendingTitle>
    <TrendingDes>Global Leaders Gather for Climate Change Summit <LinkIcon/></TrendingDes>
    <TrendingDes>New Study Reveals Alarming Decline in Bee Populations<LinkIcon/></TrendingDes>
    <TrendingDes>Tech Giant Unveils Next-Generation Smartphone <LinkIcon/></TrendingDes>


    </LeftContainer>
    <MiddleContainer>
   

      <ServicesContainer>
    <BusinessAndServicesContainer>
        <BusinessTitle>Business and Services</BusinessTitle>
        <BusinessItem>
      <BusinessIcon1/> Business Listing <InfoAdd>  <Link to='/BusinessListingInformation'><InfoIcon1/> </Link> <PlusIcon1/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon2/> Offers/gifts <InfoAdd><Link to='/OffersAndGiftsInformation'><InfoIcon1/> </Link><PlusIcon1/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon3/> Classifieds <InfoAdd> <Link to = '/ClassifiedsInformation'> <InfoIcon1/> </Link> <PlusIcon1/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon4/> Jobs info <InfoAdd> <Link to = '/JobsInfoInformation'><InfoIcon1/> </Link><PlusIcon1/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon1/> SMBS <InfoAdd><InfoIcon1/> <PlusIcon1/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <BusinessIcon5/> Restaurants <InfoAdd><InfoIcon1/> <PlusIcon1/></InfoAdd>
        </BusinessItem>
    </BusinessAndServicesContainer>


    <InfoAndEduContainer>
        <InformationTitle>Information and Education</InformationTitle>
        <BusinessItem>
       <TravelIcon/> Travel <InfoAdd><InfoIcon2/> <PlusIcon2/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <VisaIcon/> Visa Info <InfoAdd><InfoIcon2/> <PlusIcon2/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <EducationIcon/> Education Info <InfoAdd><InfoIcon2/> <PlusIcon2/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <StudyIcon/> Learning tools <InfoAdd><InfoIcon2/> <PlusIcon2/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <AiToolIcon/> AI tools <InfoAdd><InfoIcon2/> <PlusIcon2/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <TrainingIcon/> Trainings <InfoAdd><InfoIcon2/> <PlusIcon2/></InfoAdd>
        </BusinessItem>
    </InfoAndEduContainer>
    <InfoAndEduContainer>
        <MediaAndEntertainmentTitle>Media And Entertainment</MediaAndEntertainmentTitle>
        <BusinessItem>
       <BlogsIcon/> Blogs <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <PhotosVideosLogo/> Stock Photos / Videos <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <NewsIcon/> News  <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <EntertainmentIcon/>  Entertainment  <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <MoviesIcon/> Movies <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <OTTIcon/> OTT  <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <MusicIcon/> Music  <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
        </BusinessItem>
        <BusinessItem>
       <SportsIcon/> Sports <InfoAdd><InfoIcon3/> <PlusIcon3/></InfoAdd>
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
    <Slider {...settings}>
  <ADIMGC>
    <a href='https://www.prabisha.co.uk/' rel='noreferrer' target='_blank'>
      <ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420840/Ad4_babkso.png' alt="ad1" />
    </a>
  </ADIMGC>
  <ADIMGC>
    <a href='https://www.prabisha.co.uk/' rel='noreferrer' target='_blank'>
      <ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420817/Ad3_mno9wu.png' alt="ad2" />
    </a>
  </ADIMGC>
  <ADIMGC>
    <a href='https://www.prabisha.co.uk/' rel='noreferrer' target='_blank'>
      <ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420806/Ad2_gzakvh.png' alt='ad3' />
    </a>
  </ADIMGC>
  <ADIMGC>
    <a href='https://www.prabisha.co.uk/' rel='noreferrer' target='_blank'>
      <ADImg src='https://res.cloudinary.com/dlovqnrza/image/upload/v1687420790/Ad1_vnoegz.png' alt='ad4' />
    </a>
  </ADIMGC>
</Slider>

</CorousalContainer>

    </RightContainer>

    </HomeMainContainer>
       </>

)
            }

export default Home;