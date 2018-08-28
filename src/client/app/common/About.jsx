import React , { Component } from 'react';

var styles = {
    height: 650
};

var spanStyles ={
    marginTop: 35,
    marginBottom: 35,
    width: 150,
    height: 2
}

export default class About extends Component{

    render(){
        return(
            <section id="profile">
            <div className="container section-wrapper">
              <div className="sectin-content">
                <div className="row">
                    <div className="col-md-7 match-height" style={styles}>
                        <div className="profile-text padding-right-yes">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="section-title uppercase">Hello, My Name is Hosen.</h2>
                              <p className="about"> Hosen Poursaeed, residing in Waterloo, Canada, born and grew up in Esfahan, Iran. Highly motivated web aplication developer with international client portfolio. </p>
                              <span style={spanStyles}></span>
                              <p className="text-grey animated bounceInUp" > I currently work at The Vision Investment Group, where I spend most of my time crafting and working on awesome projects. </p>
                              <p className="text-grey" style={{opacity: 0}}> Website Development does not have to be so frustrating when your site is in safe and experienced hands.</p>
                            </div>
                          
                        </div>
                        <div className="contact-details padding-right-yes">
                          <div className="row">
                            <div className="col-sm-6 col-md-5">
                              <h4 className="uppercase">Contact Details</h4>
                              <ul className="list-unstyled text-grey">
                                <li>Hosen Poursaeid</li>
                                <li><a href="tel:+12268982302">+1 226 898 2302</a></li>
                                <li><a href="mailto:support@rutulshah.com">hello@hpoursaeed.com</a></li>
                                
                              </ul>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        </section>
        )
    }
}