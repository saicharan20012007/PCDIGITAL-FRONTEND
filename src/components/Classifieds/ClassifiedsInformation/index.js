import { Card, CardTopSection, InformationTitle,CardTopLeftSection, Label, Wrapper, LabelValue,BusinessListingContainer  } from "./InformationStyledComponents";

const classifieds = [
    {
      title: "Apartment for Rent",
      description: "Spacious 2-bedroom apartment for rent in a prime location.",
      price: 1200,
      category: "Real Estate",
      location: "New York"
    },
    {
      title: "Used Car for Sale",
      description: "2018 Honda Civic in excellent condition. Low mileage, single owner.",
      price: 15000,
      category: "Automobiles",
      location: "Los Angeles"
    },
    {
      title: "Job Opening: Software Engineer",
      description: "We are hiring a software engineer with experience in JavaScript and React.",
      price: 0,
      category: "Jobs",
      location: "San Francisco"
    },
    {
      title: "Gently Used Furniture for Sale",
      description: "Sofa, coffee table, and dining set available. Good condition.",
      price: 500,
      category: "Home & Garden",
      location: "Chicago"
    },
    {
      title: "Tutoring Services",
      description: "Experienced tutor offering math and science tutoring for high school students.",
      price: 30,
      category: "Services",
      location: "Miami"
    },
    {
      title: "Pets for Adoption",
      description: "Cute kittens and puppies looking for a loving home.",
      price: 0,
      category: "Pets",
      location: "Seattle"
    },
    {
      title: "Free Stuff Giveaway",
      description: "Various items available for free. Pick up only.",
      price: 0,
      category: "Miscellaneous",
      location: "Austin"
    }
  ];
  
  // Accessing and using the data
  console.log(classifieds[0].title); // Output: "Apartment for Rent"
  console.log(classifieds[2].description); // Output: "We are hiring a software engineer with experience in JavaScript and React."
  console.log(classifieds[4].price); // Output: 30
  console.log(classifieds[6].location); // Output: "Austin"
  
  
 
  
  
const ClassifiedsInformation = () =>  (
    <>
    <InformationTitle>Classifieds</InformationTitle>
    <BusinessListingContainer>
      {classifieds.map((data, index) => (
        <Card key={index}>
          <CardTopSection>
            <CardTopLeftSection>
              <Wrapper>
                <Label>Title:</Label> <LabelValue>{data.title}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Description:</Label> <LabelValue>{data.description}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Price:</Label> <LabelValue>{data.price}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Category:</Label> <LabelValue>{data.category}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Location: </Label> <LabelValue>{data.location}</LabelValue>
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


export default ClassifiedsInformation;
