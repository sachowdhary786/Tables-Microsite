export interface DataTableTypes {
  id: string;
  tableHeader: string;
  active: boolean;
  name: string;
  created: Date;
  sources: number;
  target: number;
  "7 Day ACoS": number;
  "7 Day Sales": number;
  "30 Day ACoS": number;
  "30 Day Sales": number;
  run: Date;
  status: string;
}