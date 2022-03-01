import { Sidebar } from '../side'
import { Blackjack } from '../blackjack'

export const Content = () => {
  return (
    <div className="flex
                    flex-col-reverse
                    w-full
                    h-[calc(100vh-3.5rem)]
                    mt-14
                    md:flex-row">
      <Sidebar/>
      <Blackjack/>
    </div>
  );
}