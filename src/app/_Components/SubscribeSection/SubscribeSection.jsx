import React from 'react'

export default function SubscribeSection() {
  return (
<>

<section className="flat-spacing-27"><div className="container-full"><div className="flat-title mb_1 wow fadeInUp" data-wow-delay="0s" style={{visibility: 'visible', animationDelay: '0s'}}><span className="title">Get 10% of first order </span><p className="sub-title text_black-2">Be the first to know about new arrivals, exclusive promotions, her different <br />stories &amp; receive 10% off your first order.</p></div><div className="flat-subscrite-wrap"><div className="tfSubscribeMsg "><p style={{color: 'rgb(52, 168, 83)'}}>You have successfully subscribed.</p></div><form className="form-newsletter" acceptCharset="utf-8" data-mailchimp="true" action="#" method="post"><div id="subscribe-content" className="subscribe-content"><fieldset className="email"><input required type="email" placeholder="Enter email address" tabIndex={0} aria-required="true" autoComplete="abc@xyz.com" name="email-form" /></fieldset><div className="button-submit"><button className="tf-btn btn-sm rounded-0 btn-fill rounded-0 animate-hover-btn text-uppercase letter-2 fw-6" type="submit">Subscribe</button></div></div><div id="subscribe-msg" /></form></div></div></section>

</>
  )
}
