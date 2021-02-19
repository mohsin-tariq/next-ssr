
interface Props {
  isLoading: boolean
  text?: string
}

const Fallback = ({ isLoading, text }: Props): JSX.Element => (
  <div className={`fallback ${isLoading ? 'loader': 'error'}`}>
    <h1>{isLoading ? '': (text ? text : 'An issue occured, please try refreshing the page')}</h1>
  </div>
)

Fallback.defaultProps = {
  text: ''
}
export default Fallback;