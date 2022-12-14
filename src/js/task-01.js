const categories = document.querySelectorAll("li.item");


const elementsCounter = (parentTag, childrenForCountingElements) => {
    const parent = document.querySelector(parentTag);
    const children = parent.querySelectorAll(childrenForCountingElements);
    console.log(`Number of categories: ${children.length}`);

    for (const category of children) {
        console.log(
            `Category: ${category.querySelector("h2").textContent}\nElements: ${category.querySelectorAll("ul > li").length
            }`
        );
    }
}

 
elementsCounter("ul#categories", "li.item");
