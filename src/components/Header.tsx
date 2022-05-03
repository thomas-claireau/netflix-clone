import Netflix from './ui/Netflix';

import Languages from './Languages';
import Login from './Login';

export default function Header() {
  return (
    <header className="absolute w-full flex justify-between items-center pt-[25px] px-[25px] md:px-[55px] z-10">
      <Netflix className="max-w-[80px] sm:max-w-[120px] md:max-w-[140px] fill-red" />
      <div className="flex justify-between items-center gap-5">
        <Languages />
        <Login />
      </div>
    </header>
  );
}
