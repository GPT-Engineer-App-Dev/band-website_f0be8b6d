import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minH="100vh" p={4}>
        {/* Left side with the band image and name */}
        <Box w={{ base: "full", md: "50%" }} p={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kfGVufDB8fHx8MTcxMjU0NDI5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Image" mb={4} />
          <Heading as="h1" size="2xl" textAlign="center">
            The Rockers
          </Heading>
          <Text mt={2} fontSize="xl" textAlign="center">
            Join us on our world tour!
          </Text>
        </Box>

        {/* Right side with call to action */}
        <VStack w={{ base: "full", md: "50%" }} p={5} spacing={4} alignItems="center" justifyContent="center">
          <Heading as="h2" size="lg">
            Upcoming Shows
          </Heading>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid" size="lg">
            View Tour Dates
          </Button>
          <Button leftIcon={<FaTicketAlt />} colorScheme="orange" variant="outline" size="lg">
            Get Tickets
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
