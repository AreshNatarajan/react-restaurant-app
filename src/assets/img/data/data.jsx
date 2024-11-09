import Bruschetta from './Appetizers/Bruschetta.jpeg'
import Mushrooms from './Appetizers/Mushrooms.jpeg'
import eggs from './Appetizers/Eggs.jpeg'
import skewers from './Appetizers/Skewers.jpeg'
import wigs from './Appetizers/Buffalo.jpeg'
import dip from './Appetizers/Dip.jpeg'
import meatball from './Appetizers/Meatballs.jpeg'
import cocktail from './Appetizers/Shrimp.jpeg'
import rolls from './Appetizers/Spring.jpeg'

//desserts
import cake from './Desserts/Chocolate.jpeg';
import pie from '../data/Desserts/Apple.jpeg'
import cheesecake from '../data/Desserts/Cheesecake.jpeg'
import tiramisu from '../data/Desserts/Tiramisu.jpeg'
import brownie from '../data/Desserts/Brownies.jpeg'
import panna from '../data/Desserts/Panna.jpeg'
import lemon from '../data/Desserts/Meringue.jpeg'
import banofee from '../data/Desserts/Banoffee.jpeg'

// north 
import buttor from '../data/North/Butter.jpeg'
import rogan from '../data/North/Rogan.jpeg'
import northbiriyani from '../data/North/Biryani.jpeg'
import muttonbiriyani from '../data/North/Dum.jpeg'
import makhani from '../data/North/Makhani.jpeg'
import chikekorma from '../data/North/Korma.jpeg'
import vindallo from '../data/North/Vindaloo.jpeg'
import tandoorinorth from '../data/North/Tandoori.jpeg'
import lababdar from '../data/North/Lababdar.jpeg'
import keema from '../data/North/Keema.jpeg'

// startres
import tikka from '../data/Starters/tikka.jpeg'
import malai from '../data/Starters/Malai.jpeg'
import spicywings from '../data/Starters/Spicy.jpeg'
import seekh from '../data/Starters/Kebab.jpeg'
import pakora from '../data/Starters/Pakora.jpeg'
import mutton from '../data/Starters/Muttonsek.jpeg'
import chops from '../data/Starters/Chops.jpeg'
import boti from '../data/Starters/Boti.jpeg'
import kothibri from '../data/Starters/Kothimbir.jpeg'
import shabi from '../data/Starters/Shammi.jpeg'

// cakes 

import chacolate from '../data/Cakes/chocalte.jpeg'
import vanila from '../data/Cakes/Vanilla.jpeg'
import velvet from '../data/Cakes/Velvet.jpeg'
import carrot from '../data/Cakes/Carrot.jpeg'
import lemoncakes from '../data/Cakes/Drizzle.jpeg'
import cheesecakecakes from '../data/Cakes/Cheesecake.jpeg'
import fruite from '../data/Cakes/Fruit.jpeg'
import forest from '../data/Cakes/Forest.jpeg'
import pinapple from '../data/Cakes/Pineapple.jpeg'
import coffee from '../data/Cakes/Coffee.jpeg'

// south 

import chetinad from '../../img/data/South/Chettinad.jpeg'
import hyd from '../../img/data/South/Hyderabadi.jpeg'
import fish from '../../img/data/South/Fish.jpeg'
import muttonCurry from '../../img/data/South/Mutton.jpeg'
import prawn from '../../img/data/South/Prawn.jpeg'
import koth from '../../img/data/South/Parotta.jpeg'
import eggCurry from '../../img/data/South/Egg.jpeg'
import malabar from '../../img/data/South/Malabar.jpeg'
import muttonKorma from '../../img/data/South/Muttonkorma.jpeg'


