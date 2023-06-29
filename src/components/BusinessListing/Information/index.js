import { Card, CardTopSection, InformationTitle,CardTopLeftSection, Label, Wrapper, LabelValue,BusinessListingContainer  } from "./InformationStyledComponents";

const businessListings = [
    {
      name: "ABC Company",
      category: "Technology",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      phone: "555-1234",
      website: "https://www.abccompany.com"
    },
    {
      name: "XYZ Restaurant",
      category: "Food",
      address: "456 Elm Street",
      city: "Los Angeles",
      state: "CA",
      zipcode: "90001",
      phone: "555-5678",
      website: "https://www.xyzrestaurant.com"
    },
    {
      name: "123 Fitness Center",
      category: "Health",
      address: "789 Oak Avenue",
      city: "Chicago",
      state: "IL",
      zipcode: "60601",
      phone: "555-9012",
      website: "https://www.123fitnesscenter.com"
    },
    {
      name: "Best Books Store",
      category: "Retail",
      address: "321 Cedar Road",
      city: "San Francisco",
      state: "CA",
      zipcode: "94101",
      phone: "555-3456",
      website: "https://www.bestbooksstore.com"
    },
    {
      name: "Garden Paradise",
      category: "Home & Garden",
      address: "987 Pine Street",
      city: "Seattle",
      state: "WA",
      zipcode: "98101",
      phone: "555-7890",
      website: "https://www.gardenparadise.com"
    },
    {
      name: "Elegant Fashion Boutique",
      category: "Fashion",
      address: "654 Maple Avenue",
      city: "Miami",
      state: "FL",
      zipcode: "33101",
      phone: "555-2345",
      website: "https://www.elegantfashionboutique.com"
    },
    {
      name: "Green Cleaners",
      category: "Services",
      address: "876 Oak Street",
      city: "Austin",
      state: "TX",
      zipcode: "78701",
      phone: "555-6789",
      website: "https://www.greencleaners.com"
    }
  ];
  
  // Accessing and using the data
  console.log(businessListings[0].name); // Output: "ABC Company"
  console.log(businessListings[2].category); // Output: "Health"
  console.log(businessListings[4].address); // Output: "987 Pine Street"
  console.log(businessListings[6].phone); // Output: "555-6789"
  
const Information = () =>  (
    <>
    <InformationTitle>Business Listings</InformationTitle>
    <BusinessListingContainer>
      {businessListings.map((data, index) => (
        <Card key={index}>
          <CardTopSection>
            <CardTopLeftSection>
              <Wrapper>
                <Label>Name:</Label> <LabelValue>{data.name}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Category:</Label> <LabelValue>{data.category}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Phone:</Label> <LabelValue>{data.phone}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Website:</Label> <LabelValue>{data.website}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Address:</Label> <LabelValue>{data.address}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>State:</Label> <LabelValue>{data.state}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>zipcode:</Label> <LabelValue>{data.zipcode}</LabelValue>
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


export default Information;
