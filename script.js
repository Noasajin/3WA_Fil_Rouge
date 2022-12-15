const products = [
    {title:'Café', description:'Voici notre plus fin café.', img:'images/coffee.jpg'}, 
    {title:'Thé', description:"Grand soin apporté", img:'images/product_6.jpg'}
]


document.addEventListener('DOMContentLoaded', () => {
    const generateProduct = (titre, description, img) => {
        const card = `
            <div class="card-product">
                <div class="container-product-img">
                    <img class='product-img' src="">
                </div>
                <div class="card-body-product">
                    <h3 class="title-product"></h3>
                    <p class="description-product"></p>
                    <div class="footer-card">
                        <div class="footer-card-qte">
                            <button class="btn-product-qte">-</button>
                            <strong>0</strong>
                            <button class="btn-product-qte">+</button>
                        </div>
                        <button class="btn-product">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        `
        const div = document.createElement("div");
        div.innerHTML = card;
        
        const imgElement =  div.getElementsByClassName("product-img");
        const titleElement =  div.getElementsByClassName("title-product");
        const descriptionElement =  div.getElementsByClassName("description-product");
        
        imgElement[0].src = img
        titleElement[0].innerText = titre
        descriptionElement[0].innerText = description
        
        addProductToDOM(div);
    }
    
    const divProducts = document.getElementsByTagName('div')
    const divContainerProducts = divProducts.getElementsByClassName('card-product')
    
    const addProductToDOM = (element) => {
        divContainerProducts.append(element)
    }
    
    generateProduct(products[0].title, products[0].description, products[0].img)
    
    generateProduct(products[1].title, products[1].description, products[1].img)
});

///J'indique toutes les balises qui concernent les classes, je les assigne ensuite dans des variables
/// Dans ces mêmes variablesj j'assigne les classes correspondantes
/// J'assigne également dans ces variables le contenu qui correspond (ex : les titres iront dans la classe title-product dans la balise H3, etc)