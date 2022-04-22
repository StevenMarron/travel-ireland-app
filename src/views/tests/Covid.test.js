import axios from 'axios';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Covid from "../../components/CovidCasesAPI";

configure({ adapter: new Adapter() });
jest.mock('axios')

test('renders search results', async () => {
  const wrapper = mount(<Covid />)

  const cases = [
    {name: "Dublin"}
  ]
  const resp = {data: cases}

  await axios.get.mockResolvedValueOnce(resp)

  
})
