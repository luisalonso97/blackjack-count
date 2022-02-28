import * as R from 'ramda';

const HOME_TITLE = 'Blackjack counting';

// bit.ly links to check interaction
// TODO: create custom link shortener?
const SOCIALS = [
  { url: 'https://bit.ly/3soFRrY', icon: 'fa-brands fa-twitter-square' },
  { url: 'https://bit.ly/3HqVHGE', icon: 'fa-brands fa-linkedin' },
  { url: 'https://bit.ly/3Hrc71T', icon: 'fa-brands fa-github-square' }
];

const Link = ({url, icon}) => {
  return (
    <span className="px-2 sm:px-3 transition ease-in hover:animate-wiggle">
      <a href={url} target="_blank"><i className={icon}></i></a>
    </span>
  );
};

const LinkContainer = ({links = SOCIALS}) => {
  return (
      <div className="flex w-1/4 h-full justify-end text-white">
        <span className="flex items-center justify-end text-xl text-bold">
          { R.map(link_obj => Link(link_obj), links) }
        </span>
      </div>
  );
};

const HomeTitle = ({title = HOME_TITLE}) => {
  return (
    <div className="flex w-3/4 h-full justify-start text-white">
      <span className="flex pl-1 items-center text-lg md:text-xl">
        <i className="text-2xl transition ease-in delay-150 hover:animate-wiggle em em-black_joker"></i>
        <span className="pl-2 font-bold">{title}</span>
      </span>
    </div>
  );
}

export const Navbar = () => {
  return (
    <nav className="bg-p-dark-navy p-2 mt-0 fixed flex flex-row w-full h-14 z-10 top-0">
      <div className="flex items-center w-full">
        <HomeTitle/>
        <LinkContainer/>
      </div>
    </nav>
  );
};
