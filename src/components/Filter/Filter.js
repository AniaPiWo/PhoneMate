import { useDispatch } from 'react-redux';
import { setNameFilterAction } from 'redux/filters/filters.slice';
import { FormLabel, FormControl, Input } from '@chakra-ui/react'

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.value;
    console.log(name);
    dispatch(setNameFilterAction({ name }));
  };

  return (
    <FormControl id="search" display="flex" flexDirection="column" mx="20px">
      <FormLabel fontSize='24px' my="10px" >
        Find contacts by name
        <Input
        w="93%"
          type="text"
          name="filter"
          placeholder="Search..."
          onChange={handleChange}
        />
      </FormLabel>
    </FormControl>
  );
};
