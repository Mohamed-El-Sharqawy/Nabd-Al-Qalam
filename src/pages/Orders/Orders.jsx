import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const reversedOrders = orders.reverse();

  useEffect(() => {
    const getAllOrders = async () => {
      const res = await fetch(
        "https://nabd-al-qalam-server-production.up.railway.app/orders"
      );

      const data = await res.json();

      if (data) {
        setOrders(data);
      }
    };

    if (user.isAdmin) {
      getAllOrders();
    }
  }, [user.isAdmin]);

  if (user.isAdmin)
    return (
      <section className="orders">
        <h1>الطلبات</h1>

        <div>
          {reversedOrders.map((order) => {
            const orderDate = new Date(order.createdAt);

            // Get the current date
            const currentDate = new Date();

            const sevenDaysAgo = new Date().setDate(currentDate.getDate() - 10);

            if(orderDate <= sevenDaysAgo) return;

            // Calculate the difference in milliseconds
            const differenceInMilliseconds = currentDate - orderDate;

            // Convert milliseconds to days
            const millisecondsPerDay = 24 * 60 * 60 * 1000;
            const daysPassed = Math.floor(
              differenceInMilliseconds / millisecondsPerDay
            );

            return (
              order.orderItems.length > 0 && (
                <div
                  style={{
                    border: "1px solid black",
                    padding: "1rem",
                    borderRadius: "0.65rem",
                    margin: "0 auto 1rem",
                    width: "max-content",
                  }}
                  key={order._id}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    المبلغ الكلي : {order.orderTotalPrice}
                  </p>

                  {order.orderItems.map((item) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        direction: "rtl",
                      }}
                      key={item._id}
                    >
                      <span>{item?.name}</span>
                      <span
                        style={{
                          direction: "ltr",
                        }}
                      >
                        {item.unitprice} x {item.quantity}
                      </span>
                    </div>
                  ))}

                  {order.deliveryAddress && (
                    <div
                      style={{
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                        direction: "rtl",
                      }}
                    >
                      <span>الاسم : {order?.deliveryAddress?.name}</span>
                      <span>العنوان : {order?.deliveryAddress?.address1}</span>
                      <span>المدينة : {order?.deliveryAddress?.city}</span>
                      <span>
                        الولاية / المحافظة : {order?.deliveryAddress?.state}
                      </span>
                      <span>رقم الهاتف : {order.customer.phone}</span>
                      <span>الرقم البريدي : {order?.deliveryAddress?.zip}</span>
                      <span>
                        منذ : {daysPassed == 0 ? "اليوم" : `${daysPassed} يوم`}
                      </span>
                    </div>
                  )}
                </div>
              )
            );
          })}
        </div>
      </section>
    );
};

export default Orders;
