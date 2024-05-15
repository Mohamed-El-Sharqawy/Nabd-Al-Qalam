import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllOrders = async () => {
      const res = await fetch("https://comfortable-duck-pants.cyclic.app/orders");

      const data = await res.json();

      if (data) {
        setOrders(data);
      }
    };

    if (user.isAdmin) {
      getAllOrders();
    }
  }, [user.isAdmin]);

  if (!user.isAdmin) {
    return navigate("/");
  }

  return (
    <div>
      {orders.map(
        (order) =>
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
                  <span>الرقم البريدي : {order?.deliveryAddress?.zip}</span>
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default Orders;
