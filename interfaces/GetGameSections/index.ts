export interface getCategoryItem {
  _id: string;
  name: string;
  __v: number;
}

export interface getItemGame {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: getCategoryItem;
}

export interface getAllGamesProps{
  getItems:getItemGame[]
}
