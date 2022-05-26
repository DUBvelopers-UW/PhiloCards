import React from "react";
const AddressMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.040789559094!2d-122.30439958419102!3d47.664203991989886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014888956b6ad%3A0xe309ce0f2e9b5e8e!2s4801%2024th%20Ave%20NE%2C%20Seattle%2C%20WA%2098105!5e0!3m2!1sen!2sus!4v1649007940221!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export { AddressMap };
