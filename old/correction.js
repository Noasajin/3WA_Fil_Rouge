const products = [
    {title:"mon titre", description:"La description",img:"./img/monimg.png"},
    {title:"mon titre 2", description:"La description 2",img:"assets/images/product_0.jpg"}   
]

const card = `
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
        `

document.addEventListener("DOMContentLoaded", () => {
    /**
     * 
     * @param {string} titre
     * @param {string} description
     * @param {string} img
     */
    const generateProduct = (titre, description, img) => {
        // on creer la div card-product et on met son contenu
        const div = document.createElement("div")
        div.classList.add("card-product")
        div.innerHTML = card
        
        //on recupere les elemets de la card
        const imgElement =  div.getElementsByClassName("product-img")
        const titleElement =  div.getElementsByClassName("title-product")
        const descriptionElement =  div.getElementsByClassName("description-product")
        
        //on met les valeurs dans les elements
        imgElement[0].src = img
        titleElement[0].innerText = titre
        descriptionElement[0].innerText = description
        
        // on ajoute la card au DOM
        addProductToDOM(div)
    }
    
    /**
     * 
     * @param {HTMLElement} element 
     * @return {void}
     */
    const addProductToDOM = (element) => {
        const container = document.getElementsByClassName("container-products")[0]
        container.append(element)
    }
    
    for(let i = 0; i< products.length; i++){
        generateProduct(products[i].title, products[i].description, products[i].img)
    }
    
    
})


/**
 * 
 * @param {number} num1
 * @param {number} num2
 * @return {number | null} 
 */
function addition(num1,num2){
    return num1 + num2
}
