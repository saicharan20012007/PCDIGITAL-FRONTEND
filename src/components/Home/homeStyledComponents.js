import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import {IoBusinessSharp} from 'react-icons/io5';
import {IoGiftSharp} from 'react-icons/io5'
import {MdOutlineClass} from 'react-icons/md'
import {MdBusinessCenter} from 'react-icons/md'
import {IoRestaurantSharp} from 'react-icons/io5'
import {MdTravelExplore} from 'react-icons/md'
import {FaCcVisa} from 'react-icons/fa'
import {FaGraduationCap,FaRegNewspaper} from 'react-icons/fa'
import {FaBookOpen} from 'react-icons/fa'
import {BsShop} from 'react-icons/bs'
import {LuArrowUpDown} from 'react-icons/lu'
import {BsBank2} from 'react-icons/bs'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {FaBlogger} from 'react-icons/fa'
import {GiVacuumCleaner} from 'react-icons/gi'
import {FaPlaneArrival} from 'react-icons/fa'
import {MdPlumbing} from 'react-icons/md'
import {HiOutlineDevicePhoneMobile} from 'react-icons/hi2'
import {SiTrustpilot} from 'react-icons/si'
import {GiTeacher} from 'react-icons/gi'
import {MdRealEstateAgent} from 'react-icons/md'
import {IoMdPhotos} from 'react-icons/io'
import {BiMoviePlay} from 'react-icons/bi'
import {MdSportsCricket} from 'react-icons/md'
import {MdAddHomeWork} from 'react-icons/md'
import {BiCameraMovie} from 'react-icons/bi'
import {BsBank} from 'react-icons/bs'
import {MdNightlife} from 'react-icons/md'
import {TbMovie} from 'react-icons/tb'
import {TbStethoscope} from 'react-icons/tb'
import {MdBookOnline} from 'react-icons/md'
import {FaMusic} from 'react-icons/fa'
import {RiCalendarEventFill} from 'react-icons/ri'
import {FaLaptopCode} from 'react-icons/fa'
import {GiProgression} from 'react-icons/gi'
import {MdOutlineElectricalServices} from 'react-icons/md'
import {GiGardeningShears} from 'react-icons/gi'
import {MdElectricBolt} from 'react-icons/md'
import {RiComputerLine} from 'react-icons/ri'
import {BsMortarboard} from 'react-icons/bs'
import {GiCommercialAirplane} from 'react-icons/gi'
import {TbSteeringWheel} from 'react-icons/tb'
import {AiTwotoneInsurance} from 'react-icons/ai'
import {MdOutlineAccountBox} from 'react-icons/md'
export const HeaderContainer = styled.div`
border-color:blue;
min-height:100px;
display:flex;
justify-content:space-between;
align-items:center;`

export const Logo = styled.img`
height:80px;
margin:20px;`

export const LocationLanguage = styled.h2`
color:black;
font-size:20px;
margin:20px;`

export const HomeMainContainer = styled.div`
min-height:100vh;
margin-right:0px !important;
display:flex;`

export const LeftContainer = styled.div`
min-height:100vh;
background-color:rgb(13, 15, 124);
width:370px;`
export const RightContainer = styled.div`
min-height:100vh;
background-color: #edf5f3 ;
width:370px;`

export const MiddleContainer = styled.div`
min-height:100vh;
background-color:white;
width:100%;
`

export const CorousalContainer = styled.div`
max-width:300px !important;
margin-right:-100 !important;`
export const ADImg = styled.img`
height:500px;
max-width:300px;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  height:50px;
  justify-content:space-between;
  margin:30px;
  border-radius:15px;
  cursor:pointer;
`;


export const SearchInput = styled.input`
  border: none;
  outline: none;
  width:85%;
  font-size: 18px;
  margin-left:5px;
`;

export const SearchIcon = styled(FaSearch)`
  color: #666;
  font-size: 30px;
  align-self:right;
  margin-right:15px;
`;

export const BusinessAndServicesContainer = styled.div`
width:275px;
text-align:center;
min-height:500px;
margin:5px;

`
export const InfoAndEduContainer = styled.div`
width:275px;
text-align:center;
min-height:50px;
margin:5px;

`
export const BusinessTitle = styled.h3`
color: #006699;
font-size:20px;
font-weight:400px;

 `

 export const InformationTitle = styled.h3`
color: #339933;
font-size:20px;
font-weight:400px;

 `

 export const MediaAndEntertainmentTitle = styled.h3`
color: #FF9900 ;
font-size:20px;
font-weight:400px;

 `
 export const HealthAndWellnessTitle = styled.h3`
color: #CC0066  ;
font-size:20px;
font-weight:400px;

 `
 export const BusinessItem = styled.div`
 border: 2px solid #ccc;
 height:45px;
 margin-left:10px;
 margin-right:10px;
 border-radius:7px;
 display:flex;
 flex-direction:row;
 align-items:center;
 font-weight:600;
 margin-bottom:10px;`

