// ЗАПЯТЫЕ ПОЯВИЛИСЬ ИЗЗА ПЕРЕБОРА МАССИВА, ИСПРАВИТЬ МОЖНО ПРИ ПОМОЩИ МЕТОДА reduce
const goods = [
    {
        title: 'Shirt',
        price: 120
    },
    {
        title: 'Phone',
        price: 20
    },
    {
        title: 'Jacket',
        price: 420
    }
]


const renderGoodsItem = ({title, price}) => {
    return `<div class="good-item-inner">
                <div class="good-item">
                    <div class="img">
                    </div>
                    <div class="price-title">
                        <h3>${title}</h3>
                        <p>${price}</p> 
                    </div>
                    <div>
                        <button class="btn-in-cart">
                               в корзину
                        </button>
                    </div>
                 </div>
            </div>`
};

const renderGoodsList = (list) => {
    const goodsList = list.reduce((acc, currentValue) => {
        return acc + renderGoodsItem(currentValue)
    }, '')
    document.querySelector('.goods-list').innerHTML = goodsList;
};

document.addEventListener("DOMContentLoaded", () => {
    renderGoodsList(goods);
});