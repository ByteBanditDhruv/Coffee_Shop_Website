$(document).ready(function () {
    $('.counting').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });
});

function openPopup(coffee) {
    const coffeeData = {
        americano: {
            name: 'Americano Coffee',
            desc: 'A bold and smooth coffee made by combining rich espresso with hot water. Perfectly balanced for a clean, robust taste that highlights the pure essence of coffee beans.',
            price: '$18.00',
            img: 'assets/americano-coffee.jpg'
        },
        caffeLatte: {
            name: 'Caffè Latte',
            desc: 'A creamy blend of rich espresso and steamed milk, topped with a light layer of foam. Smooth, mild, and comforting with every sip.',
            price: '$12.00',
            img: 'assets/latte-coffee.jpg'
        },
        cappuccino: {
            name: 'Cappuccino',
            desc: 'A classic Italian coffee with a bold espresso base, topped with equal parts steamed milk and airy milk foam. Balanced and velvety.',
            price: '$12.00',
            img: 'assets/cappuccino.jpg'
        },
        flatWhite: {
            name: 'Flat White',
            desc: 'A silky coffee made with rich espresso and velvety microfoam, offering a smooth texture and full coffee flavor in every sip.',
            price: '$12.00',
            img: 'assets/flat-white.png'
        },
        caffeMocha: {
            name: 'Caffè Mocha',
            desc: 'A delightful fusion of espresso, steamed milk, and rich chocolate, finished with a swirl of whipped cream for a sweet, indulgent treat.',
            price: '$12.00',
            img: 'assets/mocha.jpg'
        },
        coldBrew: {
            name: 'Cold Brew',
            desc: 'Slow-steeped for a smooth, naturally sweet coffee with low acidity and bold flavor. Served chilled for a refreshing coffee experience.',
            price: '$17.00',
            img: 'assets/cold-brew.jpg'
        }
    };


    const data = coffeeData[coffee];

    document.getElementById('popupTitle').innerText = data.name;
    document.getElementById('popupDescription').innerText = data.desc;
    document.getElementById('popupPrice').innerText = 'Price: ' + data.price;
    document.getElementById('popupImg').src = data.img;

    document.getElementById('coffeePopup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('coffeePopup').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    document.getElementById('addToCartBtn').style.display = 'inline-block';
    document.getElementById('quantityControl').style.display = 'none';
    document.getElementById('cartQty').value = 1; // Reset quantity
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 1 }
        }
    });
});

function openSearch() {
    document.getElementById("searchOverlay").classList.add("active");
}

function closeSearch() {
    document.getElementById("searchOverlay").classList.remove("active");
}