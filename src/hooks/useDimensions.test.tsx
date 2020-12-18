/* eslint-env jest */
import { render, screen, waitFor } from '@testing-library/react'
import { getMockedDimensions, mockGetBoundingClientRect } from 'lib/testHelpers'
import useDimensions from './useDimensions/hook'

const height = 28
const width = 150
const mockedDimensions = getMockedDimensions({
  height,
  width,
  left: 408,
  right: 558,
  top: 208,
  bottom: 236
})

let mockedFunction = null

beforeEach(() => {
  mockedFunction = mockGetBoundingClientRect(mockedDimensions)
})

afterEach(() => {
  jest.resetAllMocks()
})

const Component = () => {
  const [ref, dimensions] = useDimensions({ liveMeasure: true })

  return (
    <div ref={ref} style={{ width, height }}>
      <p>{JSON.stringify(dimensions)}</p>
    </div>
  )
}

describe('<UseDimensions />', () => {
  test('Calls getBoundingClientRect and returns mocked dimensions', async () => {
    render(<Component />)

    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.height.toString()))).toBeTruthy())
    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.width.toString()))).toBeTruthy())
    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.top.toString()))).toBeTruthy())
    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.bottom.toString()))).toBeTruthy())
    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.left.toString()))).toBeTruthy())
    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.right.toString()))).toBeTruthy())
    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.x.toString()))).toBeTruthy())
    await waitFor(() => expect(screen.getByText(new RegExp(mockedDimensions.y.toString()))).toBeTruthy())
    await waitFor(() => expect(mockedFunction).toHaveBeenCalled())
  })
})
