import { withRoomConsumer } from "../../context";
import { IdefaultValue, IR } from "../../utils/types";
import Loading from "../Loading/Loading";
import RoomFilter from "../RoomFilter/RoomFilter";
import RoomList from "../RoomList/RoomList";

function RoomContainer({context}: {context: IdefaultValue}) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  console.log("rooms", rooms);
  console.log("sortedRooms", sortedRooms);

  return (
    <>
      <RoomFilter rooms={rooms as unknown as IR[]} />
      <RoomList rooms={sortedRooms as unknown as IR[]} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
