import { Card, CardTopSection,InformationContainer, InformationTitle,CardTopLeftSection, Label, Wrapper, LabelValue,BusinessListingContainer  } from "./InformationStyledComponents";

const offersAndGifts = [
    {
      title: "20% off Electronics",
      description: "Get 20% off on all electronics items.",
      startDate: "2023-07-01",
      endDate: "2023-07-15",
      category: "Electronics",
      couponCode: "ELECTRO20"
    },
    {
      title: "Buy One, Get One Free",
      description: "Buy one item and get another one for free.",
      startDate: "2023-06-28",
      endDate: "2023-07-05",
      category: "Fashion",
      couponCode: "BOGOFASHION"
    },
    {
      title: "Free Shipping on Orders Over $50",
      description: "Enjoy free shipping on all orders over $50.",
      startDate: "2023-06-30",
      endDate: "2023-07-31",
      category: "Retail",
      couponCode: "FREESHIP50"
    },
    {
      title: "10% off Spa Services",
      description: "Get 10% off on all spa services.",
      startDate: "2023-07-02",
      endDate: "2023-07-10",
      category: "Beauty",
      couponCode: "SPADEAL10"
    },
    {
      title: "Buy 2, Get 1 Free",
      description: "Buy two items and get one item for free.",
      startDate: "2023-07-05",
      endDate: "2023-07-12",
      category: "Home & Garden",
      couponCode: "B2G1DEAL"
    },
    {
      title: "Special Gift with Purchase",
      description: "Receive a special gift with any purchase over $100.",
      startDate: "2023-06-29",
      endDate: "2023-07-15",
      category: "Gifts",
      couponCode: "GIFT100"
    },
    {
      title: "20% off Dining",
      description: "Enjoy 20% off on all dining experiences.",
      startDate: "2023-07-01",
      endDate: "2023-07-31",
      category: "Food",
      couponCode: "DINE20"
    }
  ];
  
  // Accessing and using the data
  console.log(offersAndGifts[0].title); // Output: "20% off Electronics"
  console.log(offersAndGifts[2].description); // Output: "Enjoy free shipping on all orders over $50."
  console.log(offersAndGifts[4].category); // Output: "Home & Garden"
  console.log(offersAndGifts[6].couponCode); // Output: "DINE20"
  
  
const OAGInformation = () =>  (
    <InformationContainer>
    <InformationTitle>Offers And Gifts</InformationTitle>
    <BusinessListingContainer>
      {offersAndGifts.map((data, index) => (
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
                <Label>Start Date:</Label> <LabelValue>{data.startDate}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>End Date:</Label> <LabelValue>{data.endDate}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Category:</Label> <LabelValue>{data.category}</LabelValue>
              </Wrapper>
              <Wrapper>
                <Label>Coupon Code:</Label> <LabelValue>{data.couponCode}</LabelValue>
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
    </InformationContainer>
  );


export default OAGInformation;
