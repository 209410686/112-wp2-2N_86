import { useEffect } from "react";
import { getBooking } from '../../services/apiBookings'

const Bookings_86 = () =>{
    useEffect(() => {
        getBooking(1).then((data)=>console.log('booking(1) data',data));
    },[]);
    return <>Bookings_86 page</>;
};

export default Bookings_86;