import { IQuote } from '../api/quotes'
import { FiRefreshCw } from 'react-icons/fi'

export const Quote = ({ author, content, handleClick }: IQuote) => {
  return (
    <div className="quote">
      <div className="content">
        <div className="refresh" onClick={handleClick}>
          <FiRefreshCw size={24} />
        </div>
        ❝{content}❞
      </div>
      <div className="author">{author}</div>
    </div>
  )
}
