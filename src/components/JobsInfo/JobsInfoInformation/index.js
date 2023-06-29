import { Card, CardTopSection, InformationTitle,CardTopLeftSection, Label, Wrapper, LabelValue,BusinessListingContainer  } from "./InformationStyledComponents";

const jobListings = [
    {
      title: "Software Developer",
      company: "ABC Tech",
      location: "New York",
      salary: "$80,000 - $100,000",
      description: "We are seeking a skilled software developer to join our team...",
      requirements: ["Bachelor's degree in Computer Science", "2+ years of experience in JavaScript", "Familiarity with React and Node.js"]
    },
    {
      title: "Marketing Specialist",
      company: "XYZ Marketing Agency",
      location: "Los Angeles",
      salary: "$60,000 - $80,000",
      description: "We are looking for a talented marketing specialist to...",
      requirements: ["Bachelor's degree in Marketing or related field", "3+ years of experience in digital marketing", "Strong analytical skills"]
    },
    {
      title: "Data Analyst",
      company: "Data Analytics Inc.",
      location: "San Francisco",
      salary: "$70,000 - $90,000",
      description: "We are hiring a data analyst to help us analyze...",
      requirements: ["Bachelor's degree in Statistics or related field", "Proficiency in SQL and data visualization tools", "Strong problem-solving skills"]
    },
    {
      title: "Graphic Designer",
      company: "Creative Solutions",
      location: "Chicago",
      salary: "$50,000 - $70,000",
      description: "We are seeking a creative and talented graphic designer...",
      requirements: ["Bachelor's degree in Graphic Design or related field", "Proficiency in Adobe Creative Suite", "Strong portfolio showcasing design skills"]
    },
    {
      title: "Sales Representative",
      company: "Global Sales Corp",
      location: "Miami",
      salary: "$40,000 - $60,000",
      description: "We are hiring a sales representative to promote and sell...",
      requirements: ["Excellent communication and negotiation skills", "Proven track record in sales", "Ability to build and maintain client relationships"]
    },
    {
      title: "Human Resources Manager",
      company: "HR Solutions Ltd.",
      location: "Seattle",
      salary: "$90,000 - $110,000",
      description: "We are looking for an experienced HR manager to...",
      requirements: ["Bachelor's degree in Human Resources or related field", "5+ years of HR management experience", "Knowledge of employment laws and regulations"]
    },
    {
      title: "Customer Support Specialist",
      company: "SupportPro Inc.",
      location: "Austin",
      salary: "$35,000 - $45,000",
      description: "We are seeking a dedicated customer support specialist...",
      requirements: ["Strong communication and problem-solving skills", "Experience in customer service or help desk support", "Ability to multitask and work in a fast-paced environment"]
    }
  ];
  
  // Accessing and using the data
  console.log(jobListings[0].title); // Output: "Software Developer"
  console.log(jobListings[2].company); // Output: "Data Analytics Inc."
  console.log(jobListings[4].salary); // Output: "$40,000 - $60,000"
  console.log(jobListings[6].requirements); // Output: ["Strong communication and problem-solving skills", "Experience in customer service or help desk support", "Ability to multitask and work in a fast-paced environment"]
  
  
 
  
  
const JobsInfoInformation = () =>  (
    <>
    <InformationTitle>Jobs Info</InformationTitle>
    <BusinessListingContainer>
      {jobListings.map((data, index) => (
        <Card key={index}>
          <CardTopSection>
            <CardTopLeftSection>
              <Wrapper>
                <Label>Title:</Label> <LabelValue>{data.title}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Company:</Label> <LabelValue>{data.company}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Location:</Label> <LabelValue>{data.location}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Salary:</Label> <LabelValue>{data.salary}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Description: </Label> <LabelValue>{data.description}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Requirements: </Label> <LabelValue>{data.requirements}</LabelValue>
              </Wrapper>
              
              
              {/* Add more fields as needed */}
            </CardTopLeftSection>
            {/* <CardTopRightSection> */}
             
        
              {/* Add more fields as needed */}
            {/* </CardTopRightSection> */}
          </CardTopSection>
          {/* Add more sections and fields as needed */}
        </Card>

      ))}
      </BusinessListingContainer>
    </>
  );


export default JobsInfoInformation;
