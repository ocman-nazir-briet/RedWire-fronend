import './Home.css';
import React from 'react'

export default function Slider() {
    return (
        <div>
            <div>
                <center>
                    <div className="carousel slide" style={{ width: '85%' }} data-ride="carousel">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYq42EIfCCBWB3m13jPJA9d6TNEq0d85lMg&usqp=CAU" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Welcome to RedWire</h5>
                                        <p>You will find here everthing for your web security.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLYHXgW2m9T-OVgLkZ8AB--Ic5HUhAerVRw&usqp=CAU" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Welcome to RedWire</h5>
                                        <p>You will find everthing for your web security</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://www.bleepstatic.com/content/hl-images/2022/08/02/green-hacker-bright.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Welcome to RedWire</h5>
                                        <p>You will find everthing for your web security</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                    <div class="container mt-4" >
                        <div class="card-deck mb-3 text-center">
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">Free</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>10 Projects Allowed</li>
                                        <li>Beginner Level Researchers</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                                </div>
                            </div>
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">Pro</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>50 Projects Allowed</li>
                                        <li>Mid-level Researchers</li>
                                        <li>Priority email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
                                </div>
                            </div>
                            <div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">Enterprise</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Unlimited Projects Best for Enterprises use</li>
                                        <li>Advanced level Researchers</li>
                                        <li>Phone and email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
                                </div>
                            </div>
                        </div>
                        </div>
                </center>

                <div className="container p-3 my-3 bg-dark text-white">
                    <h1 style={{ color: 'blue' }}>Dislaimer! </h1>
                    <p>This is a Cyber Security Platform, where you can find
                        researchers all around the world so that they can find bugs and
                        vulnerabilities in your system in return of bounties.</p>
                </div>
                <div className="container p-3 my-3 bg-dark text-white">
                    <h1 style={{ color: 'red' }}>Warning! </h1>
                    <p>Misuse of data will result in legal actions, if a researcher finds a bug he/she is supposed to
                        directly report to the administration or the customer.
                    </p>
                </div>
            </div>
        </div>
    )
}
