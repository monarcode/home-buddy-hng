import { TProduct } from "@/types/shared";

export const CLEARANCE_SALES: TProduct[] = [
  {
    id: "1",
    name: "Open Bookshelf",
    price: 59890,
    oldPrice: 112874,
    rating: 0,
    discount: 39,
    image: "Open Bookshelf",
    type: "clearance",
  },
  {
    id: "2",
    name: "Grandpa's Couch",
    price: 30800,
    oldPrice: 38500,
    rating: 0,
    discount: 5,
    image: "Grandpa's Couch",
    type: "clearance",
  },
  {
    id: "3",
    name: "Nomadic Clay Vase",
    price: 9890,
    oldPrice: 12874,
    rating: 0,
    discount: 19,
    image: "Nomadic Clay Vase",
    type: "clearance",
  },
  {
    id: "4",
    name: "Ocean Blue Seat",
    price: 50800,
    oldPrice: 68500,
    rating: 0,
    discount: 20,
    image: "Ocean Blue Seat",
    type: "clearance",
  },
  {
    id: "5",
    name: "Raffia Pattern Table",
    price: 108253,
    oldPrice: 152874,
    rating: 0,
    discount: 39,
    image: "Raffia Pattern Table",
    type: "clearance",
  },
  {
    id: "6",
    name: "Minimal Vases",
    price: 30800,
    oldPrice: 38500,
    rating: 0,
    discount: 5,
    image: "Minimal Vases",
    type: "clearance",
  },
  {
    id: "7",
    name: "Summer Dinner Table",
    price: 39890,
    oldPrice: 42874,
    rating: 0,
    discount: 19,
    image: "Summer Dinner Table",
    type: "clearance",
  },
  {
    id: "8",
    name: "Family of Three Table",
    price: 18253,
    oldPrice: 19874,
    rating: 0,
    discount: 20,
    image: "Family of Three Table",
    type: "clearance",
  },
];

const NORDIC_TABLES: TProduct[] = [
  {
    id: "1",
    name: "Beige-Wood Table",
    price: 38253,
    oldPrice: 52874,
    rating: 4.32,
    discount: 39,
    image: "Beige-Wood Table",
    type: "nordic",
  },
];

export const DATA = {
  clearance: CLEARANCE_SALES,
  nordic: NORDIC_TABLES,
};
