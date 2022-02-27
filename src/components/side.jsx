
const ListElementSidebar = ({emoji, text}) => {
  return (
    <li className="flex py-1 items-center">
      <i className={emoji}></i><span className="pl-1">{text}</span>
    </li>
  );
};

export const Sidebar = () => {
  return (
    <nav className="flex flex-row md:flex-col">
      <div className="bg-p-teal shadow-xl h-16 fixed bottom-0 text-white md:relative md:h-[calc(100vh_-_3.5rem)] z-10 w-full md:w-60 content-center">
        <div className="md:fixed content-center md:content-start text-left justify-between md:w-60">
          <ul className="list-reset grid grid-flow-col md:grid-flow-row pt-1 px-1 md:px-2 text-center md:text-left items-center">
            <ListElementSidebar emoji="em em-black_joker" text="Cards left: "/>
            <ListElementSidebar emoji="em em-black_joker" text="Cards left: "/>
            <ListElementSidebar emoji="em em-black_joker" text="Cards left: "/>
            <ListElementSidebar emoji="em em-black_joker" text="Cards left: "/>
          </ul>
        </div>
      </div>
    </nav>
  );
}