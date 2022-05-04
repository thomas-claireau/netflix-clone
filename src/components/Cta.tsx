import { useState } from 'react';
import AngleRight from './ui/AngleRight';

export default function Cta() {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur(e: React.FocusEvent<HTMLButtonElement>) {
    setFocus(e.target.value !== '');
  }

  return (
    <div className="mt-10 w-9/12 sm:w-10/12 lg:w-6/12">
      <p className="text-2xl">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
      <form className="flex w-11/12 mx-auto mt-6">
        <div className="relative bg-light w-full h-auto px-3">
          <input id="email" type="email" className={`peer bg-transparent w-full h-full z-100 text-dark outline-none  transition-all ${focus ? 'opacity-100' : 'opacity-0'}`} onFocus={handleFocus} onBlur={handleBlur} />
          <label className={`absolute top-1/2 -translate-y-1/2 left-3  text-gray-100 transition-all ${focus ? 'top-1/4 text-xs' : 'top-1/2'}`} htmlFor="email">Adresse e-mail</label>
          <span className="absolute -bottom-8 left-0 text-orange opacity-0 peer-invalid:opacity-100">
            Veuillez entrer une adresse e-mail valide
          </span>
        </div>
        <button type="submit" className="h-full flex items-center justify-between gap-2 text-3xl py-4 px-6 bg-red">
          Commencer
          {' '}
          <AngleRight className="h-6 w-6 relative top-0.5" />
        </button>
      </form>
    </div>
  );
}
