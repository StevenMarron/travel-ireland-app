import axios from 'axios';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Accommodation from "../../components/AccommodationAPI";

configure({ adapter: new Adapter() });
jest.mock('axios')

test('renders search results', async () => {
  const wrapper = mount(<Accommodation />)

  const activities = [
    {name: "The Westin Dublin", web_pages: ['http://www.thewestindublin.com/']}
  ]
  const resp = {data: Accommodation}

  await axios.get.mockResolvedValueOnce(resp)

  wrapper.find("input").at(0).simulate('change', {target: {value: "Ireland"}})

  
})