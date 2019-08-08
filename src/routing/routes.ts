import HeroList from 'components/Hero/HeroList';
import HeroProfile from 'components/Hero/HeroProfile';
import NoMatch from 'components/NoMatch';
import Root from 'components/Root';

const routes = [
  {
    path: '/',
    component: Root,
    routes: [
      {
        path: '/heros',
        component: HeroList,
        routes: [
          {
            path: '/heros/:heroId',
            component: HeroProfile,
          },
        ],
      },
    ],
  },
  {
    component: NoMatch,
  },
];

export default routes;
