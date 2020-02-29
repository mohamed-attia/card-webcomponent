class MyCard extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render()
  }

  render(){
    const cardTemplate = document.createElement('template');
    cardTemplate.innerHTML = `
    <style>
        .card-container {
            width:350px;
            background-color: #eee;
            border: 3px solid #222;
            text-align: center;
            padding: 10px;
            margin:25px;
        }
    </style>
    <div class="card-container" >
        <slot name="heading" class="heading"></slot>
        <slot name="content"></slot>
        <button>read more</button>
    </div>
`
    const  cardTemplatecontent =  cardTemplate.content;
    this.shadowRoot.appendChild(cardTemplatecontent.cloneNode(true))

    if(this.hasAttribute('heading-color')){
        this.shadowRoot.querySelector('.heading').style.color = this.getAttribute('heading-color')
    }

    if(this.hasAttribute('bg-color')){
        this.shadowRoot.querySelector('.card-container').style.backgroundColor = this.getAttribute('bg-color')
    }
  }

}

customElements.define("my-card", MyCard);
