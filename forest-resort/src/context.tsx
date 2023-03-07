import React, { Component, ReactElement } from "react";
import { IdefaultValue, IRoom, IRooms } from "./utils/types";
import items from "./data";

const defaultValue: IdefaultValue = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
};

const RoomContext = React.createContext(defaultValue);

interface IRoomProvider {
  children: ReactElement;
}

class RoomProvider extends Component<IRoomProvider> {
  state: IdefaultValue = defaultValue;

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items: IRoom[]) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...(this.state as IdefaultValue) }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
