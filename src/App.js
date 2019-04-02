import React, { Component } from 'react';
import './explorer/App.css';
import $ from 'jquery'
import MobileIcon from './site/menuIcon'
import MobileMenu from './site/mobileMenu'
import WebMenu from './site/webMenu'
import DevName from './site/devName'
import Aboutme from './site/aboutMe'
import Skills from './site/skills'
import Experience from './site/experience'
import Education from './site/education'
import Projects from './site/projects'
import Footer from './site/footer'
import Game from './site/gameTicTacToe/game'

class App extends Component {

  constructor(props) {
    super(props)
    this.closeHeader = this.closeHeader.bind(this);
    this.state = {
      isActive: true,
      name: "Romit Pednekar",
      profession: "Software Developer",
      email: "",
      message: "",
      error: false
    }
    this.sendMail = this.sendMail.bind(this);
    this.handleInEmail = this.handleInEmail.bind(this);
    this.handleChangeinMessage = this.handleChangeinMessage.bind(this);

    this.state.menuTabs = [{ name: "solo explorer", img: "images/solo.jpg" }, { name: "hire a guide", img: "images/guide.jpg" }]
  }


  componentDidMount() {
    let self = this;
    $('header').css("position", "relative")
    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function (e) {

      // Treat as normal link if no-scroll class
      if ($(this).hasClass('no-scroll')) return;

      e.preventDefault();
      var heading = $(this).attr('href');
      var scrollDistance = $(heading).offset().top;

      $('html, body').animate({
        scrollTop: scrollDistance + 'px'
      }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

      // Hide the menu once clicked if mobile
      self.setState({
        isActive: true
      })
      $('header').css("position", "relative")
      if ($('header').hasClass('active')) {
        $('header, body').removeClass('active');
      }

    });

    // Scroll to top
    $('#to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function () {
      var scrollDistance = $('#lead').next().offset().top;
      $('html, body').animate({
        scrollTop: scrollDistance + 'px'
      }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function () {

      var $this = $(this); // Store reference to this
      var $userContent = $this.children('div'); // user content

      // Create each timeline block
      $userContent.each(function () {
        $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
      });

      // Add icons to each block
      $this.find('.vtimeline-point').each(function () {
        $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
      });

      // Add dates to the timeline if exists
      $this.find('.vtimeline-content').each(function () {
        var date = $(this).data('date');
        if (date) { // Prepend if exists
          $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
        }
      });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
      $('header, body').addClass('active');
    });

    // Close mobile menu

    // Load additional projects
    // $('#view-more-projects').click(function (e) {
    //   e.preventDefault();
    //   $(this).fadeOut(300, function () {
    //     $('#more-projects').fadeIn(300);
    //   });
    // });
  }

  sendMail() {


    if (this.state.email && this.state.message) {
      this.setState({
        error: false
      })
      window.open('https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&to=pednekarromit59@gmail.com&su=' + this.state.email + '&body=' + this.state.message + 'Share Your thoughts here...');
      this.setState({
        email: "",
        message: ""
      })
    } else {
      this.setState({
        error: true
      })
    }

  }

  handleInEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeinMessage(event) {
    this.setState({ message: event.target.value });
  }

  closeHeader() {
    this.setState({
      isActive: !this.state.isActive
    })

    $('header, body').removeClass('active');
    if (!this.state.isActive) {
      $('header').css("position", "relative")
    } else {
      $('header').css("position", "fixed")
    }
  }

  isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  render() {
    return (
      <div>
        {/* <Game size={[1, 2, 3, 4, 5, 6, 7, 8, 9]} /> */}
        <header>
          {this.isMobile() ? <MobileIcon type={this.state.isActive} closeHeader={this.closeHeader} /> : ''}

          {!this.isMobile() ? <WebMenu /> : <MobileMenu isActive={this.state.isActive} />}
        </header>

        <DevName name={this.state.name} profession={this.state.profession}></DevName>
        <Aboutme />
        <Experience />

        <Education />



        <Skills />

        <div id="contact">
          <h2>Get in Touch</h2>
          <div id="contact-form">

            <input type="hidden" name="_subject" value="Contact request from personal website" />
            <input type="email" name="_replyto" value={this.state.email} onChange={this.handleInEmail} placeholder="Your email" required />
            <textarea name="message" value={this.state.message} onChange={this.handleChangeinMessage} placeholder="Your message" required></textarea>
            <button type="submit" onClick={this.sendMail} style={this.state.error ? { "color": "red" } : { "color": "" }}>Send</button>
          </div>

        </div>
        <Footer />
      </div >
      // <div>
      //   {this.state.menuTabs.map(function (tab, index) {
      //     <div>
      //       <img src={tab.img} />
      //       <div> {tab.name} </div>
      //     </div>


      //   })}
      // </div>
    )
  }
}

export default App;
