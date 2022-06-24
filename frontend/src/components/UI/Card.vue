<template>
    <div>
        <div class="__area text-center">
            <a class="__card">
                <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
                    class="img-fluid __img" />
                <div class="__card_detail text-left">
                    <h4>{{ food.name }}</h4>
                    <p>
                        {{ food.description }}
                    </p>
                    <div class="__type">
                        <span>{{ food.country }}</span>
                        <span>{{ food.category }}</span>
                    </div>
                    <div class="__detail">
                        <span>{{ food.price }} ₽</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: "my-card",
    props: {
        food: {
            required: true
        }
    },
}
</script>

<style>
.__area {
    font-family: 'Cairo', sans-serif;
    color: #7c7671;
    margin-top: 100px
}

.__card {
    max-width: 350px;
    margin: auto;
    cursor: pointer;
    position: relative;
    display: inline-block;
    color: unset;
}

.__card:hover {
    color: unset;
    text-decoration: none;
}

.__img {
    border-radius: 10px;
}

.__card_detail {
    box-shadow: 0 4px 15px rgba(175, 77, 0, 0.13);
    padding: 13px;
    border-radius: 8px;
    margin: -30px 10px 0;
    position: relative;
    z-index: 2;
    background-color: #fff;
}

.__card_detail h4 {
    color: #474340;
    line-height: 100%;
    font-weight: bold;
}

.__card_detail p {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0.4rem;
}

.__type span {
    background-color: #e3feed;
    padding: 5px 10px 7px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    color: #52fca4;
    font-weight: bold;
    line-height: 100%;
}

.__detail {
    margin-top: 5px;
}

.__detail i {
    font-size: 21px;
    display: inline-block;
    vertical-align: middle;
}

.__detail i:nth-child(3) {
    margin-left: 15px;
}

.__detail span {
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 2px;
}
</style>