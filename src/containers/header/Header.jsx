import './header.css'
import  people from '../../assets/people.png'
import ai from '../../assets/ai.png'

export const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          GPT-3 And GPT-4 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Ypur Email address '/>
          <button type='button'> Get Started</button>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='people'/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>

          <div className='gpt3__header-img'>
            <img src={ai} alt='ai'/>
          </div>
        </div>
      </div>
    </div>
  )
}
