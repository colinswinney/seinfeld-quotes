import jerry from "./img/jerry-seinfeld-circle.jpg"
import george from "./img/george-costanza-circle.jpg"
import elaine from "./img/elaine-benes-circle.jpg"
import kramer from "./img/cosmo-kramer-circle.jpg"
import frank from "./img/frank-costanza-circle.jpg"
import dice from "./img/dice.png"

const Routes = [
    {
      path: "/jerry",
      exact: true,
      title: "Jerry",
      navTitle: "Jerry",
      contentClass: "jerry",
      img: jerry
    },
    {
      path: "/george",
      exact: true,
      title: "George",
      navTitle: "George",
      contentClass: "george",
      img: george
    },
    {
      path: "/elaine",
      exact: true,
      title: "Elaine",
      navTitle: "Elaine",
      contentClass: "elaine",
      img: elaine
    },
    {
      path: "/kramer",
      exact: true,
      title: "Kramer",
      navTitle: "Kramer",
      contentClass: "kramer",
      img: kramer
    },
    {
      path: "/other",
      exact: true,
      title: "Other",
      navTitle: "Other",
      contentClass: "other",
      img: frank
    },
    {
      path: "/",
      exact: true,
      title: "Random",
      navTitle: "Random",
      contentClass: "random",
      img: dice
    }
  ];

  export default Routes