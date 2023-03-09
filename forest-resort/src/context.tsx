import React, { ChangeEvent, Component, ReactElement } from "react";
import { IdefaultValue, IR, IRoom } from "./utils/types";
import items from "./data";
import { defaultValue, FILTER_MESSAGES } from "./utils/constants";

const RoomContext = React.createContext(defaultValue);

interface IRoomProvider {
  children: ReactElement;
}

class RoomProvider extends Component<IRoomProvider> {
  state: IdefaultValue = defaultValue;

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      type: FILTER_MESSAGES.all,
      capacity: 1,
      price: maxPrice,
      minPrice: 0,
      maxPrice,
      minSize: 0,
      maxSize: maxSize,
      breakfast: false,
      pets: false,
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

  handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const value =
      target.type === "checkbox"
        ? (target as unknown as HTMLInputElement).checked
        : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, capacity, type, breakfast, price, minSize, maxSize, pets } =
      this.state;
    let tempRooms = [...rooms] as unknown as IR[];
    // capacity = parseInt(capacity);
    // price = parseInt(price);

    if (type !== "all") {
      tempRooms = tempRooms.filter((item) => item.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((item) => item.capacity >= capacity);
    }
    tempRooms = tempRooms.filter((item) => item.price <= price);
    tempRooms = tempRooms.filter(
      (item) => item.size >= minSize && item.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter((item) => item.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((item) => item.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
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
