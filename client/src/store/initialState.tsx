import { IAppState, IPlayer } from "../interfaces";

const initialState: IAppState = {
  players: {
    players: new Array<IPlayer>(),
    loading: false,
  },
  query: "",
  position: "",
  nation: "",
  club: "",
  age: "",
};

export default initialState;
