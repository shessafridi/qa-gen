import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { allFaqs } from '../data/qa';
import { Faq } from './../models/faq';

const Faqs: NextPage = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    setFaqs([...allFaqs]);
  }, []);

  return (
    <>
      <main>
        {faqs.map(f => (
          <div key={f.question} className='faq'>
            <h1 className='question'>{f.question}</h1>
            <p className='asnwer'>{f.answer}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default Faqs;
