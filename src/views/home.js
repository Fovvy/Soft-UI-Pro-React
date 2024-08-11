import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Contact9 from '../components/contact9'
import Footer6 from '../components/footer6'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header
        text={
          <Fragment>
            <span className="home-text">Awareness</span>
          </Fragment>
        }
        rootClassName="header-root-class-name"
      ></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text01">
              <span>❝</span>
              <span className="HeadingOne">Empowering Security</span>
            </h1>
            <span className="home-text04">
              <span>Feel the difference, </span>
              <br></br>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="Experience Fovvys"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="Resources"></OutlineGrayButton>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGN5YmVyc2VjdXJpdHl8ZW58MHx8fHwxNzIyNzkxODk4fDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        loading="eager"
        className="home-image"
      />
      <section className="home-features">
        <FeatureCard
          text="Implement Zero Trust Principles to verify and secure every user, device and application on your network."
          title="Fully Responsive"
          heading={
            <Fragment>
              <h5 className="home-text07 HeadingThree">
                Zero Trust Architecture
              </h5>
            </Fragment>
          }
          imageSrc="/credit%20card1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Ensure the integrity, confidentiality, and availability of your blockchain assets."
          heading={
            <Fragment>
              <h5 className="home-text08 HeadingThree">
                <span>
                  Blockchain &amp; API
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Security</span>
              </h5>
            </Fragment>
          }
          newProp="Product Design"
          imageSrc="/person1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Utilizing machine learning to identify patterns, anomalies, and potential vulnerabilities "
          title="Less Code"
          heading={
            <Fragment>
              <h5 className="home-text12 HeadingThree">AI-Powered Security</h5>
            </Fragment>
          }
          imageSrc="/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Crafting Intuitive, Engaging, and High-Converting Digital Experiences"
          title="Components"
          heading={
            <Fragment>
              <h5 className="home-text13 HeadingThree">
                <span>
                  Product
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Design &amp; </span>
                <span>UX</span>
              </h5>
            </Fragment>
          }
          imageSrc="/cube1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container04">
        <div className="home-container05">
          <h1 className="home-text17 HeadingOne">
            Building Resillient Digital Legacies
          </h1>
          <span className="home-text18">
            Creating a resilient digital ecosystem capable of withstanding the
            most sophisticated attacks
          </span>
        </div>
        <div className="home-container06">
          <div className="home-container07">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image01"
            />
            <span className="home-text19 Small">
              <span className="home-text20">
                &quot;Over the span of the satellite record, Arctic sea ice has
                been declining significantly, while sea ice in the Antarctichas
                increased very slightly&quot;
              </span>
              <br></br>
              <span className="home-text22">-NOAA</span>
            </span>
            <div className="home-container08">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image02"
              />
            </div>
          </div>
          <div className="home-container09">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image03"
            />
            <div className="home-container10">
              <h3 className="HeadingTwo">
                So what does the new record for the lowest level of winter ice
                actually mean
              </h3>
              <p>
                <span>
                  The year is 2024. The battlefield isn&apos;t a dusty plain or
                  a smoke-filled trench; it&apos;s the sprawling, interconnected
                  network of computers, servers, and mobile devices that make up
                  our digital world. Every day, your business is under siege.
                  Hackers, cybercriminals, and state-sponsored actors probe your
                  defenses, seeking vulnerabilities to exploit, data to ransom,
                  and systems to disrupt. The threat is relentless, and the
                  consequences can be devastating.
                </span>
                <br></br>
                <br></br>
                <span>
                  But in this age of digital warfare, you&apos;re not alone.
                  Fovvy &amp; Co. stands as your frontline defense, a seasoned
                  battalion of cyber warriors armed with the latest
                  intelligence, cutting-edge technology, and a relentless
                  determination to protect your digital assets.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container11">
          <div className="home-container12">
            <div className="home-container13">
              <h2 className="home-text29">
                Unlock the full potential of your digital enterprise.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="home-text30 Lead">
                Worried about scalability? - We got you!
              </p>
              <p className="home-text31 Body">
                <span className="home-text32">
                  &quot;Take up one idea. Make that one idea your life - think
                  of it, dream of it, live on that idea. Let the brain, muscles,
                  nerves, every part of your body, be full of that idea, and
                  just leave every other idea alone. This is the way to success.
                  A single rose can be my garden... a single friend, my
                  world.&quot;
                </span>
              </p>
              <p className="home-text33">Parastus Nghiilmwao</p>
              <p className="home-text34 Small">Founder, Fovvy&amp;Co</p>
              <div className="home-container14">
                <img
                  alt="image"
                  src="/team-4-200h.jpg"
                  className="home-image04"
                />
                <div className="home-container15"></div>
                <img
                  alt="image"
                  src="/team-3-200h.jpg"
                  className="home-image05"
                />
                <div className="home-container16"></div>
                <img
                  alt="image"
                  src="/team-2-200h.jpg"
                  className="home-image06"
                />
              </div>
            </div>
          </div>
          <div className="home-logos">
            <div className="home-container17">
              <div className="home-container18">
                <div className="home-container19">
                  <img
                    alt="image"
                    src="/logo-asana.svg"
                    className="home-image07"
                  />
                </div>
                <div className="home-container20">
                  <img
                    alt="image"
                    src="/logo-slack.svg"
                    className="home-image08"
                  />
                </div>
                <div className="home-container21">
                  <img
                    alt="image"
                    src="/logo-google-drive.svg"
                    className="home-image09"
                  />
                </div>
              </div>
              <div className="home-container22">
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/logo-shopify.svg"
                    className="home-image10"
                  />
                </div>
                <div className="home-container24">
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                    className="home-image11"
                  />
                </div>
                <div className="home-container25">
                  <img
                    alt="image"
                    src="/logo-invision.svg"
                    className="home-image12"
                  />
                </div>
              </div>
              <div className="home-container26">
                <div className="home-container27">
                  <img
                    alt="image"
                    src="/logo-attlasian.svg"
                    className="home-image13"
                  />
                </div>
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/logo-weave.svg"
                    className="home-image14"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img alt="image" src="/waves-white.svg" className="home-image15" />
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <section className="home-contaier">
        <div className="home-container29">
          <div className="home-container30">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text35 HeadingTwo">Be Aware of the Threats</h2>
          <h3 className="home-text36 HeadingTwo">
            <span className="home-text37">&amp; Know How To Handle Them</span>
            <br></br>
          </h3>
          <span className="home-text39">
            <span className="home-text40">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container31">
          <div className="home-container32">
            <div className="home-container33"></div>
            <div className="home-container34">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon2">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text41 HeadingOne">Search and Discover!</h1>
              <span className="home-text42">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container35">
            <ListItem newProp="1. Listen to Social Conversations"></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container36">
          <div className="home-container37">
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container38">
            <div className="home-container39"></div>
            <div className="home-container40">
              <svg viewBox="0 0 1152 1024" className="home-icon4">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text45 HeadingOne">Talk and Meet!</h1>
              <span className="home-text46">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <Contact9
        content1={
          <Fragment>
            <p className="home-text49 thq-body-large">
              For general inquiries and partnership opportunities, please email
              us at contact@fovvynco.com
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text50 thq-heading-2">Contact Us</h2>
          </Fragment>
        }
        location1={
          <Fragment>
            <h3 className="home-text51 thq-heading-3">
              <span>
                Fovvy&amp;Co
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>is situated in Windhoek, Namibia</span>
            </h3>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <p className="home-text55 thq-body-large">
              123 Cybersecurity Street, Digital City, Techland
            </p>
          </Fragment>
        }
      ></Contact9>
      <Footer6
        link6={
          <Fragment>
            <span className="home-text56 thq-body-small">Tryhackme</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="home-text57 thq-body-small">Codepen</span>
          </Fragment>
        }
        logoSrc="/fovvyshadow2-1500w.png"
        content3={
          <Fragment>
            <span className="home-text58 thq-body-small">
              © 2024 Fovvy&apos;s. All rights reserved.
            </span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <strong className="home-text59 thq-body-large">Fovvy&apos;s</strong>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <strong className="home-text60 thq-body-large">Resources</strong>
          </Fragment>
        }
        socialLinkTitleCategory={
          <Fragment>
            <strong className="home-text61 thq-body-large">
              Connect with us on social media
            </strong>
          </Fragment>
        }
      ></Footer6>
    </div>
  )
}

export default Home
