import React from 'react'
import { render } from '../testUtils'
import mockResponse from '../__mocks__/mockResponse.json'
import emptyMissionIdMockResponse from '../__mocks__/mockResponseEmptyMissionId.json'

import App from '../../pages/index'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'



describe('Page render snapshots', () => {
  const mockStore = configureStore()
  let store

  it('Renders page with values"', () => {
    const initialState = {
      filter: {
          land_success: 'true',
          launch_success: 'true',
          launch_year: '2004'
      }
    }
    store = mockStore(initialState)
    const { asFragment } = render(<Provider store={store}><App  data={mockResponse}/></Provider>)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Renders page without values"', () => {
    const initialState = {
      filter: {
          land_success: 'false',
          launch_success: 'true',
          launch_year: '2004'
      }
    }
    store = mockStore(initialState)
    const { asFragment } = render(<Provider store={store}><App/></Provider>)
    expect(asFragment()).toMatchSnapshot()
  })

  
  it('Renders page without missionId without Image"', () => {
    const initialState = {
      filter: {
          land_success: '',
          launch_success: '',
          launch_year: ''
      }
    }
    store = mockStore(initialState)
    const { asFragment } = render(<Provider store={store}><App data={emptyMissionIdMockResponse}/></Provider>)
    expect(asFragment()).toMatchSnapshot()
  })
})