export const dish = {
    appetizers: [
      {
        id: 1,
        name: "Bruschetta",
        price: 8.99,
        rating: 4.5,
        img: Bruschetta,
        quantity: 0
      },
      {
        id: 2,
        name: "Stuffed Mushrooms",
        price: 9.49,
        rating: 4.7,
        img: Mushrooms,
        quantity: 0
      },
      {
        id: 3,
        name: "Deviled Eggs",
        price: 6.99,
        rating: 4.2,
        img: eggs,
        quantity: 0
      },
      {
        id: 4,
        name: "Caprese Skewers",
        price: 10.99,
        rating: 4.6,
        img: skewers,
        quantity: 0
      },
      {
        id: 5,
        name: "Buffalo Wings",
        price: 12.99,
        rating: 4.8,
        img: wigs,
        quantity: 0
      },
      {
        id: 6,
        name: "Spinach Artichoke Dip",
        price: 11.49,
        rating: 4.5,
        img: dip,
        quantity: 0
      },
      {
        id: 7,
        name: "Meatballs",
        price: 10.49,
        rating: 4.3,
        img: meatball,
        quantity: 0
      },
      {
        id: 8,
        name: "Shrimp Cocktail",
        price: 14.99,
        rating: 4.6,
        img: cocktail,
        quantity: 0
      },
      {
        id: 9,
        name: "Spring Rolls",
        price: 7.99,
        rating: 4.4,
        img: rolls,
        quantity: 0
      }
    ],
    desserts: [
      {
        id: 21,
        name: "Chocolate Cake",
        price: 4.99,
        rating: 4.6,
        img: cake,
        quantity: 0
      },
      {
        id: 22,
        name: "Apple Pie",
        price: 3.99,
        rating: 4.5,
        img: pie,
        quantity: 0
      },
      {
        id: 23,
        name: "Cheesecake",
        price: 5.49,
        rating: 4.7,
        img: cheesecake,
        quantity: 0
      },
      {
        id: 24,
        name: "Tiramisu",
        price: 6.99,
        rating: 4.8,
        img: tiramisu,
        quantity: 0
      },
      {
        id: 25,
        name: "Brownies",
        price: 2.99,
        rating: 4.4,
        img: brownie,
        quantity: 0
      },
      {
        id: 26,
        name: "Panna Cotta",
        price: 5.99,
        rating: 4.5,
        img: panna,
        quantity: 0
      },
      {
        id: 27,
        name: "Lemon Meringue Pie",
        price: 4.49,
        rating: 4.6,
        img: lemon,
        quantity: 0
      },
      {
        id: 28,
        name: "Banoffee Pie",
        price: 4.99,
        rating: 4.7,
        img: banofee,
        quantity: 0
      }
    ],
    north: [
      {
        id: 31,
        name: "Butter Chicken",
        price: 400,
        rating: 4.8,
        img: buttor,
        quantity: 0
      },
      {
        id: 32,
        name: "Rogan Josh",
        price: 450,
        rating: 4.7,
        img: rogan,
        quantity: 0
      },
      {
        id: 33,
        name: "Chicken Biryani",
        price: 350,
        rating: 4.6,
        img: northbiriyani,
        quantity: 0
      },
      {
        id: 34,
        name: "Mutton Dum Biryani",
        price: 500,
        rating: 4.9,
        img: muttonbiriyani,
        quantity: 0
      },
      {
        id: 35,
        name: "Dal Makhani with Tandoori Chicken",
        price: 300,
        rating: 4.5,
        img: makhani,
        quantity: 0
      },
      {
        id: 36,
        name: "Chicken Korma",
        price: 380,
        rating: 4.6,
        img: chikekorma,
        quantity: 0
      },
      {
        id: 37,
        name: "Mutton Vindaloo",
        price: 420,
        rating: 4.4,
        img: vindallo,
        quantity: 0
      },
      {
        id: 38,
        name: "Tandoori Chicken",
        price: 350,
        rating: 4.7,
        img: tandoorinorth,
        quantity: 0
      },
      {
        id: 39,
        name: "Chicken Lababdar",
        price: 370,
        rating: 4.5,
        img: lababdar,
        quantity: 0
      },
      {
        id: 40,
        name: "Keema Methi",
        price: 320,
        rating: 4.3,
        img: keema,
        quantity: 0
      }
    ],
    starters: [
      {
        id: 1,
        name: "Chicken Tikka",
        price: 250,
        rating: 4.5,
        img: tikka,
        quantity: 0
      },
      {
        id: 2,
        name: "Malai Chicken Tikka",
        price: 300,
        rating: 4.7,
        img: malai,
        quantity: 0
      },
      {
        id: 3,
        name: "Spicy Chicken Wings",
        price: 220,
        rating: 4.2,
        img: spicywings,
        quantity: 0
      },
      {
        id: 4,
        name: "Chicken Seekh Kebab",
        price: 280,
        rating: 4.6,
        img: seekh,
        quantity: 0
      },
      {
        id: 5,
        name: "Chicken Pakora",
        price: 200,
        rating: 4.4,
        img: pakora,
        quantity: 0
      },
      {
        id: 6,
        name: "Mutton Seekh Kebab",
        price: 350,
        rating: 4.5,
        img: mutton,
        quantity: 0
      },
      {
        id: 7,
        name: "Mutton Shammi Kebab",
        price: 400,
        rating: 4.6,
        img: shabi,
        quantity: 0
      },
      {
        id: 8,
        name: "Mutton Chops",
        price: 450,
        rating: 4.8,
        img: chops,
        quantity: 0
      },
      {
        id: 9,
        name: "Mutton Boti Kebab",
        price: 370,
        rating: 4.5,
        img: boti,
        quantity: 0
      },
      {
        id: 10,
        name: "Kothimbir Vadi with Mutton",
        price: 250,
        rating: 4.3,
        img: kothibri,
        quantity: 0
      }
    ],
    cakes: [
      {
        id: 400,
        name: "Chocolate Cake",
        price: 500,
        rating: 4.8,
        img: chacolate,
        quantity: 0
      },
      {
        id: 401,
        name: "Vanilla Sponge Cake",
        price: 450,
        rating: 4.6,
        img: vanila,
        quantity: 0
      },
      {
        id: 402,
        name: "Red Velvet Cake",
        price: 600,
        rating: 4.7,
        img: velvet,
        quantity: 0
      },
      {
        id: 403,
        name: "Carrot Cake",
        price: 480,
        rating: 4.5,
        img: carrot,
        quantity: 0
      },
      {
        id: 404,
        name: "Lemon Drizzle Cake",
        price: 520,
        rating: 4.4,
        img: lemoncakes,
        quantity: 0
      },
      {
        id: 405,
        name: "Cheesecake",
        price: 550,
        rating: 4.9,
        img: cheesecakecakes,
        quantity: 0
      },
      {
        id: 406,
        name: "Fruit Cake",
        price: 600,
        rating: 4.3,
        img: fruite,
        quantity: 0
      },
      {
        id: 407,
        name: "Black Forest Cake",
        price: 580,
        rating: 4.6,
        img: forest,
        quantity: 0
      },
      {
        id: 408,
        name: "Pineapple Cake",
        price: 450,
        rating: 4.5,
        img: pinapple,
        quantity: 0
      },
      {
        id: 409,
        name: "Coffee Cake",
        price: 480,
        rating: 4.5,
        img: coffee,
        quantity: 0
      }
    ],
    south : [
      {
          id: 200,
          name: "Chettinad Chicken Curry",
          price: 450,
          rating: 4.7,
          img: chetinad,
          quantity: 0
      },
      {
          "id": 201,
          "name": "Hyderabadi Biryani",
          "price": 500,
          "rating": 4.9,
          "img": hyd,
          quantity: 0
      },
      {
          "id": 202,
          "name": "Fish Curry (Kerala-style)",
          "price": 350,
          "rating": 4.6,
          "img": fish,
          quantity: 0
      },
      {
          "id": 203,
          "name": "Mutton Curry (Andhra-style)",
          "price": 420,
          "rating": 4.5,
          "img": muttonCurry,
          quantity: 0
      },
      {
          "id": 205,
          "name": "Prawn Masala",
          "price": 480,
          "rating": 4.8,
          "img": prawn,
          quantity: 0
      },
      {
          "id": 206,
          "name": "Kothu Parotta (with Chicken or Mutton)",
          "price": 320,
          "rating": 4.3,
          "img": koth,
          quantity: 0
      },
      {
          "id": 207,
          "name": "Egg Curry (Tamil-style)",
          "price": 250,
          "rating": 4.2,
          "img": eggCurry,
          quantity: 0
      },
      {
          "id": 208,
          "name": "Malabar Fish Fry",
          "price": 370,
          "rating": 4.5,
          "img": malabar,
          quantity: 0
      },
      {
          "id": 209,
          "name": "Mutton Korma",
          "price": 400,
          "rating": 4.6,
          "img": muttonKorma,
          quantity: 0
      }
  ]
  };
  

