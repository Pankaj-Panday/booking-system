import React from "react";

export default function Map() {
  return (
    <div className="container relative mx-auto h-[450px]">
      <div className="pattern-isometric absolute inset-0 pattern-bg-white pattern-primary-500 pattern-opacity-20 pattern-size-6"></div>
      <div className="absolute inset-0 flex items-center justify-center font-body text-2xl text-primary-400">
        Loading Map...
      </div>
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.179468706469!2d79.12451237536528!3d29.400751875254194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a1397584b4f1b%3A0x1165255851566c65!2sAasthan%20mall!5e1!3m2!1sen!2sin!4v1735726529522!5m2!1sen!2sin"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
