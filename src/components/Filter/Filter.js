import { useDispatch } from 'react-redux';
import { setNameFilterAction } from 'redux/filters/filters.slice';
import { Box, Input, FormLabel, FormControl, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from '@chakra-ui/react'; 

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.value;
    console.log(name);
    dispatch(setNameFilterAction({ name }));
  };

  return (
    <Accordion  allowToggle>
    <AccordionItem backgroundColor='#805AD5'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' color='white' fontSize='24px'    backgroundColor='#805AD5'>
        Find contacts by name
        </Box>
        <AccordionIcon color='white' />
        </AccordionButton>
         <AccordionPanel pb={4}>
        <Box>
        <FormControl id="search" display="flex" flexDirection="column">
           <FormLabel fontSize='24px' my="10px" color='white'>
          <Input
            _placeholder={{ color: 'white' }}        
            type="text"
            name="filter"
            placeholder="Search..."
            onChange={handleChange}
        />
        </FormLabel>
        </FormControl>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>


  );
};
