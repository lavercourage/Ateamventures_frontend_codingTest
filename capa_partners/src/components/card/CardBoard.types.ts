export interface ICardBoardProps {
  isConsult: boolean;
  data?: any;
  el?: ICardBoard;
}

export type ICardBoard = {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
};
