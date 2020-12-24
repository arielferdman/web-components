class FormSoundIcon extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.template = `
  <style>
    @import url(https://fonts.googleapis.com/css?family=Raleway:400, 700);

    /*!
 *  Font Awesome 4.5.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
    @font-face {
      font-family: "FontAwesome";
      src: url("../fonts/fontawesome-webfont.eot?v=4.5.0");
      src: url("../fonts/fontawesome-webfont.eot?#iefix&v=4.5.0")
          format("embedded-opentype"),
        url("../fonts/fontawesome-webfont.woff2?v=4.5.0") format("woff2"),
        url("../fonts/fontawesome-webfont.woff?v=4.5.0") format("woff"),
        url("../fonts/fontawesome-webfont.ttf?v=4.5.0") format("truetype"),
        url("../fonts/fontawesome-webfont.svg?v=4.5.0#fontawesomeregular")
          format("svg");
      font-weight: normal;
      font-style: normal;
    }

    .fa {
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .fa-thumbs-o-up:before {
      content: "\f087";
    }

    .fa-ban:before {
      content: "\f05e";
    }

    body {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      background: #c0392b;
      font-family: Raleway;
      color: white;
      letter-spacing: 1px;
    }

    .card-form {
      width: 500px;
      border-radius: 10px;
      background: white;
      box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
        0 17px 17px 0 rgba(0, 0, 0, 0.15);
    }

    .card-form .form-title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      font-size: 20px;
      font-weight: bold;
      background: #27ae60;
      border-radius: 10px 10px 0 0;
    }

    .card-form .form-body {
      padding: 10px;
    }

    .card-form .form-body .row {
      display: flex;
      justify-content: space-around;
      padding: 10px;
    }

    .card-form .form-body .row input[type="text"],
    .card-form .form-body .row input[type="url"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      margin: 0 15px;
      height: 35px;
      padding: 5px 15px;
      border-radius: 5px;
      outline: none;
      border: none;
      background: #e8ebed;
      color: #576366;
      font-size: 14px;
    }

    .card-form .rule {
      height: 2px;
      background: #e8ebed;
      margin: 0px 35px;
    }

    .card-form .form-footer {
      margin: 0 25px 15px 25px;
      padding: 15px 10px;
    }

    .card-form .form-footer a {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      border: none;
      border-radius: 5px;
      padding: 5px 15px;
      background: #27ae60;
      margin-right: 10px;
      font-size: 14px;
    }

    .card-form .form-footer span {
      margin-left: 8px;
    }

    a:hover {
      cursor: pointer;
    }

    a {
      background-color: #fff;
      border: 0;
      outline: 0;
      padding: 1.5rem 2rem;
      font-size: 4rem;
      font-family: monospace;
      box-shadow: 0px 15px 25px -5px #0057ab;
      transition: all 0.001s;
      cursor: pointer;
      border-radius: 5px;
      border-bottom: 4px solid #d9d9d9;
    }
    a:active {
      box-shadow: 0px 4px 8px #0065c8;
      transform: scale(0.92);
    }

  </style>
  <div class="card-form">
    <form class="signup">
      <div class="form-title">Create audio</div>
      <div class="form-body">
        <div class="row">
          <input type="text" placeholder="French sentence" />
        </div>
        <div class="row">
          <input type="text" placeholder="English sentence" />
        </div>
        <div class="row">
          <input type="url" placeholder="Audio url" />
        </div>
      </div>
      <div class="rule"></div>
      <div class="form-footer">
        <a>Insert<span class="fa fa-thumbs-o-up"></span></a>
        <a>Cancel<span class="fa fa-ban"></span></a>
      </div>
    </form>
  </div>`;
  }

  connectedCallback() {
    // this.shadowRoot.appendChild(this.shadowRoot.template);
    this.root.innerHTML = this.template;
  }
}

customElements.define("form-sound-icon", FormSoundIcon);