export const BusinessIcon1 = styled(IoBusinessSharp)`
color:#006699;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const BusinessIcon2 = styled(IoGiftSharp)`
color:#006699;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const BusinessIcon3 = styled(MdOutlineClass)`
color:#006699;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const BusinessIcon4 = styled(MdBusinessCenter)`
color:#006699;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const BusinessIcon5 = styled(IoRestaurantSharp)`
color:#006699;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const TravelIcon = styled(MdTravelExplore)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const VisaIcon = styled(FaCcVisa)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const ServicesContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;`

export const EducationIcon = styled(FaGraduationCap)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const StudyIcon = styled(FaBookOpen)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const AiToolIcon = styled(GiArtificialIntelligence)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const TrainingIcon = styled(GiTeacher)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
`



export const BlogsIcon = styled(FaBlogger)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`

export const PhotosVideosLogo = styled(IoMdPhotos)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`

export const NewsIcon = styled(FaRegNewspaper)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`

 
export const EntertainmentIcon = styled(BiMoviePlay)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`

export const MoviesIcon = styled(BiCameraMovie)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`

export const OTTIcon = styled(TbMovie)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`

export const MusicIcon = styled(FaMusic)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`

export const SportsIcon = styled(MdSportsCricket)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF9900;
`
export const HealthIcon = styled(TbStethoscope)`
color:#339933;
font-size:20px;
margin-left:10px;
margin-right:10px;
color: #CC0066 ;
`
export const StratupIcon = styled(GiProgression)`
color:#9900CC;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const CouncilIcon = styled(GiTeacher)`
color:#8B0000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const TechnologyAndInnovationTitle = styled.h3`
color: #9900CC  ;
font-size:20px;
font-weight:400px;

 `

 export const SpiritualityLifestyleTitle = styled.h3`
color: #FF00CC   ;
font-size:20px;
font-weight:400px;

 `

 export const TechIcon = styled(FaLaptopCode)`
 color:#9900CC;
font-size:20px;
margin-left:10px;
margin-right:10px;
 `

 export const SpiritualityIcon = styled(MdNightlife)`
color:;
font-size:20px;
margin-left:10px;
margin-right:10px;
color:#FF00CC;
`
export const UtilitiesTitle = styled.h3`
color: black ;
font-size:30px;
font-weight:400px;
margin-left:100px;
text-decoration:underline;
 `

 export const HomeIcon = styled(MdAddHomeWork)`
color:#00008B;
font-size:20px;
margin-left:10px;
margin-right:10px;`

export const RealestateIcon = styled(MdRealEstateAgent)`
color:#00008B;
font-size:20px;
margin-left:10px;
margin-right:10px;`



export const HousingTitle = styled.h3`
color: #00008B;
font-size:20px;
font-weight:400px;
 `
 export const HomeServiceTitle = styled.h3`
 color: #008000;
 font-size:20px;
 font-weight:400px;
  `
 export const CleanersIcon = styled(GiVacuumCleaner)`
 color:#008000;
font-size:20px;
margin-left:10px;
margin-right:10px;
 `
export const PlumberIcon = styled(MdPlumbing)`
color:#008000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const ElecticianIcon = styled(MdOutlineElectricalServices)`
color:#008000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const GardeningIcon = styled(GiGardeningShears)`
color:#008000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const ElectricityIcon = styled(MdElectricBolt)`
color:#00FFFF;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const EventIcon = styled(RiCalendarEventFill)`
color:#800000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const ChatityIcon = styled(SiTrustpilot)`
color:#800000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const  MobileIcon= styled(HiOutlineDevicePhoneMobile)`
color:#00FFFF;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const UACTitle = styled.h3`
color: #00FFFF;
font-size:20px;
font-weight:400px;
`

export const InternetIcon = styled(LuArrowUpDown)`
color:#00FFFF;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const TVIcon  = styled(RiComputerLine)`
color:#00FFFF;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const GALSTitle = styled.h3`
color:  #8B0000;
font-size:20px;
font-weight:400px;
`

export const GSTitle = styled.h3`
color:  #8B4513;
font-size:20px;
font-weight:400px;
` 

export const FlyPlaneIcon  = styled(GiCommercialAirplane)`
color:#8B0000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const LandPlaneIcon  = styled(FaPlaneArrival)`
color:#8B0000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const DrivingLisenseIcon  = styled(TbSteeringWheel)`
color:#8B0000;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const OnlineIcon = styled(MdBookOnline)`
color:#8B4513;
font-size:20px;
margin-left:10px;
margin-right:10px;


`

export const ECTitle = styled.h3`
color:  #800000;
font-size:20px;
font-weight:400px;
`

export const FBTitle = styled.h3`
color:  #800080;
font-size:20px;
font-weight:400px;
`

export const OfflineIcon = styled(BsShop)`
color:#8B4513;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const FinanceIcon = styled(BsBank)`
color:#800080;
font-size:20px;
margin-left:10px;
margin-right:10px;
`


export const BankIcon = styled(BsBank2)`
color:#800080;
font-size:20px;
margin-left:10px;
margin-right:10px;
`
export const InsuranceIcon = styled(AiTwotoneInsurance)`
color:#800080;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const MortIcon = styled(BsMortarboard)`
color:#800080;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const AccountantIcon = styled(MdOutlineAccountBox)`
color:#800080;
font-size:20px;
margin-left:10px;
margin-right:10px;
`

export const ADIMGC = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end`