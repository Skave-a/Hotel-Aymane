import React, { Component, ReactElement } from "react";
import { IdefaultValue, IR, IRoom } from "./utils/types";
import items from "./data";
import { defaultValue } from "./utils/constants";

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

  getRoom = (slug: string) => {
    let tempRooms = [...this.state.rooms] as unknown as IR[];
    const room = tempRooms.find((room: IR) => room.slug === slug);
    return room as IR;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component: Function) {
  return function ConsumeWrapper(props: IR) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
