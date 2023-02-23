import React from "react";
import IconMessenger from "../icon/MessengerIcon";
import iconPhone from "../../images/icon-phone.svg";
import iconEmail from "../../images/icon-email.svg";
import iconArrow from "../../images/icon-arrow--small.svg";
import iconTarget from "../../images/icon-target.svg";

let lastScrollY = 0;

class InfoTool extends React.Component {
  constructor() {
    super();
    this.toggleInfoBox = this.toggleInfoBox.bind(this);
    this.handleOutsideClickFromInfoBox =
      this.handleOutsideClickFromInfoBox.bind(this);
    this.state = {
      popupVisible: false,
      activeName: false,
    };
  }

  /*event for open or close info box when click */
  toggleInfoBox() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener(
        "click",
        this.handleOutsideClickFromInfoBox,
        false
      );
    } else {
      document.removeEventListener(
        "click",
        this.handleOutsideClickFromInfoBox,
        false
      );
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (lastScrollY === 0) {
      this.setState({ activeName: false });
    } else {
      this.setState({ activeName: true });
    }
  };

  handleOutsideClickFromInfoBox(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleInfoBox();
  }

  render() {
    const info = this.props.content,
      infoPhone = "tel:" + info.heroPhone,
      infoEmail = "mailTo:" + info.heroEmailm,
      arrowTitle = info.arrowTitle;

    return (
      <div
        className={
          this.state.popupVisible ? "info-tool info-tool--open" : "info-tool"
        }
        ref={(node) => {
          this.node = node;
        }}
      >
        <div className="info-tool__content">
          <div
            className={`${
              this.state.activeName
                ? "info-tool__show info-tool__show--hide"
                : "info-tool__show"
            }`}
          >
            <p className="info-tool__show-text">{arrowTitle}</p>
            <img
              className="info-tool__show-icon"
              src={iconTarget}
              alt="Spinned arrow"
            />
          </div>
          <div className="info-tool__info">
            <div
              className="info-tool__info-icons"
              onClick={this.toggleInfoBox}
              onKeyDown={this.toggleInfoBox}
              role="presentation"
            >
              <img src={iconPhone} alt="Phone icon" />
              <img src={iconEmail} alt="Email icon" />
            </div>
            <div className="info-tool__info-content">
              <h4 className="info-tool__info-title">{info.title}</h4>
              <p>
                <a href={infoPhone} className="info-tool__info-link">
                  {info.heroPhone}
                </a>
              </p>
              <p>
                <a href={infoEmail} className="info-tool__info-link">
                  {info.heroEmail}
                </a>
              </p>
              <img
                role="presentation"
                className="info-tool__info-arrow"
                src={iconArrow}
                alt="Right arrow icon"
                onClick={this.toggleInfoBox}
                onKeyDown={this.toggleInfoBox}
              />
            </div>
          </div>
          <div className="info-tool__fb">
            <a
              href={info.heroMessengerPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="info-tool__fb-link"
            >
              <IconMessenger />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoTool;
