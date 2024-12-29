import React from "react";
import Link from "next/link";

export default function ProductDetailsTabs() {
  return (
    <>


      <section>
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus veritatis, doloremque consequuntur, accusantium voluptas nisi magnam, dolorem porro cupiditate amet distinctio dignissimos hic facilis a saepe rerum optio! Alias?</div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, id!</div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">test test test test test test test </div>
          </div>
        </div>

      </section>



    </>
  );
}
