import { Sidebar } from '../side'
import { Blackjack } from '../blackjack'

export const Content = () => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-14">
      <Sidebar/>
      {/* <Blackjack/> */}
    </div>
  );
}