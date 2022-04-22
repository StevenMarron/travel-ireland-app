import axios from 'axios';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Activities from "../../components/ActivitiesAPI";

configure({ adapter: new Adapter() });
jest.mock('axios')

test('renders search results', async () => {
  const wrapper = mount(<Activities />)

  const activities = [
    {name: "Arnotts", web_pages: ['https://www.arnotts.ie']}
  ]
  const resp = {data: activities}

  await axios.get.mockResolvedValueOnce(resp)

  wrapper.find("input").at(0).simulate('change', {target: {value: "Ireland"}})


})

