import { IdefaultValue } from "./types";

export const SERVICE_MESSAGES = {
  services: 'services',
  ourRooms: 'Our Rooms',
  luxuriousRooms: 'luxurious rooms',
  deluxRooms: 'delux rooms starting at $299',
  returnHome: 'return home',
  pageNotFound: 'Page not found',
  featuredRooms: 'Featured Rooms',
  loading: 'rooms data loading',
  singleRoom: 'single room',
  perNight: 'per night',
  features: 'Features',
  noFound: 'no such room could be found...',
  backToRooms: 'Back to rooms',
  room: 'room',
  details: 'details',
  info: 'info',
  price: 'price : $',
  size: 'size : $',
  SQFT: 'SQFT',
  maxCapacity: 'Max Capacity',
  petsAllowed: 'Pets Allowed',
  noPetsAllowed: 'No Pets Allowed',
  extras: 'Extras',
  people: 'people',
  person: 'person',
  brekfast: 'free breakfast included',
  noSearchParameters: 'unfortunately no rooms matched your search parameters',
}

export const Title_Services = {
  cocktails: 'Free cocktails',
  endless: 'Endless Hiking',
  shuttle: 'Free shuttle',
  beer: 'Strongest Beer',
}

export const FILTER_MESSAGES = {
  searchRooms: 'Search Rooms',
  roomType: 'Room Type',
  guest: 'Guest',
  roomPrice: 'Room Price $',
  roomSize: 'Room Size',
  breakfast: 'Breakfast',
  pets: 'Pets',
  single: 'single',
  double: 'double',
  family: 'family',
  presidential: 'presidential',
  all: 'all',
}

export const defaultImg =
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  function getR() {
    return {
      name: "",
      slug: "",
      type: "",
      price: 0,
      size: 0,
      capacity: 0,
      pets: true,
      breakfast: true,
      featured: true,
      description: "",
      extras: [],
      images: [],
      id: "",
    };
  }

  function hchange (){
  }
  export const defaultValue: IdefaultValue = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    getRoom: getR,
    type: FILTER_MESSAGES.all,
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    handleChange: hchange,
  };

